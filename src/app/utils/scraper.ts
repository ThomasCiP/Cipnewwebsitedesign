import { PartnerEvent } from '../pages/Events';

const PROXY_URL = 'https://api.allorigins.win/get?url=';

export async function fetchPartnerEvents(): Promise<PartnerEvent[]> {
    const events: PartnerEvent[] = [];

    // Scrape Freedom for Faith
    try {
        const fffUrl = 'https://freedomforfaith.org.au/events';
        const res = await fetch(`${PROXY_URL}${encodeURIComponent(fffUrl)}`);
        const data = await res.json();
        const doc = new DOMParser().parseFromString(data.contents, 'text/html');

        // FFF structure: <a> wrapping .item-date and .item-title > h3
        const links = doc.querySelectorAll('a');
        links.forEach((link, idx) => {
            const titleEl = link.querySelector('.item-title h3');
            const dateMonth = link.querySelector('.date-month');
            const dateDay = link.querySelector('.date-day');

            if (titleEl) {
                const titleText = titleEl.textContent?.trim() || 'Freedom for Faith Event';
                const dateText = (dateMonth && dateDay) ? `${dateMonth.textContent} ${dateDay.textContent}` : 'Check website for details';
                let href = link.getAttribute('href') || fffUrl;
                if (!href.startsWith('http')) {
                    href = `https://freedomforfaith.org.au${href}`;
                }

                events.push({
                    id: `fff-${idx}`,
                    partner: 'Freedom for Faith',
                    title: titleText,
                    date: dateText,
                    location: 'Multiple Locations',
                    link: href,
                    description: 'A dedicated event focusing on promoting and protecting religious freedom. Visit the website to find out more and to register.'
                });
            }
        });
    } catch (error) {
        console.error('Error fetching Freedom for Faith events:', error);
    }

    // Scrape ACL
    try {
        const aclUrl = 'https://www.acl.org.au/events';
        const res = await fetch(`${PROXY_URL}${encodeURIComponent(aclUrl)}`);
        const data = await res.json();
        const doc = new DOMParser().parseFromString(data.contents, 'text/html');

        // ACL typically uses standard article or post elements. We'll look for post titles or links that contain 'event'.
        // Their actual events page seems to link to event pages or show them in an iframe maybe? We will look for <h3> or <h2>.
        const headings = doc.querySelectorAll('h2, h3');
        headings.forEach((heading, idx) => {
            const parentLink = heading.closest('a');
            const text = heading.textContent?.trim();

            // Basic heuristic: if it's a link and looks like an event title
            if (parentLink && text && text.length > 5 && text.length < 80 && !text.toLowerCase().includes('donate')) {

                // Only add if we haven't added too many
                if (events.filter(e => e.partner === 'Australian Christian Lobby').length < 3) {
                    events.push({
                        id: `acl-${idx}`,
                        partner: 'Australian Christian Lobby',
                        title: text,
                        date: 'Check website for details',
                        location: 'Various',
                        link: parentLink.href.startsWith('http') ? parentLink.href : aclUrl,
                        description: 'Join the Australian Christian Lobby at this upcoming event to help advocate for Christian values in the public square.'
                    });
                }
            }
        });

    } catch (error) {
        console.error('Error fetching ACL events:', error);
    }

    // Deduplicate by title to avoid redundant links
    const uniqueEventsMap = new Map<string, PartnerEvent>();
    for (const event of events) {
        if (!uniqueEventsMap.has(event.title)) {
            uniqueEventsMap.set(event.title, event);
        }
    }

    return Array.from(uniqueEventsMap.values());
}
