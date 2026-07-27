import { FileText, Download, PlayCircle, BookOpen, ExternalLink } from "lucide-react";
import { Link } from "react-router";

type ResourceItem = {
  title: string;
  type: string;
  icon: typeof FileText;
  to?: string; // internal route
  href?: string; // external URL
  comingSoon?: boolean;
};

const resources: { category: string; items: ResourceItem[] }[] = [
  {
    category: "Getting Started",
    items: [
      { title: "Why join a political party?", type: "Article", icon: FileText, to: "/about" },
      { title: "Understanding the Australian Political System", type: "Guide", icon: BookOpen, href: "https://peo.gov.au/" },
      { title: "How to choose a party that fits you", type: "Tool", icon: FileText, to: "/join" },
    ]
  },
  {
    category: "Faithful Public Life",
    items: [
      { title: "The Salt and Light Framework", type: "Video", icon: PlayCircle, comingSoon: true },
      { title: "Disagreement without Division", type: "Article", icon: FileText, comingSoon: true },
      { title: "Prayer Guide for Public Officials", type: "PDF", icon: Download, comingSoon: true },
    ]
  },
  {
    category: "For Churches",
    items: [
      { title: "CiP Church Promo Kit", type: "Download", icon: Download, comingSoon: true },
      { title: "Hosting a 'Christians in Politics' Sunday", type: "Guide", icon: BookOpen, to: "/contact" },
      { title: "Small Group Discussion Guide", type: "PDF", icon: Download, comingSoon: true },
    ]
  }
];

export default function Resources() {
  return (
    <div className="bg-charcoal-50 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            Resources
          </h1>
          <p className="mt-4 text-lg leading-8 text-charcoal-600">
            Equipping you with the tools, knowledge, and encouragement to engage faithfully in the public square.
          </p>
        </div>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
          {resources.map((section) => (
            <article key={section.category} className="relative isolate flex flex-col gap-8 lg:flex-row">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-copper-50 ring-1 ring-inset ring-charcoal-900/10 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-copper-800 text-center px-4">{section.category}</h3>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <span className="text-charcoal-500">Latest Updates</span>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-charcoal-900 group-hover:text-copper-600">
                    <span className="absolute inset-0" />
                    Recommended Reading & Tools
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-charcoal-600">
                    Explore our curated collection of resources designed to help you navigate the complexities of political engagement with wisdom and grace.
                  </p>
                </div>
                <div className="mt-6 flex border-t border-charcoal-900/5 pt-6">
                    <ul className="w-full space-y-4">
                        {section.items.map((item) => {
                            const isLink = Boolean(item.to || item.href);
                            return (
                            <li
                                key={item.title}
                                className={`relative flex items-center gap-x-4 rounded-lg p-4 transition-all ${
                                    isLink ? "hover:bg-white hover:shadow-sm" : "opacity-70"
                                }`}
                            >
                                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-charcoal-100">
                                    <item.icon className="h-5 w-5 text-charcoal-600" aria-hidden="true" />
                                </div>
                                <div className="flex-auto">
                                    <h4 className="text-sm font-semibold leading-6 text-charcoal-900">
                                        {item.to ? (
                                            <Link to={item.to} className="hover:text-copper-600">
                                                <span className="absolute inset-0" />
                                                {item.title}
                                            </Link>
                                        ) : item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-copper-600">
                                                <span className="absolute inset-0" />
                                                {item.title}
                                            </a>
                                        ) : (
                                            <span className="text-charcoal-700">{item.title}</span>
                                        )}
                                    </h4>
                                    <p className="mt-1 flex items-center gap-2 text-xs leading-5 text-charcoal-500">
                                        {item.type}
                                        {item.href && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                                        {item.comingSoon && (
                                            <span className="inline-flex items-center rounded-full bg-charcoal-100 px-2 py-0.5 text-[10px] font-medium text-charcoal-500 ring-1 ring-inset ring-charcoal-200">
                                                Coming soon
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </li>
                            );
                        })}
                    </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}