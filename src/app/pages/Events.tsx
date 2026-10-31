import { Icon } from "../components/cip/Sprite";
import { AppStoreBadge, PORTAL_URL } from "../components/cip/site";

// Upcoming events drop off the list once they have finished. When none are left,
// only the app callout shows.
const UPCOMING_EVENTS = [
  {
    title: "Christians in Politics Launch & Vic State Election Watching Party",
    day: "28",
    month: "Nov",
    weekday: "Sat",
    ends: "2026-11-28T20:00:00+11:00",
    thumb: "Launch",
    time: "5pm – 8pm AEDT",
    venue: "Neutral Bay Bowling Club, 3 Westleigh St, Neutral Bay NSW",
    summary:
      "A relaxed evening to unofficially launch Christians in Politics and watch the Victorian state election results come in together. Grazing platters and pizzas provided, bar open for drinks at your own cost, barefoot bowls on offer and kids welcome. Kingdom before party.",
    tickets: "https://events.humanitix.com/christians-in-politics-launch-and-vic-state-election-watching-party",
  },
];

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
  const upcoming = UPCOMING_EVENTS.filter((e) => new Date(e.ends).getTime() > Date.now());
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
          {upcoming.length > 0 && (
            <div className="event-list">
              {upcoming.map((e) => (
                <article className="event" key={e.title}>
                  <div className="when">
                    <b>{e.day}</b>
                    <span>{e.month}</span>
                    <small>{e.weekday}</small>
                  </div>
                  <div className="thumb" aria-hidden="true"><Icon name="cal" />{e.thumb}</div>
                  <div className="info">
                    <h3>{e.title}</h3>
                    <p className="meta">
                      <span><Icon name="clock" />{e.time}</span>
                      <span><Icon name="pin" />{e.venue}</span>
                    </p>
                    <p>{e.summary}</p>
                  </div>
                  <div className="act">
                    <a className="btn btn-primary" href={e.tickets} target="_blank" rel="noopener">
                      Get tickets<span className="sr-only"> for {e.title} (opens Humanitix)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
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
