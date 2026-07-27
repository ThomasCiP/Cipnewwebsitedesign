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
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = resolve(__dirname, '..', 'dist')
const ORIGIN = 'https://www.christiansinpolitics.com'

// Locate a Chrome/Chromium executable.
//
// Locally that's the system Chrome. On Vercel's Linux build container there is
// none, so we fall back to @sparticuz/chromium, a Chromium build packaged for
// serverless/Amazon Linux that unpacks itself to /tmp on first use.
//
// Set PRERENDER_NO_SYSTEM_CHROME=1 to skip the system paths — useful for testing
// the Vercel code path on a Mac that has Chrome installed.
async function findChrome() {
  if (!process.env.PRERENDER_NO_SYSTEM_CHROME) {
    const candidates = [
      process.env.PUPPETEER_EXECUTABLE_PATH,
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
    ].filter(Boolean)
    const found = candidates.find((p) => existsSync(p))
    if (found) return { executablePath: found, args: ['--no-sandbox', '--disable-setuid-sandbox'] }
  }

  try {
    const { default: chromium } = await import('@sparticuz/chromium')
    const executablePath = await chromium.executablePath()
    if (executablePath && existsSync(executablePath)) {
      console.log('  · using @sparticuz/chromium (no system Chrome found)')
      return { executablePath, args: chromium.args }
    }
  } catch (err) {
    console.warn(`  · @sparticuz/chromium unavailable: ${err.message}`)
  }
  return null
}

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

// Fallback used when no browser is available at all. Rewrites the SEO tags in
// the built index.html by string substitution and writes one file per route.
//
// This gets us unique titles/descriptions/canonicals without a browser — which
// is the part that actually matters for search. What it can't do is bake the
// rendered React content into the HTML, so crawlers that don't execute JS see
// an empty shell. Strictly worse than a real prerender, strictly better than
// nine pages sharing the homepage's title.
function rewriteMeta(html, { title, description, canonical }) {
  const esc = (s) =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

  let out = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`)

  const setMeta = (attr, name, value) => {
    // content after the identifying attribute…
    const after = new RegExp(`(<meta[^>]*\\b${attr}=["']${name}["'][^>]*\\bcontent=["'])[^"']*(["'])`, 'i')
    if (after.test(out)) {
      out = out.replace(after, `$1${esc(value)}$2`)
      return
    }
    // …or before it.
    const before = new RegExp(`(<meta[^>]*\\bcontent=["'])[^"']*(["'][^>]*\\b${attr}=["']${name}["'])`, 'i')
    if (before.test(out)) out = out.replace(before, `$1${esc(value)}$2`)
  }

  setMeta('name', 'description', description)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:url', canonical)
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  out = out.replace(
    /(<link[^>]*\brel=["']canonical["'][^>]*\bhref=["'])[^"']*(["'])/i,
    `$1${esc(canonical)}$2`
  )
  return out
}

async function metaOnlyFallback() {
  const shell = await readFile(resolve(DIST, 'index.html'), 'utf8')
  for (const route of ROUTES) {
    const canonical = route.path === '/' ? `${ORIGIN}/` : `${ORIGIN}${route.path}`
    const html = rewriteMeta(shell, { title: route.title, description: route.description, canonical })
    const outPath = resolve(DIST, route.out)
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf8')
    console.log(`  ~ meta-only  ${route.path.padEnd(14)} -> dist/${route.out}`)
  }
}

async function run() {
  const CHROME = await findChrome()
  if (!CHROME) {
    console.warn('\n⚠  No Chrome/Chromium found — falling back to meta-only prerender.\n')
    await metaOnlyFallback()
    return
  }

  const server = await preview({
    preview: { port: 4183, strictPort: true },
    logLevel: 'warn',
  })
  const base = server.resolvedUrls?.local?.[0]?.replace(/\/$/, '') || 'http://localhost:4183'

  // Launching can fail even when the binary exists — e.g. @sparticuz/chromium
  // is a Linux x64 build, so it unpacks fine on a Mac and then dies with
  // ENOEXEC. Never let that fail the build: shipping the site with weaker SEO
  // beats not shipping it at all.
  let browser
  try {
    browser = await puppeteer.launch({
      executablePath: CHROME.executablePath,
      headless: true,
      args: CHROME.args,
    })
  } catch (err) {
    console.warn(`\n⚠  Chrome failed to launch (${err.code || err.message}) — falling back to meta-only.\n`)
    await server.httpServer.close()
    await metaOnlyFallback()
    return
  }

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
