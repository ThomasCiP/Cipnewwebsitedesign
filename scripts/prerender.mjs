// Post-build prerender step.
//
// Vite builds a client-only SPA whose raw HTML is an empty <div id="root">.
// This script boots the built site with `vite preview`, opens each route in a
// headless Chrome (via puppeteer-core + the system Chrome install), waits for
// React to render, injects per-route SEO metadata, and writes the fully
// rendered HTML back to dist/<route>/index.html.
//
// The client bundle still ships, so the app hydrates/re-renders normally in the
// browser — crawlers and social scrapers just now receive real content and a
// unique <title>/description per page instead of an empty shell.

import { preview } from 'vite'
import puppeteer from 'puppeteer-core'
import { mkdir, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const ORIGIN = 'https://www.christiansinpolitics.com'

// Locate a Chrome/Chromium executable. Prerendering needs a real browser; if
// none is found (e.g. a remote CI/Vercel Linux build with no browser installed)
// we skip prerendering rather than failing the build — the SPA still ships.
function findChrome() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean)
  return candidates.find((p) => existsSync(p)) || null
}

const CHROME = findChrome()

// One entry per route. `title` and `description` are the SEO metadata baked into
// that page's static HTML. Edit these freely — this is the single source of
// truth for per-page titles/descriptions.
const ROUTES = [
  {
    path: '/',
    out: 'index.html',
    title: 'Christians in Politics Australia | Faith in Public Life',
    description:
      'Christians in Politics (CiP) is a non-partisan Australian network encouraging Christians to engage relationally in public life. Invite us to your church or campus, or join our network.',
  },
  {
    path: '/start-here',
    out: 'start-here/index.html',
    title: 'Start Here | Christians in Politics Australia',
    description:
      'New to faith and politics, already in a party, or want to invite CiP to your church? Start here to find the next step that fits where you are.',
  },
  {
    path: '/join',
    out: 'join/index.html',
    title: 'Join a Political Party | Christians in Politics Australia',
    description:
      'A non-partisan guide for Christians on joining an Australian political party — Labor, Liberal, Nationals, Greens or One Nation — with links to official membership and youth wings.',
  },
  {
    path: '/events',
    out: 'events/index.html',
    title: 'Events | Christians in Politics Australia',
    description:
      'Gatherings, training and prayer meetings for Christians engaging in politics across NSW, the ACT and online. See where CiP will be next.',
  },
  {
    path: '/partners',
    out: 'partners/index.html',
    title: 'Our Partners & Friends | Christians in Politics Australia',
    description:
      'The Australian Christian organisations we partner with and recommend — including Freedom for Faith, the Australian Christian Lobby, Common Grace and Micah Australia.',
  },
  {
    path: '/resources',
    out: 'resources/index.html',
    title: 'Resources | Christians in Politics Australia',
    description:
      'Articles, guides and videos to help Australian Christians engage faithfully in politics — from understanding the political system to church resources and prayer guides.',
  },
  {
    path: '/about',
    out: 'about/index.html',
    title: 'About Us | Christians in Politics Australia',
    description:
      'Christians in Politics is a non-partisan movement of Christians from every denomination and party, encouraging faithful participation in Australian political life. Read our vision, mission and values.',
  },
  {
    path: '/contact',
    out: 'contact/index.html',
    title: 'Contact Us | Christians in Politics Australia',
    description:
      'Get in touch with Christians in Politics — ask a question or invite us to speak at your church. We would love to hear from you.',
  },
  {
    path: '/donate',
    out: 'donate/index.html',
    title: 'Support Our Work | Christians in Politics Australia',
    description:
      'Support Christians in Politics. Your giving helps us run events, create resources and equip Christians across Australia to be salt and light in public life.',
  },
]

// Runs inside the page. Rewrites the SEO-relevant tags to this route's values
// so each prerendered file has a unique title/description/canonical.
function applyMeta({ title, description, canonical }) {
  document.title = title

  const set = (selector, attr, value) => {
    const el = document.head.querySelector(selector)
    if (el) el.setAttribute(attr, value)
  }

  set('meta[name="description"]', 'content', description)
  set('meta[property="og:title"]', 'content', title)
  set('meta[property="og:description"]', 'content', description)
  set('meta[property="og:url"]', 'content', canonical)
  set('meta[name="twitter:title"]', 'content', title)
  set('meta[name="twitter:description"]', 'content', description)
  set('link[rel="canonical"]', 'href', canonical)
}

async function run() {
  if (!CHROME) {
    console.warn(
      '\n⚠  Prerender skipped: no Chrome/Chromium found. Shipping the un-prerendered SPA.\n' +
        '   (Deploy from a machine with Chrome, or set PUPPETEER_EXECUTABLE_PATH, to prerender.)\n'
    )
    return
  }

  const server = await preview({
    preview: { port: 4183, strictPort: true },
    logLevel: 'warn',
  })
  const base = server.resolvedUrls?.local?.[0]?.replace(/\/$/, '') || 'http://localhost:4183'

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage()
      const url = base + route.path
      await page.goto(url, { waitUntil: 'load', timeout: 30000 })
      // Wait for React to mount real content into #root, then let it settle.
      await page.waitForSelector('#root > *', { timeout: 15000 })
      await new Promise((r) => setTimeout(r, 500))

      const canonical = route.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${route.path}`
      await page.evaluate(applyMeta, {
        title: route.title,
        description: route.description,
        canonical,
      })

      const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => document.documentElement.outerHTML))
      const outPath = resolve(DIST, route.out)
      await mkdir(dirname(outPath), { recursive: true })
      await writeFile(outPath, html, 'utf8')
      console.log(`  ✓ prerendered ${route.path.padEnd(14)} -> dist/${route.out}`)
      await page.close()
    }
  } finally {
    await browser.close()
    await server.httpServer.close()
  }
}

run().catch((err) => {
  console.error('\nPrerender failed:', err)
  process.exit(1)
})
