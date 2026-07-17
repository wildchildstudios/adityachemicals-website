import Link from "next/link";

export const metadata = {
  title: "Global Exhibitions & Events | Aditya Chemicals CPhI IFT",
  description: "Stay updated on the international pharma and food ingredient trade shows (CPhI, IFT, Fi Europe) where Aditya Chemicals showcases compliance and manufacturing innovations.",
};

interface EventItem {
  date: string;
  name: string;
  venue: string;
  location: string;
  slug?: string;
}

const pastEvents: EventItem[] = [
  {
    date: "13-15 July 2026",
    name: "IFT FIRST 2026",
    venue: "McCormick Place",
    location: "Chicago, IL, USA",
    slug: "ift-first-2026",
  },
  {
    date: "14-16 July 2025",
    name: "IFT 2025",
    venue: "McCormick Place",
    location: "Chicago, Illinois, USA",
  },
  {
    date: "3-5 Sep 2025",
    name: "Fi India 2025",
    venue: "IEML",
    location: "Greater Noida, Delhi NCR, India",
  },
  {
    date: "17-19 Sep 2025",
    name: "Vitafoods Asia 2025",
    venue: "Queen Sirikit National Convention Centre (QSNCC)",
    location: "Bangkok, Thailand",
  },
  {
    date: "29-30 Oct 2025",
    name: "SupplySide West 2025",
    venue: "Mandalay Bay",
    location: "Las Vegas, NV 89119, USA",
  },
  {
    date: "25-27 Nov 2025",
    name: "CPHI PMEC India 2025",
    venue: "India Expo Mart (IEML)",
    location: "Greater Noida, Delhi NCR",
  },
  {
    date: "11-13 Feb 2026",
    name: "Vita Foods India",
    venue: "Pavilion 1-3, Jio World Convention Center",
    location: "Mumbai, India",
  },
];

export default function EventsPage() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-16">
      {/* Title Header */}
      <div className="border-b border-surface-container-highest pb-8">
        <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy">
          Events & <span className="text-primary italic">Exhibitions</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mt-4">
          Connect with Aditya Chemicals worldwide. We showcase our latest API developments, food additives, and nutritional formulations at leading global trade shows.
        </p>
      </div>

      {/* Upcoming Events - Coming Soon */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-deep-navy">Upcoming Events</h2>
        <div className="bg-surface-container-low p-10 rounded-2xl border border-surface-container-highest flex flex-col items-center justify-center text-center space-y-4">
          <span className="material-symbols-outlined text-primary text-5xl select-none animate-pulse">
            schedule
          </span>
          <h3 className="text-xl font-bold text-deep-navy">Coming Soon</h3>
          <p className="text-on-surface-variant text-sm max-w-md">
            No upcoming events listed at the time of extraction. Please check back later or get in touch directly to schedule a meeting with our representatives.
          </p>
        </div>
      </div>

      {/* Past Events - Responsive Table / Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-deep-navy">Past Events</h2>
        
        {/* Desktop View Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-surface-container-highest bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm text-on-surface">
            <thead className="bg-surface-container-low border-b border-surface-container-highest font-bold text-deep-navy text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Dates</th>
                <th className="px-6 py-4">Event Name</th>
                <th className="px-6 py-4">Venue</th>
                <th className="px-6 py-4">Location</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-highest font-medium">
              {pastEvents.map((event, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 text-primary font-bold">{event.date}</td>
                  <td className="px-6 py-4 text-deep-navy font-bold text-base">
                    {event.slug ? (
                      <Link href={`/events/${event.slug}`} className="text-primary hover:text-primary-container inline-flex items-center gap-1 group font-bold">
                        {event.name}
                        <span className="material-symbols-outlined text-sm select-none transition-transform group-hover:translate-x-0.5">arrow_forward</span>
                      </Link>
                    ) : (
                      event.name
                    )}
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">{event.venue}</td>
                  <td className="px-6 py-4 text-on-surface-variant/80">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-surface-container-highest shadow-sm space-y-3"
            >
              <div className="flex justify-between items-center border-b border-surface-container-highest pb-2">
                <span className="text-xs text-primary font-bold">{event.date}</span>
                <span className="material-symbols-outlined text-primary-fixed text-sm select-none">
                  history
                </span>
              </div>
              <h3 className="text-lg font-bold text-deep-navy">
                {event.slug ? (
                  <Link href={`/events/${event.slug}`} className="text-primary hover:text-primary-container inline-flex items-center gap-1 group font-bold">
                    {event.name}
                    <span className="material-symbols-outlined text-sm select-none transition-transform group-hover:translate-x-0.5">arrow_forward</span>
                  </Link>
                ) : (
                  event.name
                )}
              </h3>
              <div className="space-y-1 text-xs text-on-surface-variant font-medium">
                <p className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs select-none">location_on</span>
                  {event.venue}
                </p>
                <p className="flex items-center gap-1.5 text-on-surface-variant/80">
                  <span className="material-symbols-outlined text-xs select-none">public</span>
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
