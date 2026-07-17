import { eventsData } from "@/data/events";
import { notFound } from "next/navigation";
import Link from "next/link";
import EventGallery from "@/components/EventGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(eventsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = eventsData[slug];
  if (!event) return {};

  return {
    title: event.titleSEO || `${event.name} | Aditya Chemicals Exhibition Highlight`,
    description: event.descriptionSEO || `Highlights from Aditya Chemicals showcasing at ${event.name} in ${event.location}. ${event.purpose}`,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = eventsData[slug];

  if (!event) {
    notFound();
  }

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-on-surface-variant/80 font-medium">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="material-symbols-outlined text-xs select-none">chevron_right</span>
        <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
        <span className="material-symbols-outlined text-xs select-none">chevron_right</span>
        <span className="text-primary font-bold">{event.name}</span>
      </nav>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left Side: Summary & Quick Details Card */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="bg-surface-container-low p-8 rounded-2xl border border-surface-container-highest shadow-sm space-y-6">
            <h1 className="font-headline-md text-deep-navy font-bold leading-tight">
              {event.name}
            </h1>
            
            <div className="border-t border-surface-container-highest pt-6 space-y-4">
              {/* Date */}
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl select-none mt-0.5">
                  calendar_today
                </span>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Dates</h4>
                  <p className="font-semibold text-deep-navy text-sm mt-0.5">{event.date}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl select-none mt-0.5">
                  location_on
                </span>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">Venue & Location</h4>
                  <p className="font-semibold text-deep-navy text-sm mt-0.5">{event.venue}</p>
                  <p className="text-on-surface-variant/80 text-xs">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Event website button if available */}
            {event.websiteUrl && (
              <div className="pt-4">
                <a
                  href={event.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-button rounded-xl hover:bg-primary-container transition-all duration-200 text-center shadow-sm select-none"
                >
                  Visit Official Website
                  <span className="material-symbols-outlined text-sm select-none">open_in_new</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Rich Description, Highlights & Takeaways */}
        <div className="lg:col-span-2 space-y-8 font-medium">
          
          {/* Main Article Section */}
          <div className="bg-white p-8 rounded-2xl border border-surface-container-highest shadow-sm space-y-6">
            <h2 className="text-sm uppercase tracking-wider text-primary font-bold select-none">
              Overview & Objectives
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-deep-navy leading-snug">
              Strengthening Global Food & Nutrition Partnerships
            </h3>
            
            {/* Long Description Paragraphs */}
            {event.longDescription && event.longDescription.length > 0 ? (
              <div className="space-y-4 text-on-surface-variant font-normal leading-relaxed text-sm md:text-base">
                {event.longDescription.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="font-body-md text-on-surface-variant leading-relaxed font-normal">
                {event.purpose}
              </p>
            )}
          </div>

          {/* Exhibition Highlights Section */}
          {event.highlights && event.highlights.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-deep-navy px-2">Key Areas of Focus</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-surface-container-highest shadow-sm space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary mb-3">
                      <span className="material-symbols-outlined text-lg select-none">
                        {idx === 0 ? "database" : idx === 1 ? "settings_suggest" : "local_shipping"}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-deep-navy">{highlight.title}</h3>
                    <p className="text-on-surface-variant/90 text-xs md:text-sm font-normal leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways Checklist Box */}
          {event.keyTakeaways && event.keyTakeaways.length > 0 && (
            <div className="bg-primary/5 border border-primary-fixed/40 p-8 rounded-2xl shadow-sm space-y-4">
              <h3 className="text-base font-bold text-primary uppercase tracking-wider select-none">Event Takeaways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm font-normal text-on-surface-variant">
                {event.keyTakeaways.map((takeaway, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-base select-none mt-0.5">
                      check_circle
                    </span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Photo Gallery Section */}
      <div className="space-y-6 border-t border-surface-container-highest pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-deep-navy">Event Gallery</h2>
            <p className="text-on-surface-variant text-sm mt-1 font-medium">
              Browse through photos of Aditya Chemicals' booth and activities at the exhibition.
            </p>
          </div>
          <div className="text-xs font-semibold text-primary bg-primary-fixed/30 px-3 py-1.5 rounded-full select-none">
            {event.images.length} Photos
          </div>
        </div>

        {/* Gallery Component */}
        <EventGallery images={event.images} />
      </div>
    </div>
  );
}
