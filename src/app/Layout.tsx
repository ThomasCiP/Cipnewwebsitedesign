import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-charcoal-50 font-sans text-charcoal-900 antialiased flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}