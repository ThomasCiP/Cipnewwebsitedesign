import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router";
import { Icon } from "../components/cip/Sprite";
import { AndroidNote, AppStoreBadge, CONTACT_EMAIL, FfFMark, PORTAL_URL } from "../components/cip/site";

type HostKind = "church" | "uni" | "other";

const HOST_KIND_LABEL: Record<HostKind, string> = {
  church: "A church",
  uni: "A university or campus group",
  other: "Somewhere else",
};

const SCREENSHOTS = [
  { src: "/img/app-values.jpg", alt: "Home feed with a Faith in Action event post, under the values Relational, Celebrating Disagreement, Faithful Not Fearful" },
  { src: "/img/app-groups.jpg", alt: "Groups for your party, electorate or tradition" },
  { src: "/img/app-organisations.jpg", alt: "Follow the ministries shaping public life" },
  { src: "/img/app-host.jpg", alt: "Host gatherings in minutes, with the create event form" },
];

export default function Home() {
  return (
    <div className="cip">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-img" role="img" aria-label="A full church hall listening to a talk titled God, Government and the Gospel" />
        <div className="wrap">
          <div className="hero-panel">
            <h1 id="hero-title">
              Inviting Christians into the <em>public square.</em>
            </h1>
            <p>Bringing Christians together to encourage one another, so that Christ is known in every corner of public life.</p>
            <div className="store-row">
              <AppStoreBadge />
              <Link className="btn btn-outline" to="/events">See upcoming events</Link>
            </div>
          </div>
        </div>
        <span className="photo-credit">God, Government and the Gospel, with Freedom for Faith</span>
      </section>

      <div className="quick">
        <div className="wrap">
          <nav className="quick-grid" aria-label="Ways to get involved">
            <Link to="/events">
              <span className="ico" aria-hidden="true"><Icon name="cal" /></span>
              <h2>Come to an event</h2>
              <p>Talks, breakfasts and campus nights where you’ll meet others like you.</p>
              <span className="go">See events <span aria-hidden="true">→</span></span>
            </Link>
            <a href="#host">
              <span className="ico" aria-hidden="true"><Icon name="church" /></span>
              <h2>Invite CiP to your church</h2>
              <p>A talk, an honest Q&amp;A and clear next steps, at no cost.</p>
              <span className="go">Invite CiP <span aria-hidden="true">→</span></span>
            </a>
            <Link to="/resources">
              <span className="ico" aria-hidden="true"><Icon name="book" /></span>
              <h2>Free resources</h2>
              <p>Submissions, guides and talks on faith in public life.</p>
              <span className="go">Browse resources <span aria-hidden="true">→</span></span>
            </Link>
          </nav>
        </div>
      </div>

      <section className="band" id="about">
        <div className="wrap why-grid">
          <div>
            <div className="sec-head">
              <h2>Growing Christ’s Presence</h2>
              <p>It can only be done through building relationships, which is why we run events and have a social networking app. Faithful presence in public life is hard to sustain alone, and much easier with friends beside you.</p>
            </div>
            <div className="pillars">
              <div className="pillar"><span className="n" aria-hidden="true"><Icon name="users" /></span><div><h3>Into the public square</h3><p>Encouraging Christians to step into politics, policy and public service, in every party.</p></div></div>
              <div className="pillar"><span className="n" aria-hidden="true"><Icon name="hand" /></span><div><h3>Into each other’s lives</h3><p>Connecting people for mutual encouragement, prayer and friendship across party lines.</p></div></div>
              <div className="pillar"><span className="n" aria-hidden="true"><Icon name="light" /></span><div><h3>So Christ’s presence is known</h3><p>Salt and light among everyone who works in public life <span className="nowrap">(Matthew 5:13–16).</span></p></div></div>
            </div>
          </div>
          <div className="why-img">
            <img src="/img/church.jpg" alt="A man standing alone in the aisle of a large church" width={1200} height={801} />
            <span className="tag">You don’t have to do this alone.</span>
          </div>
        </div>
      </section>

      <section className="band app-band" id="app" aria-labelledby="app-title">
        <div className="wrap">
          <div className="app-top">
            <div className="app-title">
              <img className="app-icon" src="/img/app-icon.png" alt="" width={56} height={56} />
              <p className="eyebrow">The CiP Network app</p>
            </div>
            <h2 id="app-title">A community, not a comment section.</h2>
            <p className="lead">CiP Network is the private member network of Christians in Politics. Find members by state, electorate, profession and tradition, join groups for your context, register for events and ask the CiP team for prayer or mentoring.</p>
            <div className="app-meta">
              <span><Icon name="star" />Free</span>
              <span><Icon name="lock" />You control what your profile shares</span>
              <span><Icon name="chat" />No advertising, no algorithmic outrage</span>
              <span><Icon name="users" />Open to Christians who affirm the Nicene Creed</span>
            </div>
            <div className="store-row">
              <AppStoreBadge onDark />
              <a className="btn btn-ghost-light" href={PORTAL_URL} target="_blank" rel="noopener">Log in on the web</a>
              <AndroidNote className="android-note" />
            </div>
          </div>
          <ul className="shots" aria-label="App screenshots" tabIndex={0}>
            {SCREENSHOTS.map((s) => (
              <li key={s.src}><img src={s.src} alt={s.alt} width={600} height={1298} /></li>
            ))}
          </ul>
          <p className="shots-note">Screenshots from the CiP Network app on the App Store.<span className="swipe-hint"> Swipe to see all four.</span></p>
        </div>
      </section>

      <HostSection />

      <section className="band commit" id="partners">
        <div className="wrap commit-grid">
          <div>
            <p className="eyebrow">Our non-partisan commitment</p>
            <h2>Christian first, politics second.</h2>
            <p>CiP doesn’t endorse parties, candidates or policies. We welcome Christians from across the political spectrum, and we celebrate the disagreements that come with it.</p>
            <div className="values"><span>Relational</span><span>Celebrating Disagreement</span><span>Faithful, Not Fearful</span></div>
          </div>
          <div className="partner-box">
            <h3>Partner organisations</h3>
            <a className="partner" href="https://freedomforfaith.org.au/" target="_blank" rel="noopener">
              <FfFMark />
              <span className="ptext"><b>Freedom for Faith</b><span>A Christian legal think tank protecting religious freedom in Australia</span></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// "Invite CiP" request form. There is no form backend on this site, so sending
// opens the visitor's email app with the request addressed to CiP and filled in.
function HostSection() {
  const [kind, setKind] = useState<HostKind | null>(null);
  const [sentName, setSentName] = useState<string | null>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const done = useRef<HTMLDivElement>(null);

  const open = (k: HostKind) => {
    setKind(k);
    setSentName(null);
  };

  // Links elsewhere on the site (e.g. the Events page) deep-link to #invite-church.
  useEffect(() => {
    const m = window.location.hash.match(/^#invite-(church|uni)$/);
    if (m) {
      document.getElementById("host")?.scrollIntoView();
      open(m[1] as HostKind);
    }
  }, []);

  useEffect(() => {
    if (kind && sentName === null) nameInput.current?.focus();
  }, [kind, sentName]);

  useEffect(() => {
    if (sentName !== null) done.current?.focus();
  }, [sentName]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const f = new FormData(form);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const type = get("type") as HostKind;
    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Where: ${HOST_KIND_LABEL[type]}`,
      `Church or group: ${get("org")}`,
      `Suburb and state: ${get("place")}`,
      `Preferred month: ${get("when") || "Not specified"}`,
      "",
      get("msg"),
    ].join("\n");
    const subject = `Event request: ${get("org")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSentName(get("name").split(" ")[0]);
  };

  const showForm = kind !== null && sentName === null;

  return (
    <section className="band host" id="host" aria-labelledby="host-title">
      <div className="wrap">
        <div className="host-grid">
          <div className="img" role="img" aria-label="A speaker addressing a full church hall" />
          <div className="host-copy">
            <p className="eyebrow">Host an event</p>
            <h2 id="host-title">We’ll come to your church or campus.</h2>
            <p>An engaging talk on why public life matters to Christians, an honest Q&amp;A and clear next steps for anyone who wants to get involved. There’s no cost.</p>
            <ol className="steps">
              <li>Tell us about your church or group</li>
              <li>We agree a date and a topic together</li>
              <li>We bring the speaker, you bring the people</li>
            </ol>
            <div className="host-actions" hidden={sentName !== null}>
              <button className="btn btn-primary" type="button" onClick={() => open("church")}>
                <Icon name="church" />
                Invite CiP to your church
              </button>
              <button className="btn btn-outline" type="button" onClick={() => open("uni")}>
                Invite CiP to your uni
              </button>
            </div>
            {showForm && (
              <form className="form" id="host-form" noValidate onSubmit={submit}>
                <div className="row">
                  <div className="field"><label htmlFor="hf-name">Your name</label><input ref={nameInput} id="hf-name" name="name" autoComplete="name" required /></div>
                  <div className="field"><label htmlFor="hf-email">Email</label><input id="hf-email" name="email" type="email" autoComplete="email" required /></div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="hf-type">Where</label>
                    <select id="hf-type" name="type" value={kind} onChange={(e) => setKind(e.target.value as HostKind)}>
                      {(Object.keys(HOST_KIND_LABEL) as HostKind[]).map((k) => (
                        <option key={k} value={k}>{HOST_KIND_LABEL[k]}</option>
                      ))}
                    </select>
                  </div>
                  <div className="field"><label htmlFor="hf-org">Church or group name</label><input id="hf-org" name="org" required /></div>
                </div>
                <div className="row">
                  <div className="field"><label htmlFor="hf-place">Suburb and state</label><input id="hf-place" name="place" placeholder="e.g. Menai, NSW" required /></div>
                  <div className="field"><label htmlFor="hf-when">Preferred month</label><input id="hf-when" name="when" placeholder="e.g. March 2027" /></div>
                </div>
                <div className="field"><label htmlFor="hf-msg">Anything else we should know? (optional)</label><textarea id="hf-msg" name="msg" /></div>
                <div className="store-row">
                  <button className="btn btn-primary" type="submit">Send request</button>
                  <span className="note">This opens your email app with your request ready to send.</span>
                </div>
              </form>
            )}
            {sentName !== null && (
              <div className="form-done" id="host-done" tabIndex={-1} role="status" ref={done}>
                <b>{sentName ? `Thanks, ${sentName}.` : "Thanks."}</b> Your email app should now have your request ready to send to us. If it didn’t open, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we’ll reply within two business days.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
