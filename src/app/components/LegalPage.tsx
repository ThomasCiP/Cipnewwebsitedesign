import type { ReactNode } from "react";

/** Shared shell for the long-form legal pages (/privacy, /terms). */
export function LegalPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-charcoal-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-charcoal-200">{intro}</p>
            <p className="mt-4 text-sm text-charcoal-400">Last updated {updated}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">{children}</div>
      </div>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-12 first:mt-0 text-2xl font-bold tracking-tight text-charcoal-900 scroll-mt-24">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-charcoal-700 leading-relaxed">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="mt-4 space-y-3 text-charcoal-700 leading-relaxed">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-x-3">
      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500" />
      <span>{children}</span>
    </li>
  );
}
