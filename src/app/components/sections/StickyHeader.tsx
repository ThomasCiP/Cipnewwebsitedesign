import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import logo from "figma:asset/fb5b9a6591cbe94e0158b8221522cba11dc74df3.png";

export function StickyHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Why", id: "why" },
    { name: "Equip", id: "equip" },
    { name: "Network", id: "network" },
    { name: "Events", id: "events" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="Christians in Politics" className="h-12 w-auto" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium transition-colors hover:text-copper-600 text-charcoal-600"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://members.christiansinpolitics.com/"
            className="rounded-full bg-copper-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-700"
          >
            Join our network
          </a>
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
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block text-base font-medium text-left text-charcoal-600 hover:text-copper-600"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://members.christiansinpolitics.com/"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-copper-600 px-4 py-3 text-base font-semibold text-white hover:bg-copper-700"
            >
              Join our network
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
