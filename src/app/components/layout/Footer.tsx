import { Link } from "react-router";
import { Youtube, Facebook, Mail } from "lucide-react";
import logo from "../../../assets/fb5b9a6591cbe94e0158b8221522cba11dc74df3.png";

// Custom generic social icons or use Lucide
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-charcoal-200 bg-charcoal-50 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Christians in Politics" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-charcoal-600 mb-6 max-w-xs">
              Encouraging Christians to engage in politics as a mission field. Be salt and light in public life.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-charcoal-400 hover:text-copper-600">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-copper-600">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-copper-600">
                <span className="sr-only">TikTok</span>
                <TiktokIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/start-here" className="text-sm text-charcoal-600 hover:text-copper-600">Start Here</Link></li>
              <li><Link to="/join" className="text-sm text-charcoal-600 hover:text-copper-600">Join a Party</Link></li>
              <li><Link to="/events" className="text-sm text-charcoal-600 hover:text-copper-600">Events</Link></li>
              <li><Link to="/resources" className="text-sm text-charcoal-600 hover:text-copper-600">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-charcoal-600 hover:text-copper-600">About Us</Link></li>
              <li><Link to="/partners" className="text-sm text-charcoal-600 hover:text-copper-600">Partners</Link></li>
              <li><Link to="/contact" className="text-sm text-charcoal-600 hover:text-copper-600">Contact</Link></li>
              <li><Link to="/donate" className="text-sm text-charcoal-600 hover:text-copper-600">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Disclaimer</h3>
            <p className="text-xs text-charcoal-500 leading-relaxed">
              Christians in Politics (CiP) is non-partisan and does not endorse any specific political party, candidate, or policy. We exist to encourage Christian engagement in the political process across the spectrum.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Christians in Politics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-charcoal-500 hover:text-copper-600">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-charcoal-500 hover:text-copper-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
