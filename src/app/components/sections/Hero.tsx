import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764136093763-3f571bb2cf7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Australian parliament house"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900/85 via-charcoal-900/70 to-charcoal-900/50" />
        {/* Warm light glow accent */}
        <div className="absolute -bottom-20 -right-20 w-[36rem] h-[36rem] rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-copper-500/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 mb-8">
            <span className="h-2 w-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-sm text-white/90">A non-partisan Christian network</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            We Need More Christians Engaged in Public Life
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
            To bring Christ's love to all Australians.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://members.christiansinpolitics.com/"
              className="rounded-full bg-copper-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-copper-700 shadow-2xl shadow-copper-900/40 text-center"
            >
              Join our network
            </a>
            <button
              onClick={() => {
                const element = document.getElementById("why");
                if (element) {
                  const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
