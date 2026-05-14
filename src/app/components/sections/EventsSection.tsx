import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function EventsSection() {
  const featured = {
    title: "Faith in Politics: A Sydney Evening",
    date: "Mon 15 June 2026",
    time: "7:00 PM",
    location: "St Andrew's Church, Sydney",
    type: "Church evening",
    description:
      "An evening of teaching, honest Q&A, and prayer for Christians considering political engagement.",
  };

  const upcoming = [
    {
      day: "22",
      month: "Jun",
      title: "Students in Politics Workshop",
      location: "UNSW, Kensington",
      type: "University",
    },
    {
      day: "05",
      month: "Jul",
      title: "CiP Networking Breakfast",
      location: "Melbourne CBD",
      type: "Networking",
    },
    {
      day: "12",
      month: "Jul",
      title: "Online Q&A: Faithful Presence",
      location: "Online · Zoom",
      type: "Online",
    },
    {
      day: "20",
      month: "Jul",
      title: "Church Leaders Lunch",
      location: "Brisbane",
      type: "Church",
    },
    {
      day: "03",
      month: "Aug",
      title: "University Politics Panel",
      location: "University of Queensland",
      type: "University",
    },
  ];

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

        {/* Featured Event */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-xl">
          <div className="grid md:grid-cols-5 min-h-[360px]">
            <div className="md:col-span-3 relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1702468025332-e23ca9075058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Featured event"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-charcoal-900/70 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-900">
                  ★ Featured
                </span>
              </div>
            </div>
            <div className="md:col-span-2 bg-charcoal-900 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <p className="text-copper-300 text-sm font-semibold mb-3">{featured.type}</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">{featured.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{featured.description}</p>
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold-400" />
                    {featured.date} · {featured.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold-400" />
                    {featured.location}
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-full bg-copper-600 px-6 py-3 font-semibold text-white hover:bg-copper-700 transition-colors">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Vertical timeline list */}
        <ul className="border-l-2 border-copper-200 ml-4 sm:ml-8 space-y-2">
          {upcoming.map((e, i) => (
            <li
              key={i}
              className="relative pl-8 sm:pl-12 py-5 group cursor-pointer"
            >
              <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full bg-white border-2 border-copper-500 group-hover:bg-copper-500 transition-colors" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:bg-charcoal-50/50 -mx-4 px-4 py-2 rounded-xl transition-colors">
                <div className="flex-shrink-0 w-16 text-center">
                  <div className="text-3xl font-bold text-charcoal-900 leading-none">{e.day}</div>
                  <div className="text-xs uppercase tracking-wider text-copper-600 font-semibold mt-1">{e.month}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                      {e.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-charcoal-900 mb-1">{e.title}</h4>
                  <p className="text-sm text-charcoal-600 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </p>
                </div>
                <button className="flex-shrink-0 inline-flex items-center gap-1 rounded-full border border-charcoal-300 px-5 py-2 text-sm font-semibold text-charcoal-700 group-hover:border-copper-500 group-hover:text-copper-600 transition-colors">
                  Register
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
