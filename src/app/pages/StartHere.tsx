import { Link } from "react-router";
import { UserPlus, Users, Heart, Church } from "lucide-react";

const pathways = [
  {
    title: "Invite CiP to my church",
    description: "Host a session to encourage your congregation to be salt and light.",
    icon: Church,
    to: "/contact",
    color: "bg-copper-50 text-copper-700",
  },
  {
    title: "I'm new — how do I start?",
    description: "Learn the basics of political engagement and why it matters for Christians.",
    icon: UserPlus,
    to: "/join",
    color: "bg-copper-100 text-copper-700",
  },
  {
    title: "I'm in a party already",
    description: "Connect with other Christians in your party and find encouragement.",
    icon: Users,
    to: "/partners",
    color: "bg-charcoal-100 text-charcoal-700",
  },
  {
    title: "I want to meet other christians engaged in politics",
    description: "Find ways to volunteer, pray, and support those running for office.",
    icon: Heart,
    to: "/events",
    color: "bg-gold-100 text-gold-700",
  },
];

export default function StartHere() {
  return (
    <div className="bg-charcoal-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            Where are you on your journey?
          </h1>
          <p className="mt-4 text-lg leading-8 text-charcoal-600">
            Select the option that best describes you to find the most relevant next steps.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {pathways.map((path) => (
            <Link
              key={path.title}
              to={path.to}
              className="flex flex-col gap-y-4 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-charcoal-200 transition-all hover:shadow-md hover:ring-copper-500"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${path.color}`}>
                <path.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-y-2">
                <h3 className="text-xl font-semibold leading-7 text-charcoal-900">
                  {path.title}
                </h3>
                <p className="text-base leading-7 text-charcoal-600">
                  {path.description}
                </p>
              </div>
              <div className="mt-auto pt-4 text-sm font-semibold leading-6 text-copper-600">
                Continue <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-charcoal-500">
                Not sure? <Link to="/about" className="text-copper-600 hover:underline">Read about our vision</Link> first.
            </p>
        </div>
      </div>
    </div>
  );
}