import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NetworkSection() {
  const journey = [
    {
      step: "01",
      title: "Meet",
      description: "At an event near you — a talk, a breakfast, a campus night.",
    },
    {
      step: "02",
      title: "Connect",
      description: "Warm introductions to other Christians in your area or party.",
    },
    {
      step: "03",
      title: "Grow",
      description: "Resources, mentors, and pathways into faithful public life.",
    },
  ];

  return (
    <section id="network" className="py-24 sm:py-32 bg-charcoal-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-copper-600/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gold-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center mb-20">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-copper-600/30 rounded-3xl rotate-[-2deg] blur-sm" />
            <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1714974528761-4297fe19252c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="People connecting in conversation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Mock platform card overlay */}
            <div className="hidden md:block absolute -bottom-8 -right-6 lg:-right-12 bg-white text-charcoal-900 rounded-2xl shadow-2xl p-5 w-64 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-copper-400 to-gold-500" />
                <div>
                  <div className="text-sm font-semibold">Sarah · Sydney</div>
                  <div className="text-xs text-charcoal-500">Liberal · Local branch</div>
                </div>
              </div>
              <div className="text-xs text-charcoal-600 leading-relaxed border-t border-charcoal-100 pt-3">
                "Happy to connect with anyone exploring faith and politics."
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-copper-300 mb-4">The network</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              You don't have to do this alone.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg">
              A relational community of Christians across parties — built on encouragement, not online debate.
            </p>

            <ol className="space-y-6">
              {journey.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <div className="flex-shrink-0 text-3xl font-bold text-copper-400 leading-none w-12">
                    {s.step}
                  </div>
                  <div className="flex-1 border-l border-white/10 pl-5">
                    <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-white/70 leading-relaxed">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl text-white/90 italic font-light mb-8 leading-snug">
            "A community, not a comment section."
          </p>
          <a
            href="#join"
            id="join"
            className="inline-block rounded-full bg-copper-600 px-10 py-5 text-lg font-semibold text-white hover:bg-copper-700 transition-colors shadow-2xl shadow-copper-900/40"
          >
            Join our network
          </a>
          <p className="text-sm text-white/50 mt-5">
            Be first in when the platform launches.
          </p>
        </div>
      </div>
    </section>
  );
}
