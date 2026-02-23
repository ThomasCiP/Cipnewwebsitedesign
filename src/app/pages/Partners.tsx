import { ExternalLink } from "lucide-react";
import aclLogo from "../../assets/7bf03a2e274025b4b1735a3c665bd55659810a89.png";
import rebuildLogo from "../../assets/3f28c04d13f8faa09a9ecf8ef730a92bb948f68f.png";

interface Partner {
  name: string;
  description: string;
  tags: string[];
  link: string;
  domain: string;
  logo?: string;
}

const CORE_PARTNERS: Partner[] = [
  {
    name: "Freedom for Faith",
    description: "A Christian legal think tank that protects and promotes religious freedom in Australia.",
    tags: ["Religious Freedom", "Legal"],
    link: "https://freedomforfaith.org.au/",
    domain: "freedomforfaith.org.au"
  },
  {
    name: "Australian Christian Lobby",
    description: "Empowering Christians to be a voice for truth in the public square.",
    tags: ["Advocacy", "Public Policy"],
    link: "https://www.acl.org.au/",
    domain: "acl.org.au",
    logo: aclLogo
  },
  {
    name: "Rebuild Australia",
    description: "Calling the nation to prayer and repentance for spiritual renewal.",
    tags: ["Prayer", "Renewal"],
    link: "https://rebuildaustralia.org/",
    domain: "rebuildaustralia.org",
    logo: rebuildLogo
  },
  {
    name: "Christians for Labor",
    description: "A network of Christians within the Australian Labor Party working for the common good.",
    tags: ["Political Party", "Labor"],
    link: "https://christiansforlabor.org/",
    domain: "christiansforlabor.org"
  }
];

const RECOMMENDED_PARTNERS: Partner[] = [
  {
    name: "Turning Point Australia",
    description: "Educating and empowering Australians to stand for freedom.",
    tags: ["Education", "Advocacy"],
    link: "https://tpaust.com.au/",
    domain: "tpaust.com.au"
  },
  {
    name: "Church and State",
    description: "Equipping Christians to be effective salt and light in the public square.",
    tags: ["Conference", "Education"],
    link: "https://www.churchandstate.com.au/",
    domain: "churchandstate.com.au"
  },
  {
    name: "Common Grace",
    description: "A movement of Christians passionate about Jesus and justice.",
    tags: ["Justice", "Creation Care"],
    link: "https://www.commongrace.org.au/",
    domain: "commongrace.org.au"
  },
  {
    name: "Micah Australia",
    description: "Empowering Australian Christians to advocate for global justice and end poverty.",
    tags: ["Global Justice", "Poverty"],
    link: "https://www.micahaustralia.org/",
    domain: "micahaustralia.org"
  },
  {
    name: "Wesley Mission",
    description: "Serving the community and advocating for social reform, including gambling reform.",
    tags: ["Social Services", "Reform"],
    link: "https://www.wesleymission.org.au/",
    domain: "wesleymission.org.au"
  },
  {
    name: "Lachlan Macquarie Institute",
    description: "Developing Christian leaders for public life through rigorous intellectual and spiritual formation.",
    tags: ["Leadership", "Education"],
    link: "https://lmi.org.au/",
    domain: "lmi.org.au"
  },
  {
    name: "National Prayer Breakfast",
    description: "Gathering leaders to pray for our nation and its leaders.",
    tags: ["Prayer", "Parliament"],
    link: "https://nationalprayerbreakfast.org/",
    domain: "nationalprayerbreakfast.org"
  },
  {
    name: "Human Rights Law Alliance",
    description: "Providing legal support to protect the fundamental freedoms of all Australians.",
    tags: ["Legal", "Human Rights"],
    link: "https://www.hrla.org.au/",
    domain: "hrla.org.au"
  }
];

export default function Partners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
            Our Partners & Friends
          </h1>
          <p className="mt-4 text-lg leading-8 text-charcoal-600">
            We are proud to stand alongside these organisations in equipping Christians for public life.
          </p>
        </div>

        {/* Recommended Partners */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-charcoal-900 text-center mb-8">
            Recommended Politically Engaged Christian Organisations
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {[...CORE_PARTNERS, ...RECOMMENDED_PARTNERS].map((partner) => (
              <PartnerCard key={partner.name} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PartnerCard({ partner, featured = false }: { partner: Partner; featured?: boolean }) {
  return (
    <article className={`flex flex-col items-start justify-between rounded-2xl bg-charcoal-50 p-6 ring-1 ring-charcoal-200 transition-all hover:bg-white hover:shadow-lg hover:ring-copper-200 ${featured ? 'bg-white shadow-sm ring-charcoal-300' : ''}`}>
      <div className="w-full flex justify-between items-start mb-4">
        <div className="h-12 w-full max-w-[80%] rounded-lg flex items-center justify-start overflow-hidden">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="h-12 w-auto object-contain object-left"
            />
          ) : (
            <img
              src={`https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`}
              alt={`${partner.name} logo`}
              className="h-8 w-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
              }}
            />
          )}
          <div className={`hidden font-bold text-copper-700 text-lg ${partner.logo ? '' : 'ml-2'}`}>
            {partner.name.charAt(0)}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {partner.tags.slice(0, 1).map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full bg-copper-50 px-2 py-1 text-xs font-medium text-copper-700 ring-1 ring-inset ring-copper-600/20">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="group relative flex-1 flex flex-col">
        <h3 className="mt-2 text-lg font-semibold leading-6 text-charcoal-900 group-hover:text-copper-600">
          <a href={partner.link} target="_blank" rel="noopener noreferrer">
            <span className="absolute inset-0" />
            {partner.name}
          </a>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-charcoal-600 flex-1">
          {partner.description}
        </p>
      </div>

      <div className="mt-6 flex items-center gap-x-4 w-full pt-4 border-t border-charcoal-100">
        <a href={partner.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-copper-600 hover:text-copper-500 flex items-center gap-1">
          Visit Website <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}
