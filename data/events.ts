export interface EventDetails {
  slug: string;
  name: string;
  date: string;
  venue: string;
  location: string;
  websiteUrl?: string;
  purpose: string;
  images: string[];
  // Rich SEO content
  titleSEO?: string;
  descriptionSEO?: string;
  longDescription?: string[];
  highlights?: { title: string; description: string }[];
  keyTakeaways?: string[];
}

export const eventsData: Record<string, EventDetails> = {
  "ift-first-2026": {
    slug: "ift-first-2026",
    name: "IFT FIRST 2026",
    date: "July 13–15, 2026",
    venue: "McCormick Place",
    location: "Chicago, IL, USA",
    websiteUrl: "https://www.ift.org/ift-first-event/",
    purpose: "Showcase our portfolio of specialty minerals and vitamins, secure new global partnerships, and provide customized ingredient solutions for food and nutrition product manufacturers.",
    images: [
      "/news/WhatsApp Image 2026-07-17 at 11.53.06 AM (2).jpeg",
      "/news/WhatsApp Image 2026-07-17 at 11.53.07 AM (1).jpeg",
      "/news/IMG_20260717_131523.jpg.jpeg",
      "/news/IMG_20260717_132407.jpg.jpeg"
    ],
    titleSEO: "Aditya Chemicals Showcases Premium Food & Nutraceutical Ingredients at IFT FIRST 2026 Chicago",
    descriptionSEO: "Learn about Aditya Chemicals' participation at IFT FIRST 2026 in Chicago. We exhibited our premium bioavailable chelated minerals, specialty vitamins, and custom ingredient solutions.",
    longDescription: [
      "Aditya Chemicals, a leading FDA-registered and GMP-certified manufacturer, participated in the prestigious IFT FIRST 2026 annual event and food expo held at McCormick Place in Chicago, Illinois. As one of the world's premier food science and ingredient events, IFT FIRST provided the ideal global stage for us to connect with developers, researchers, and nutrition manufacturers seeking high-purity specialty ingredients.",
      "During the three-day exhibition, our representatives engaged with international brand owners and product developers to address the industry's evolving needs for clean-label, bioavailable, and highly soluble ingredients. We discussed custom formulation technologies and showcased how our advanced manufacturing standards comply with USP, FCC, EP, and FDA guidelines, ensuring maximum quality assurance for global distribution channels."
    ],
    highlights: [
      {
        title: "Bioavailable Chelated Minerals Showcase",
        description: "We presented our comprehensive portfolio of bulk organic mineral chelates, including Calcium Bisglycinate, Magnesium Bisglycinate, Zinc Glycinate, and Ferrous Bisglycinate. Engineered for high bioavailability and neutral taste profile, these chelates are widely utilized in infant nutrition, beverage fortification, and functional foods."
      },
      {
        title: "Tailored Custom Ingredient Solutions",
        description: "Our technical team highlighted custom solution capabilities, such as particle size distribution (PSD) optimization, granulated formats for direct compression, and customized mineral-vitamin premixes designed to streamline operations and solve tableting and dissolution issues."
      },
      {
        title: "Global Supply Chain & FL Warehouse Efficiency",
        description: "We briefed clients on our robust logistics infrastructure, specifically emphasizing our US warehouse facility in Boca Raton, Florida. This allows us to hold safety stock and distribute minerals and excipients rapidly to North American and European manufacturers."
      }
    ],
    keyTakeaways: [
      "Demonstrated our capabilities in producing high-purity, bioavailable food and nutraceutical minerals.",
      "Addressed critical solubility and processing challenges for functional beverages and direct-compression tablets.",
      "Discussed long-term global supply partnerships with leading food and dietary supplement brands.",
      "Exhibited full compliance capabilities across FDA, USP, FCC, and European Pharmacopoeia (EP) regulations."
    ]
  }
};
