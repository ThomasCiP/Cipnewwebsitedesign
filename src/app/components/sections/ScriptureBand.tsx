import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ScriptureBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Candles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <p className="text-copper-300 tracking-widest uppercase text-sm mb-6">Matthew 5:14–15</p>
        <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-white leading-snug font-light italic">
          "You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl."
        </blockquote>
      </div>
    </section>
  );
}
