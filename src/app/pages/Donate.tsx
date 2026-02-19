import { Heart, CreditCard, ShieldCheck } from "lucide-react";

export default function Donate() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heart className="mx-auto h-12 w-12 text-copper-600" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Support Christians in Politics</h2>
          <p className="mt-6 text-lg leading-8 text-charcoal-600">
            Your generous support enables us to equip Christians across Australia to be salt and light in the public square.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-charcoal-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-charcoal-900">What your donation supports</h3>
            <p className="mt-6 text-base leading-7 text-charcoal-600">
              CiP is a non-profit organisation. We rely on the generosity of supporters like you to:
            </p>
            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-charcoal-600 sm:grid-cols-2 sm:gap-6">
                {[
                    "Run events and training sessions",
                    "Create high-quality resources",
                    "Travel to support local branches",
                    "Maintain our digital platforms",
                    "Connect Christians across parties",
                    "Advocate for faithful engagement"
                ].map((item) => (
                    <li key={item} className="flex gap-x-3">
                        <ShieldCheck className="h-6 w-5 flex-none text-copper-600" aria-hidden="true" />
                        {item}
                    </li>
                ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-charcoal-50 py-10 text-center ring-1 ring-inset ring-charcoal-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-charcoal-600">Donate Securely</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-charcoal-900">$50</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-charcoal-600">/one-off</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-copper-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-copper-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600"
                >
                  Donate via Stripe
                </a>
                <p className="mt-6 text-xs leading-5 text-charcoal-600">
                  Invoices and receipts will be issued automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}