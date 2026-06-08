import { Hero } from "../components/sections/Hero";
import { WhySection } from "../components/sections/WhySection";
import { ScriptureBand } from "../components/sections/ScriptureBand";
import { EquipSection } from "../components/sections/EquipSection";
import { EventsSection } from "../components/sections/EventsSection";
import { NetworkSection } from "../components/sections/NetworkSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <ScriptureBand />
      <EquipSection />
      <EventsSection />
      <NetworkSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
