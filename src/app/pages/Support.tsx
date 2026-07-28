import { Link } from "react-router";
import {
  Mail,
  LogIn,
  KeyRound,
  MailWarning,
  UserX,
  Flag,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const SUPPORT_EMAIL = "contact@christiansinpolitics.com";
const PORTAL = "https://network.christiansinpolitics.com";

type Topic = {
  icon: typeof LogIn;
  title: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    icon: MailWarning,
    title: "My confirmation or reset email hasn't arrived",
    body: (
      <>
        <p>
          It has almost certainly been delivered — check your <strong>spam</strong> or{" "}
          <strong>junk</strong> folder, and on Gmail the <strong>Promotions</strong> tab. Emails from
          us arrive from a <code className="text-copper-700">christiansinpolitics.com</code> address.
        </p>
        <p className="mt-3">
          Marking the message as "Not spam" will help future emails reach your inbox. If it still
          hasn't appeared after ten minutes, request it again from the sign-in screen — and if that
          fails, email us and we'll confirm your account manually.
        </p>
      </>
    ),
  },
  {
    icon: LogIn,
    title: "I can't sign in",
    body: (
      <>
        <p>
          Check that you're using the same email address you signed up with. Accounts are per-email,
          so signing up again with a different address creates a separate account rather than
          recovering the original.
        </p>
        <p className="mt-3">
          If you signed up but never confirmed your address, request a new confirmation email from
          the sign-in screen.
        </p>
      </>
    ),
  },
  {
    icon: KeyRound,
    title: "I've forgotten my password",
    body: (
      <p>
        Choose <strong>Forgot password</strong> on the sign-in screen and we'll email you a reset
        link. The link is single-use and expires, so request a fresh one if it has been sitting in
        your inbox for a while.
      </p>
    ),
  },
  {
    icon: Smartphone,
    title: "Using the mobile app",
    body: (
      <>
        <p>
          The CiP Network app for iPhone and Android is the same network you use in your browser —
          your account, connections and groups carry across. Sign in with the credentials you
          already use.
        </p>
        <p className="mt-3">
          If something looks wrong after an update, closing and reopening the app is usually enough.
          Tell us the device and iOS or Android version if it persists.
        </p>
      </>
    ),
  },
  {
    icon: UserX,
    title: "Deleting your account",
    body: (
      <>
        <p>
          You can delete your account at any time from <strong>Settings</strong> inside the app or
          the web portal. Deleting removes your profile, posts, comments, messages and group
          memberships.
        </p>
        <p className="mt-3">
          This cannot be undone. If you'd rather we did it for you, email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-copper-700 underline">
            {SUPPORT_EMAIL}
          </a>{" "}
          from the address on the account and we'll action it.
        </p>
      </>
    ),
  },
  {
    icon: Flag,
    title: "Reporting a member, post or comment",
    body: (
      <>
        <p>
          CiP brings together Christians from every party and tradition, and we expect members to
          disagree well. If you see something abusive, harassing or otherwise out of step with that,
          report it from the <strong>…</strong> menu on the post or profile.
        </p>
        <p className="mt-3">
          For anything urgent or serious, email us directly rather than waiting on the queue.
        </p>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Your privacy",
    body: (
      <p>
        You choose what other members can see — your party affiliation, denomination, electorate and
        contact details are each yours to share or withhold. Manage them under{" "}
        <strong>Privacy settings</strong> at any time.
      </p>
    ),
  },
];

export default function Support() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-charcoal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support</h1>
            <p className="mt-6 text-lg leading-8 text-charcoal-200">
              Help with the CiP Network — the member app and web portal. If you can't find your
              answer here, email us and a real person will reply.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-copper-600 px-5 py-3 font-semibold text-white hover:bg-copper-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            Common questions
          </h2>

          <dl className="mt-12 space-y-10">
            {topics.map((topic) => (
              <div key={topic.title} className="flex gap-x-5">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-copper-100 flex items-center justify-center text-copper-700">
                  <topic.icon className="h-6 w-6" />
                </div>
                <div>
                  <dt className="text-lg font-bold text-charcoal-900">{topic.title}</dt>
                  <dd className="mt-2 text-charcoal-700 leading-relaxed">{topic.body}</dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Contact fallback */}
          <div className="mt-16 rounded-2xl bg-charcoal-50 p-8 ring-1 ring-charcoal-200">
            <h3 className="text-xl font-bold text-charcoal-900">Still stuck?</h3>
            <p className="mt-3 text-charcoal-700 leading-relaxed">
              Email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-copper-700 underline font-semibold">
                {SUPPORT_EMAIL}
              </a>{" "}
              and tell us what you were trying to do and what happened instead. If it's about the
              mobile app, include your device and iOS or Android version — it saves a round trip.
            </p>
            <p className="mt-4 text-charcoal-700 leading-relaxed">
              We aim to reply within two business days. For anything that isn't about the network
              itself — speaking invitations, partnerships or general enquiries — use our{" "}
              <Link to="/contact" className="text-copper-700 underline font-semibold">
                contact form
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={PORTAL}
                className="inline-flex items-center gap-2 rounded-lg bg-charcoal-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-charcoal-800 transition-colors"
              >
                Open the member portal
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-charcoal-900 ring-1 ring-charcoal-300 hover:bg-charcoal-50 transition-colors"
              >
                General enquiries
              </Link>
            </div>
          </div>

          <p className="mt-10 text-sm text-charcoal-500">
            Christians in Politics Australia Ltd (ABN 93 697 747 630) is a charity registered with
            the ACNC. The CiP Network is free to members.
          </p>
        </div>
      </div>
    </div>
  );
}
