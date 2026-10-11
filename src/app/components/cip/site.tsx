import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Icon } from "./Sprite";

export const APP_STORE_URL = "https://apps.apple.com/au/app/cip-network/id6794986936";
// The member network's web app. Android users go here until the Play Store app is live.
export const PORTAL_URL = "https://network.christiansinpolitics.com/";
export const CONTACT_EMAIL = "contact@christiansinpolitics.com";

// Christians in Politics Australia Ltd's entry on the ACNC Charity Register.
export const ACNC_REGISTER_URL = "https://www.acnc.gov.au/charity/charities?search=93697747630";

// Freedom for Faith's site icon, loaded from their website. If it ever fails to
// load, the "FfF" text badge is shown instead.
const FFF_ICON_URL = "https://freedomforfaith.org.au/wp-content/uploads/2020/11/cropped-favicon-270x270.png";

export function FfFMark({ small = false }: { small?: boolean }) {
  const [failed, setFailed] = useState(false);
  const cls = small ? "ff sm" : "ff";
  if (failed) {
    return <span className={cls} aria-hidden="true">FfF</span>;
  }
  return <img className={cls} src={FFF_ICON_URL} alt="" aria-hidden="true" onError={() => setFailed(true)} />;
}

export const TAGLINE =
  "Inviting Christians into the public square and connecting them to one another for mutual encouragement, and for Christ’s presence to be known by all those in the public square.";

export function AppStoreBadge({ onDark = false }: { onDark?: boolean }) {
  return (
    <a className={onDark ? "store on-dark" : "store"} href={APP_STORE_URL} target="_blank" rel="noopener">
      <Icon name="apple" />
      <span>
        <small>Download on the</small>App Store
      </span>
    </a>
  );
}

export function AndroidNote({ className }: { className?: string }) {
  return (
    <p className={className}>
      On Android?{" "}
      <a href={PORTAL_URL} target="_blank" rel="noopener">
        Use the CiP Network web app.
      </a>
    </p>
  );
}

function NavItems() {
  return (
    <>
      <NavLink to="/events">Events</NavLink>
      <a href="/#host">Host an event</a>
      <NavLink to="/resources">Resources</NavLink>
      <a href="/#about">About</a>
    </>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  const location = useLocation();

  // Close the mobile menu whenever the page or section changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const hadFocus = menu.current?.contains(document.activeElement);
      setOpen(false);
      if (hadFocus) button.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="cip site-head">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header site-head-inner">
        <div className="wrap">
          <Link className="logo" to="/" aria-label="Christians in Politics home">
            <img src="/img/logo.png" alt="Christians in Politics" width={118} height={52} />
          </Link>
          <nav className="nav" aria-label="Main">
            <NavItems />
          </nav>
          <div className="head-actions">
            <a className="btn btn-outline" href={PORTAL_URL} target="_blank" rel="noopener">
              <Icon name="user" />
              Log in
            </a>
            <a className="btn btn-primary" href="/#app">
              Get the app
            </a>
          </div>
          <button
            ref={button}
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name="menu" width={26} height={26} />
          </button>
        </div>
        <nav
          ref={menu}
          className={open ? "mobile-nav open" : "mobile-nav"}
          id="mobile-nav"
          aria-label="Mobile"
          onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        >
          <NavItems />
          <a href="/#app">Get the app</a>
        </nav>
      </header>
    </div>
  );
}

export function SiteFooter() {
  return (
    <div className="cip">
      <footer>
        <div className="wrap foot-top">
          <div className="foot-about">
            <img className="flogo" src="/img/logo.png" alt="Christians in Politics" width={118} height={52} />
            <p>{TAGLINE}</p>
          </div>
          <div>
            <h2>Get involved</h2>
            <ul>
              <li><a href="/#app">The app</a></li>
              <li><Link to="/events">Events</Link></li>
              <li><a href="/#host">Host an event</a></li>
              <li><Link to="/resources">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h2>About CiP</h2>
            <ul>
              <li><a href="/#about">Who we are</a></li>
              <li><a href="/#partners">Partner organisations</a></li>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a></li>
              <li><a href={PORTAL_URL} target="_blank" rel="noopener">Log in</a></li>
            </ul>
          </div>
          <div className="foot-app">
            <h2>Get the app</h2>
            <AppStoreBadge onDark />
            <AndroidNote />
            <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <div className="charity">
            <a className="tick" href={ACNC_REGISTER_URL} target="_blank" rel="noopener">
              <img
                src="/img/acnc-registered-charity-tick.png"
                alt="Registered Charity: view Christians in Politics Australia on the ACNC Charity Register"
                width={88}
                height={88}
              />
            </a>
            <p>
              <b>Christians in Politics Australia Ltd · ABN 93 697 747 630</b>
              <span>
                A registered charity with the Australian Charities and Not-for-profits Commission.{" "}
                <a href={ACNC_REGISTER_URL} target="_blank" rel="noopener">View us on the ACNC Charity Register</a>
              </span>
              <span>© {new Date().getFullYear()} Christians in Politics Australia Ltd</span>
            </p>
          </div>
          <nav aria-label="Legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/support">Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
