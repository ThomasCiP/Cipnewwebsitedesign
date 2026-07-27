import { Link } from "react-router";
import { Mail, Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "figma:asset/fb5b9a6591cbe94e0158b8221522cba11dc74df3.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Non-partisan Commitment Banner */}
      <div className="border-b border-charcoal-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-xl font-bold mb-3">
              Our Non-Partisan Commitment
            </h3>
            <p className="text-charcoal-300 leading-relaxed mb-4">
              CiP does not endorse parties, candidates, or policies. We exist to encourage faithful Christian presence in public life across all political perspectives.
            </p>
            <p className="text-sm tracking-wider uppercase text-copper-400">
              Relational · Celebrating Disagreement · Faithful, Not Fearful
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* About Column */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Christians in Politics" className="h-12 w-auto mb-4" />
            <p className="text-charcoal-300 leading-relaxed mb-6">
              Encouraging Christians across the broad Christian community to engage relationally in politics—loving neighbours through faithful presence.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-300 transition-colors hover:bg-copper-600 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-300 transition-colors hover:bg-copper-600 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-800 text-charcoal-300 transition-colors hover:bg-copper-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("why")}
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  Why Christians should care
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equip")}
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  Equip
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("network")}
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  Network
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact us
                </button>
              </li>
              <li>
                <a
                  href="mailto:contact@christiansinpolitics.com"
                  className="text-charcoal-300 hover:text-copper-400 transition-colors"
                >
                  contact@christiansinpolitics.com
                </a>
              </li>
              <li className="pt-4">
                <a
                  href="#donate"
                  className="inline-flex items-center gap-2 rounded-full bg-copper-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-700"
                >
                  <Heart className="h-4 w-4 fill-current" />
                  Support our work
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-charcoal-400 text-center sm:text-left">
              © {new Date().getFullYear()} Christians in Politics Australia Ltd
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">ABN 93 697 747 630</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">A charity registered with the ACNC</span>
            </p>
            {/* These were href="#privacy" / "#terms" — anchors to sections that
                don't exist, so the links did nothing. They're real pages now. */}
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-charcoal-400 hover:text-copper-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-charcoal-400 hover:text-copper-400 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                to="/support"
                className="text-sm text-charcoal-400 hover:text-copper-400 transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
