import { Outlet, ScrollRestoration } from "react-router";
import { Sprite } from "./components/cip/Sprite";
import { SiteHeader, SiteFooter } from "./components/cip/site";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans text-charcoal-900 antialiased flex flex-col">
      <Sprite />
      <SiteHeader />
      <main className="flex-1" id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  );
}
