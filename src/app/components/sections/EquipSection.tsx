import { Church, GraduationCap, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import churchEventImg from "../../../imports/church_event.jpeg";

export function EquipSection() {

  const scrollToContact = (preset: "church" | "university") => {
    const element = document.getElementById("contact");
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => {
        const select = document.getElementById("contact-type-select") as HTMLSelectElement;
        if (select) {
          select.value = preset;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 500);
    }
  };

  return (
    <section id="equip" className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-charcoal-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Block 1: Events feature */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-copper-100 px-3 py-1 mb-5">
              <Users className="h-3.5 w-3.5 text-copper-600" />
              <span className="text-xs uppercase tracking-wider text-copper-700 font-semibold">Talks & Q&A</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4 leading-tight whitespace-nowrap">
              We'll come to your church or campus.
            </h3>
            <p className="text-charcoal-600 text-lg leading-relaxed">
              An engaging talk, an honest Q&A, and clear next steps — at no cost.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] shadow-xl mb-8">
            <ImageWithFallback
              src={churchEventImg}
              alt="CiP speaking at a church event"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToContact("church")}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-copper-600 bg-white px-6 py-3 text-sm font-semibold text-copper-600 hover:bg-copper-50 transition-colors"
            >
              <Church className="h-4 w-4" />
              Invite us to your church
            </button>
            <button
              onClick={() => scrollToContact("university")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-copper-600 px-6 py-3 text-sm font-semibold text-white hover:bg-copper-700 transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              Invite us to your uni
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
