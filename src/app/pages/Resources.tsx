import { useState } from "react";
import { Icon } from "../components/cip/Sprite";

type Kind = "submission" | "guide";

type Resource = {
  kind: Kind;
  href: string;
  label: string; // date or category shown top-right
  title: string;
  tags?: string[];
  summary: string;
  source: "fff" | "cip";
  sourceNote: string;
};

// Freedom for Faith submissions are shared with their permission: each one must
// credit them and link back to freedomforfaith.org.au. Only submissions from the
// last 12 months belong here.
const RESOURCES: Resource[] = [
  {
    kind: "submission",
    href: "https://freedomforfaith.org.au/articles/nsw-greenshr/",
    label: "10 Jul 2026",
    title: "NSW Greens’ Human Rights Bill",
    tags: ["NSW", "Human rights"],
    summary: "Freedom for Faith’s submission to the NSW parliamentary inquiry into the Greens’ Human Rights Bill. The full submission will be published by the Committee.",
    source: "fff",
    sourceNote: "Read on freedomforfaith.org.au",
  },
  {
    kind: "submission",
    href: "https://freedomforfaith.org.au/articles/fed-electmat/",
    label: "17 Nov 2025",
    title: "Federal inquiry into the 2025 election",
    tags: ["Federal", "Electoral matters"],
    summary: "A submission to the Joint Standing Committee on Electoral Matters’ inquiry into the 2025 federal election, on the political volunteering of members of a church.",
    source: "fff",
    sourceNote: "Read on freedomforfaith.org.au",
  },
  {
    kind: "guide",
    href: "https://peo.gov.au/",
    label: "The basics",
    title: "Understanding the Australian political system",
    summary: "How parliament, parties and elections work, with links to the Parliamentary Education Office’s free explainers.",
    source: "cip",
    sourceNote: "links to peo.gov.au",
  },
];

const FILTERS: { key: Kind | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "submission", label: "Submissions" },
  { key: "guide", label: "Guides" },
];

export default function Resources() {
  const [filter, setFilter] = useState<Kind | "all">("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const shown = RESOURCES.filter(
    (r) =>
      (filter === "all" || r.kind === filter) &&
      (!q || [r.title, r.summary, r.label, ...(r.tags ?? [])].join(" ").toLowerCase().includes(q)),
  );

  return (
    <div className="cip">
      <section className="page-hero">
        <div className="bg" style={{ backgroundImage: "url('/img/church.jpg')", backgroundPosition: "center 40%" }} />
        <div className="wrap">
          <h1>Resources</h1>
          <p className="sub">Submissions, guides and talks on faith, politics and public life, free to read and share.</p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 48 }}>
        <div className="wrap" style={{ display: "grid", gap: 24 }}>
          <div className="attrib">
            <span className="ff" aria-hidden="true">FfF</span>
            <p>
              <b>Featuring submissions by Freedom for Faith,</b> shared with their permission. Each summary is written by CiP and links back to the original on freedomforfaith.org.au.
            </p>
            <a className="btn btn-outline" href="https://freedomforfaith.org.au/" target="_blank" rel="noopener">
              Visit Freedom for Faith <Icon name="ext" />
            </a>
          </div>

          <div className="toolbar">
            <div className="chips" role="group" aria-label="Filter by type">
              {FILTERS.map((f) => (
                <button key={f.key} className="chip-btn" type="button" aria-pressed={filter === f.key} onClick={() => setFilter(f.key)}>
                  {f.label}
                </button>
              ))}
            </div>
            <div className="toolbar-end">
              <label className="search" htmlFor="filter-search">
                <Icon name="search" />
                <input id="filter-search" type="search" placeholder="Search resources" aria-label="Search resources" value={query} onChange={(e) => setQuery(e.target.value)} />
              </label>
              <span className="count" aria-live="polite">
                {shown.length} {shown.length === 1 ? "resource" : "resources"}
              </span>
            </div>
          </div>

          <h2 className="sr-only">All resources</h2>
          <div className="cards3">
            {shown.map((r) => (
              <a className={r.source === "cip" ? "card res guide" : "card res"} key={r.href} href={r.href} target="_blank" rel="noopener">
                <div className="top">
                  <span className="type">{r.kind === "submission" ? "Submission" : "Guide"}</span>
                  <span className="date">{r.label}</span>
                </div>
                <div className="body">
                  <h3>{r.title}</h3>
                  {r.tags && (
                    <div className="tags">
                      {r.tags.map((t) => <span className="tag-pill" key={t}>{t}</span>)}
                    </div>
                  )}
                  <p>{r.summary}</p>
                  <p className="source">
                    {r.source === "fff" ? (
                      <>
                        <span className="ff sm" aria-hidden="true">FfF</span>
                        <span>Submission by <b>Freedom for Faith</b> · {r.sourceNote} <Icon name="ext" /></span>
                      </>
                    ) : (
                      <>
                        <span className="ff sm cip" aria-hidden="true">CiP</span>
                        <span>By <b>Christians in Politics</b> · {r.sourceNote}</span>
                      </>
                    )}
                  </p>
                </div>
              </a>
            ))}
            {shown.length === 0 && (
              <p className="empty" style={{ gridColumn: "1 / -1" }}>No resources match that search. Try another word, or choose All.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
