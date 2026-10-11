import { Icon } from "../components/cip/Sprite";
import { AppStoreBadge, PORTAL_URL } from "../components/cip/site";

const RECENT_EVENTS = [
  {
    title: "Faith in Action: Christians engaging in politics",
    image: "/img/faith-in-action.jpg",
    imageLabel: "Faith in Action event poster",
    icon: "pin",
    meta: "Menai Anglican Church, NSW · Thursday 8 October 2026",
  },
  {
    title: "God, Government and the Gospel",
    image: "/img/talk-small.jpg",
    imageLabel: "A speaker addressing a full church hall",
    icon: "users",
    meta: "With Freedom for Faith",
  },
];

export default function Events() {
  return (
    <div className="cip">
      <section className="page-hero">
        <div className="bg" style={{ backgroundImage: "url('/img/talk-wide.jpg')", backgroundPosition: "center 35%" }} />
        <div className="wrap">
          <h1>Events</h1>
          <p className="sub">Talks, breakfasts and campus nights where Christians in public life meet, learn and encourage one another.</p>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 48 }}>
        <div className="wrap" style={{ display: "grid", gap: 24 }}>
          <div className="sec-head">
            <h2>Upcoming events</h2>
          </div>
          <div className="callout">
            <img src="/img/app-icon.png" alt="" width={56} height={56} />
            <div>
              <b>Upcoming CiP events are listed in the CiP Network app.</b>
              <span>
                Register in a tap, add events to your calendar and see who else is going. On Android or a computer,{" "}
                <a href={PORTAL_URL} target="_blank" rel="noopener" style={{ color: "#fff" }}>use the web app</a>.
              </span>
            </div>
            <AppStoreBadge onDark />
          </div>
        </div>
      </section>

      <section className="band" style={{ background: "var(--paper-warm)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap" style={{ display: "grid", gap: 32 }}>
          <div className="sec-head">
            <p className="eyebrow">Recent events</p>
            <h2>Where we’ve been.</h2>
          </div>
          <div className="cards2">
            {RECENT_EVENTS.map((e) => (
              <article className="card" key={e.title}>
                <div className="media" style={{ backgroundImage: `url('${e.image}')` }} role="img" aria-label={e.imageLabel} />
                <div className="body">
                  <h3>{e.title}</h3>
                  <p className="meta"><Icon name={e.icon} />{e.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band host">
        <div className="wrap">
          <div className="host-grid">
            <div
              className="img"
              role="img"
              aria-label="A man standing in the aisle of a large church"
              style={{ backgroundImage: "url('/img/church.jpg')", backgroundPosition: "center 40%" }}
            />
            <div className="host-copy">
              <p className="eyebrow">Host an event</p>
              <h2>Want an event at your church or campus?</h2>
              <p>We’ll bring a speaker, an honest Q&amp;A and clear next steps, at no cost to you.</p>
              <div className="host-actions">
                <a className="btn btn-primary" href="/#invite-church"><Icon name="church" />Invite CiP to your church</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
