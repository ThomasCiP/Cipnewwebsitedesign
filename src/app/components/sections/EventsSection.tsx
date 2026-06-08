import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function EventsSection() {
  const upcoming: any[] = [];

  return (
    <section id="events" className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-copper-600 mb-4">Upcoming</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Where you'll find us next.
            </h2>
          </div>
          <a
            href="https://members.christiansinpolitics.com/"
            className="inline-flex items-center gap-2 text-copper-600 font-semibold hover:gap-3 transition-all"
          >
            Get notified about new events <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Empty State */}
        <div className="bg-charcoal-50 border border-charcoal-100 rounded-3xl p-12 sm:p-16 text-center shadow-sm">
           <Calendar className="h-12 w-12 text-copper-400 mx-auto mb-6 opacity-80" />
           <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-4">Events are coming soon!</h3>
           <p className="text-lg text-charcoal-600 max-w-xl mx-auto leading-relaxed">
             We are currently planning our upcoming schedule of gatherings, workshops, and networking evenings. 
             Join our network to be the first to know when dates are announced and registrations open.
           </p>
        </div>
      </div>
    </section>
  );
}
