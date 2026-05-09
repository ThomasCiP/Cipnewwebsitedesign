import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

// Mock Data
const EVENTS = [
  {
    id: 1,
    title: "CiP Launch: Sydney",
    date: "2026-10-12",
    time: "7:00 PM",
    location: "Sydney CBD",
    state: "NSW",
    type: "Launch",
    description: "Join us for an evening of vision, prayer, and connection as we launch Christians in Politics in NSW.",
    link: "#"
  },
  {
    id: 2,
    title: "Faith in the Public Square",
    date: "2026-10-25",
    time: "7:30 PM",
    location: "Canberra, ACT",
    state: "ACT",
    type: "Training",
    description: "A workshop on how to articulate your faith values in a secular political environment.",
    link: "#"
  },
  {
    id: 3,
    title: "Prayer for the Nation",
    date: "2026-11-05",
    time: "7:00 AM",
    location: "Online (Zoom)",
    state: "Online",
    type: "Prayer",
    description: "Monthly online prayer gathering for our nation's leaders and Christians serving in politics.",
    link: "#"
  },
  {
    id: 4,
    title: "Meet the Candidate (Non-Partisan)",
    date: "2026-11-15",
    time: "6:30 PM",
    location: "Parramatta, NSW",
    state: "NSW",
    type: "Networking",
    description: "An opportunity to meet Christian candidates from various parties in a friendly setting.",
    link: "#"
  }
];

const FILTERS = ["All", "NSW", "ACT", "Online"];

const PARTNER_EVENTS = [
  {
    id: "p1",
    partner: "Australian Christian Lobby",
    title: "Truth & Voice Conference",
    date: "2026-11-20",
    location: "Melbourne, VIC",
    link: "https://www.acl.org.au/events",
    description: "Equipping Christians to speak truth in the public square."
  },
  {
    id: "p2",
    partner: "Rebuild Australia",
    title: "National Prayer Breakfast",
    date: "2026-12-05",
    location: "Canberra, ACT",
    link: "https://rebuildaustralia.org/",
    description: "Gathering leaders to pray for the future of our nation."
  },
  {
    id: "p3",
    partner: "Freedom for Faith",
    title: "Religious Freedom Conference",
    date: "2027-02-15",
    location: "Sydney, NSW",
    link: "https://freedomforfaith.org.au/",
    description: "Understanding the legal challenges facing religious institutions."
  }
];

export default function Events() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = EVENTS.filter(event => filter === "All" || event.state === filter);

  return (
    <div className="bg-charcoal-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-charcoal-900 sm:truncate sm:text-4xl sm:tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg text-charcoal-600">
                Find gatherings, training, and prayer meetings near you.
            </p>
          </div>
        </div>

        {/* Partner Events Highlight */}
        <div className="mt-12 mb-16">
           <h3 className="text-xl font-bold text-charcoal-900 mb-6 flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-copper-600" /> 
              Featured Partner Events
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PARTNER_EVENTS.map(event => (
                 <a 
                    key={event.id} 
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border-l-4 border-gold-400 rounded-r-lg shadow-sm hover:shadow-md p-5 transition-all hover:border-l-8"
                 >
                    <div className="text-xs font-semibold text-gold-600 uppercase tracking-wide mb-1">
                       {event.partner}
                    </div>
                    <h4 className="font-bold text-charcoal-900 group-hover:text-copper-700 transition-colors">
                       {event.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-3 text-sm text-charcoal-500">
                       <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(event.date).toLocaleDateString()}</span>
                       <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {event.location}</span>
                    </div>
                    <p className="mt-3 text-sm text-charcoal-600 line-clamp-2">
                       {event.description}
                    </p>
                 </a>
              ))}
           </div>
        </div>

        <div className="border-t border-charcoal-200 my-10"></div>

        <div className="md:flex md:items-center md:justify-between">
           <h3 className="text-2xl font-bold text-charcoal-900">CiP Community Events</h3>
        </div>

        {/* Filters */}
        <div className="mt-8 flex space-x-4 overflow-x-auto pb-4">
            {FILTERS.map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={clsx(
                        "rounded-full px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset",
                        filter === f 
                            ? "bg-copper-600 text-white ring-copper-600" 
                            : "bg-white text-charcoal-900 ring-charcoal-300 hover:bg-charcoal-50"
                    )}
                >
                    {f}
                </button>
            ))}
        </div>

        {/* Event List */}
        <div className="mt-8 space-y-6">
            {filteredEvents.map((event) => (
                <div key={event.id} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-charcoal-200 transition-all hover:shadow-md flex flex-col md:flex-row">
                    <div className="bg-copper-50 p-6 flex-shrink-0 flex flex-col items-center justify-center w-full md:w-32 border-b md:border-b-0 md:border-r border-charcoal-100">
                        <span className="text-copper-700 font-bold text-xl">{new Date(event.date).getDate()}</span>
                        <span className="text-copper-600 uppercase text-sm font-semibold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                        <span className="text-charcoal-400 text-xs mt-1">{new Date(event.date).getFullYear()}</span>
                    </div>
                    <div className="p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                                <span className="inline-flex items-center rounded-md bg-charcoal-100 px-2 py-1 text-xs font-medium text-charcoal-600 ring-1 ring-inset ring-charcoal-500/10 mb-2">
                                    {event.type}
                                </span>
                                <h3 className="text-xl font-bold text-charcoal-900">{event.title}</h3>
                            </div>
                            <div className="mt-2 md:mt-0 flex items-center text-sm text-charcoal-500 gap-4">
                                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {event.location}</span>
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {event.time}</span>
                            </div>
                        </div>
                        <p className="text-charcoal-600 mb-6">
                            {event.description}
                        </p>
                        <div className="flex items-center justify-between border-t border-charcoal-100 pt-4">
                            <span className="text-xs text-charcoal-400 italic">Code of Conduct applies</span>
                            <a href={event.link} className="inline-flex items-center gap-1 text-sm font-semibold text-copper-600 hover:text-copper-500">
                                Register via Humanitix <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {filteredEvents.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-charcoal-300">
                <p className="text-charcoal-500">No events found for this filter.</p>
            </div>
        )}
      </div>
    </div>
  );
}
