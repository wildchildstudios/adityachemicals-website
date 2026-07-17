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
  booth?: string;
  slug?: string;
}

const upcomingEvents: EventItem[] = [
  {
    date: "26-28 Aug 2026",
    name: "Fi India 2026",
    venue: "Bombay Exhibition Centre (BEC)",
    location: "Mumbai, India",
    booth: "4F85",
  },
  {
    date: "2-4 Sep 2026",
    name: "Vitafoods Asia 2026",
    venue: "Queen Sirikit National Convention Center (QSNCC)",
    location: "Bangkok, Thailand",
    booth: "H6-G49",
  },
  {
    date: "27-30 Oct 2026",
    name: "SupplySide West 2026",
    venue: "Mandalay Bay",
    location: "Las Vegas, NV, USA",
    booth: "7790",
  },
  {
    date: "23-25 Nov 2026",
    name: "CPHI & PMEC India 2026",
    venue: "India Expo Mart (IEML)",
    location: "Greater Noida, Delhi NCR, India",
    booth: "-",
  },
];

const pastEvents: EventItem[] = [
  {
    date: "12-15 July 2026",
    name: "IFT FIRST Chicago 2026",
    venue: "McCormick Place",
    location: "Chicago, IL, USA",
    booth: "1617",
    slug: "ift-first-2026",
  },
  {
    date: "5-7 May 2026",
    name: "Vitafoods Europe 2026",
    venue: "Palexpo",
    location: "Geneva, Switzerland",
    booth: "4H117",
  },
  {
    date: "29-30 Apr 2026",
    name: "ChemExpo India 2026",
    venue: "Bombay Exhibition Centre",
    location: "Mumbai, India",
    booth: "4E22",
  },
  {
    date: "11-13 Feb 2026",
    name: "Vitafoods India 2026",
    venue: "Pavilion 1-3, Jio World Convention Center",
    location: "Mumbai, India",
  },
  {
    date: "25-27 Nov 2025",
    name: "CPHI PMEC India 2025",
    venue: "India Expo Mart (IEML)",
    location: "Greater Noida, Delhi NCR",
  },
  {
    date: "29-30 Oct 2025",
    name: "SupplySide West 2025",
    venue: "Mandalay Bay",
    location: "Las Vegas, NV 89119, USA",
  },
  {
    date: "17-19 Sep 2025",
    name: "Vitafoods Asia 2025",
    venue: "Queen Sirikit National Convention Centre (QSNCC)",
    location: "Bangkok, Thailand",
  },
  {
    date: "3-5 Sep 2025",
    name: "Fi India 2025",
    venue: "IEML",
    location: "Greater Noida, Delhi NCR, India",
  },
  {
    date: "14-16 July 2025",
    name: "IFT 2025",
    venue: "McCormick Place",
    location: "Chicago, Illinois, USA",
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

      {/* Upcoming Events Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-deep-navy">Upcoming Events</h2>

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
              {upcomingEvents.map((event, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 text-primary font-bold">{event.date}</td>
                  <td className="px-6 py-4 text-deep-navy font-bold text-base">{event.name}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{event.venue}</td>
                  <td className="px-6 py-4 text-on-surface-variant/80">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-surface-container-highest shadow-sm space-y-3"
            >
              <div className="flex justify-between items-center border-b border-surface-container-highest pb-2">
                <span className="text-xs text-primary font-bold">{event.date}</span>
                <span className="material-symbols-outlined text-primary text-sm select-none animate-pulse">
                  schedule
                </span>
              </div>
              <h3 className="text-lg font-bold text-deep-navy">{event.name}</h3>
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
