import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold text-copper-600">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            We couldn't find that page
          </h1>
          <p className="mt-6 text-lg leading-8 text-charcoal-700">
            The link may be out of date, or the address may have a typo in it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="rounded-lg bg-copper-600 px-5 py-3 font-semibold text-white hover:bg-copper-700 transition-colors"
            >
              Back to home
            </Link>
            <Link
              to="/start-here"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-charcoal-900 ring-1 ring-charcoal-300 hover:bg-charcoal-50 transition-colors"
            >
              Start here
            </Link>
          </div>

          <div className="mt-12 border-t border-charcoal-200 pt-8">
            <p className="text-sm text-charcoal-600">
              Looking for something specific?{" "}
              <Link to="/about" className="text-copper-700 underline">
                About us
              </Link>
              ,{" "}
              <Link to="/events" className="text-copper-700 underline">
                events
              </Link>
              ,{" "}
              <Link to="/support" className="text-copper-700 underline">
                support
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="text-copper-700 underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
