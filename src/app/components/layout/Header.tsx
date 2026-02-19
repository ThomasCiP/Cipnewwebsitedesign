import { Link, NavLink } from "react-router";
import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import logo from "figma:asset/fb5b9a6591cbe94e0158b8221522cba11dc74df3.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Start Here", path: "/start-here" },
    { name: "Join a Party", path: "/join" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Partners", path: "/partners" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Christians in Politics" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium transition-colors hover:text-copper-600",
                  isActive ? "text-copper-600" : "text-charcoal-600"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/donate"
            className="flex items-center gap-2 rounded-full bg-copper-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-copper-700"
          >
            <Heart className="h-4 w-4 fill-current" />
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-charcoal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "block text-base font-medium",
                    isActive ? "text-copper-600" : "text-charcoal-600"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-copper-600 px-4 py-3 text-base font-semibold text-white hover:bg-copper-700"
            >
              <Heart className="h-4 w-4 fill-current" />
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
