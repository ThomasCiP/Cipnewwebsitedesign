import { StickyHeader } from "./components/sections/StickyHeader";
import { Hero } from "./components/sections/Hero";
import { WhySection } from "./components/sections/WhySection";
import { ScriptureBand } from "./components/sections/ScriptureBand";
import { EquipSection } from "./components/sections/EquipSection";
import { EventsSection } from "./components/sections/EventsSection";
import { NetworkSection } from "./components/sections/NetworkSection";
import { FAQSection } from "./components/sections/FAQSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <StickyHeader />
      <main>
        <Hero />
        <WhySection />
        <ScriptureBand />
        <EquipSection />
        <EventsSection />
        <NetworkSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
