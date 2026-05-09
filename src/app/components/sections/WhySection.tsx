import { ImageWithFallback } from "../figma/ImageWithFallback";
import whyImg from "../../../imports/118199356_1922057907925585_3419683214870722820_n.jpg";

export function WhySection() {
  const points = [
    {
      title: "Be light",
      description: "Politics is a mission field where Christ's love is needed.",
    },
    {
      title: "Love your neighbour",
      description: "Public life is a practical way to serve the common good.",
    },
    {
      title: "Faithful presence",
      description: "Showing up with integrity, humility, and hope.",
    },
  ];

  return (
    <section id="why" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-copper-600 mb-4">
              Why Christians should care
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight mb-6">
              To be salt and light in public life.
            </h2>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-10">
              Jesus calls his followers to be salt and light <span className="text-charcoal-500">(Matthew 5:13–16)</span>. Politics is one of the places that needs more salt and light.
            </p>

            <ul className="space-y-6">
              {points.map((p) => (
                <li key={p.title} className="flex gap-5">
                  <div className="flex-shrink-0 mt-1.5 h-2 w-8 rounded-full bg-copper-600" />
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal-900 mb-1">{p.title}</h3>
                    <p className="text-charcoal-600 leading-relaxed">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-copper-200/60 to-gold-200/40 rounded-3xl rotate-2" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5]">
              <ImageWithFallback
                src={whyImg}
                alt="Australian Christians serving their community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
