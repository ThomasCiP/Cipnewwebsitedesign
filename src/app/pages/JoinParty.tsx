import { ExternalLink, AlertTriangle } from "lucide-react";

type YouthWing = {
  name: string;
  link: string;
  age: string;
};

type Party = {
  name: string;
  description: string;
  link: string;
  color: string;
  youthWing?: YouthWing;
};

const parties: Party[] = [
  {
    name: "Labor",
    description: "Redistributing political and economic power so people can participate meaningfully in shaping institutions that affect their lives",
    link: "https://www.alp.org.au/join",
    color: "border-red-500",
    youthWing: {
      name: "Australian Young Labor",
      link: "https://www.alp.org.au/get-involved/young-labor",
      age: "14-26"
    }
  },
  {
    name: "Liberal",
    description: "Belief in individual freedom and free enterprise.",
    link: "https://www.liberal.org.au/join",
    color: "border-blue-500",
    youthWing: {
      name: "Young Liberals",
      link: "https://www.youngliberal.org.au/",
      age: "16-30"
    }
  },
  {
    name: "Nationals",
    description: "Representing regional Australia.",
    link: "https://nationals.org.au/join/",
    color: "border-green-700",
    youthWing: {
      name: "Young Nationals",
      link: "https://nationals.org.au/young-nationals/",
      age: "Under 35"
    }
  },
  {
    name: "Greens",
    description: "Focus on ecological sustainability and social justice.",
    link: "https://greens.org.au/join",
    color: "border-green-500",
    youthWing: {
      name: "Australian Young Greens",
      link: "https://greens.org.au/young-greens",
      age: "Under 30"
    }
  },
  {
    name: "One Nation",
    description: "Focus on Australian sovereignty and values.",
    link: "https://www.onenation.org.au/join",
    color: "border-orange-500",
  },
];

export default function JoinParty() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            Join a Political Party
          </h1>
          <p className="mt-4 text-lg leading-8 text-charcoal-600">
            One of the most effective ways to be salt and light is to be present where decisions are made. We encourage Christians to join the party that best aligns with their convictions.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-gold-50 p-6 ring-1 ring-gold-200">
            <div className="flex gap-4">
                <AlertTriangle className="h-6 w-6 text-gold-600 flex-shrink-0" />
                <div>
                    <h3 className="text-sm font-semibold text-gold-800">Non-Partisan Disclaimer</h3>
                    <p className="mt-2 text-sm text-gold-700">
                        Christians in Politics does not endorse any specific party. We list major parties here to help you find the official joining pages. We believe Christians can faithfully serve in all of these parties.
                    </p>
                </div>
            </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {parties.map((party) => (
            <div
              key={party.name}
              className={`flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-charcoal-200 transition-all hover:shadow-md border-t-4 ${party.color}`}
            >
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900">{party.name}</h3>
                <p className="mt-4 text-base leading-7 text-charcoal-600">
                  {party.description}
                </p>
                <div className="mt-6 border-t border-charcoal-100 pt-6">
                    <h4 className="text-sm font-semibold text-charcoal-900">What to expect</h4>
                    <p className="mt-2 text-sm text-charcoal-500">
                        Monthly branch meetings, policy discussions, and opportunities to select candidates.
                    </p>
                </div>
                {party.youthWing && (
                    <div className="mt-6 border-t border-charcoal-100 pt-6">
                        <h4 className="text-sm font-semibold text-charcoal-900">Under 30?</h4>
                        <p className="mt-2 text-sm text-charcoal-500">
                            Join {party.youthWing.name}.
                        </p>
                        <a
                            href={party.youthWing.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center text-sm font-medium text-copper-600 hover:text-copper-500"
                        >
                            Visit youth site <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                    </div>
                )}
              </div>
              <a
                href={party.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-charcoal-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-charcoal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal-600"
              >
                Join on official site <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
