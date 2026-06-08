import { useState } from "react";
import { Mail, ShieldCheck } from "lucide-react";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call to subscribe mechanism
    console.log("Subscribing User:", { name, email });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSuccess(true);
    setIsSubmitting(false);
    setName("");
    setEmail("");
  };

  return (
    <div className="bg-charcoal-50 min-h-screen py-24 sm:py-32 flex items-center justify-center">
      <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-charcoal-200 overflow-hidden">
          <div className="bg-copper-700 px-6 py-8 sm:p-10 text-center">
            <Mail className="h-12 w-12 text-copper-100 mx-auto mb-4" />
            <h2 className="text-3xl font-bold tracking-tight text-white mb-2">Subscribe to Updates</h2>
            <p className="text-copper-100/90 text-sm">
              Get the latest news, resources, and event updates delivered straight to your inbox.
            </p>
          </div>

          <div className="px-6 py-8 sm:p-10">
            {isSuccess ? (
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-charcoal-900">You're on the list!</h3>
                <p className="mt-2 text-charcoal-600">
                  Thank you for subscribing. We'll keep you updated on everything happening with Christians in Politics.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-sm font-semibold text-copper-600 hover:text-copper-500 underline"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-charcoal-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-md border-0 py-2.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-charcoal-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-2.5 text-charcoal-900 shadow-sm ring-1 ring-inset ring-charcoal-300 placeholder:text-charcoal-400 focus:ring-2 focus:ring-inset focus:ring-copper-600 sm:text-sm sm:leading-6"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-copper-600 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-copper-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </button>

                <p className="mt-4 text-xs text-center text-charcoal-500">
                  We respect your privacy. You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}