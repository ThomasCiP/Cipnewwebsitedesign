import { Outlet, ScrollRestoration } from "react-router";
import { StickyHeader } from "./components/sections/StickyHeader";
import { Footer } from "./components/sections/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal-900 antialiased flex flex-col">
      <StickyHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}