import { Link } from "react-router";
import { CheckCircle2, Target, Heart, Scale, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-charcoal-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-charcoal-200">
              We are a movement of Christians from all denominations and political persuasions, united by a desire to serve God and our neighbours in the public square.
            </p>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-copper-600">Our Vision</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                To see many Christians joining political parties and being active in the political process.
              </h1>
              <p className="mt-6 text-xl leading-8 text-charcoal-700">
                We believe politics is a mission field where we can love our neighbour and seek the welfare of the city.
              </p>
            </div>
          </div>
          <div className="bg-charcoal-50 p-8 rounded-2xl ring-1 ring-charcoal-200">
            <blockquote className="text-xl italic font-serif text-charcoal-800 leading-relaxed">
              "You are the salt of the earth... You are the light of the world... Let your light shine before others, that they may see your good deeds and glorify your Father in heaven."
            </blockquote>
            <cite className="mt-4 block font-semibold text-copper-700 not-italic">— Matthew 5:13-16</cite>
          </div>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="border-t border-charcoal-200 pt-16">
                <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl mb-8">Our Mission</h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl border border-charcoal-200 shadow-sm">
                        <div className="h-10 w-10 bg-copper-100 rounded-lg flex items-center justify-center mb-4 text-copper-700">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-charcoal-900 text-lg mb-2">Communicate Value</h3>
                        <p className="text-charcoal-700">
                            To communicate to Christians the value and importance of participating in the political process through joining political parties.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-charcoal-200 shadow-sm">
                        <div className="h-10 w-10 bg-gold-100 rounded-lg flex items-center justify-center mb-4 text-gold-700">
                            <Target className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-charcoal-900 text-lg mb-2">Inform & Equip</h3>
                        <p className="text-charcoal-700">
                            To inform and equip Christians to join political parties, and to be both effective and faithful within the party.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-charcoal-200 shadow-sm">
                        <div className="h-10 w-10 bg-charcoal-100 rounded-lg flex items-center justify-center mb-4 text-charcoal-700">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-charcoal-900 text-lg mb-2">Network & Fellowship</h3>
                        <p className="text-charcoal-700">
                            To help Christians network and have fellowship with other Christians engaged with politics, both within their own party and across parties.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Strategic Goals */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="bg-charcoal-900 rounded-2xl py-12 px-6 sm:py-16 sm:px-12 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Strategic Goals</h2>
                    <p className="mt-4 text-lg text-charcoal-300">
                        Our primary metrics for success are focused on tangible engagement in the political sphere.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
                    <ul role="list" className="space-y-4">
                        <li className="flex gap-x-3 text-charcoal-100">
                            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-copper-400" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-white">Participation:</strong> The number of Christians who are members of political parties.
                            </span>
                        </li>
                        <li className="flex gap-x-3 text-charcoal-100">
                            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-copper-400" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-white">Leadership:</strong> The number of Christians in elected and official roles in parties.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="border-t border-charcoal-200 pt-16">
                <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl mb-8">Our Values</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-copper-50 p-6 rounded-xl">
                        <h3 className="font-bold text-copper-900 text-lg mb-2">Christian First</h3>
                        <p className="text-charcoal-700">Christian first, politics second.</p>
                    </div>
                    <div className="bg-gold-50 p-6 rounded-xl">
                        <h3 className="font-bold text-gold-900 text-lg mb-2">Non-Partisan</h3>
                        <p className="text-charcoal-700">Does not promote any policies, political parties or candidates.</p>
                    </div>
                    <div className="bg-charcoal-50 p-6 rounded-xl">
                        <h3 className="font-bold text-charcoal-900 text-lg mb-2">Pro-Engagement</h3>
                        <p className="text-charcoal-700">Encourages political participation as a good for the Kingdom and the country.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-charcoal-900 mb-6">Ready to get involved?</h2>
            <Link to="/start-here" className="rounded-full bg-copper-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-copper-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper-600">
                Start Here
            </Link>
        </div>
      </div>
    </div>
  );
}