import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProductsMarquee from "@/components/sections/ProductsMarquee";
import MarketsBento from "@/components/sections/MarketsBento";
import Innovation from "@/components/sections/Innovation";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import CTASection from "@/components/sections/CTASection";
import ScrollBackground from "@/components/ScrollBackground";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Aditya Chemicals | GMP Certified API & Chelated Minerals Manufacturer",
  description: "Aditya Chemicals is a leading global manufacturer of active pharmaceutical ingredients (APIs), bulk bioavailable Chelated Minerals, amino acids, and excipients. GMP-certified & FDA-registered plant exporting to USA, Europe, UK, and globally.",
  keywords: "chemical manufacturer, API manufacturing company, bulk chelated minerals supplier, amino acids exporter, GMP certified factory, FDA registered chemical plant, USA chemical supplier, Europe chemical exporter, UK compliant chemical manufacturing",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Aditya Chemicals",
              "url": "https://www.adityachemicals.com",
              "logo": "https://www.adityachemicals.com/aditya_logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-79-26854545",
                "contactType": "sales",
                "areaServed": ["US", "GB", "EU", "IN"],
                "availableLanguage": "en"
              },
              "description": "Aditya Chemicals is a leading global API & Chelated Minerals manufacturer. FDA-registered & GMP-certified bulk supplier of Amino Acids, Excipients, and Vitamins to the USA, UK, Europe, and Asia."
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals Corporate Office",
              "image": "https://www.adityachemicals.com/aditya_logo.png",
              "telephone": "+91-79-26854545",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "204, President Plaza, Nr. Thaltej Cross Road, S. G. Highway",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "380054",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:30",
                "closes": "18:00"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aditya Chemicals USA Warehouse",
              "image": "https://www.adityachemicals.com/aditya_logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6550 E Roger Cir",
                "addressLocality": "Boca Raton",
                "addressRegion": "FL",
                "postalCode": "33487",
                "addressCountry": "US"
              }
            }
          ])
        }}
      />

      {/* Scroll Background Observer */}
      <ScrollBackground />

      {/* Landing Page Sections with Target Scroll Colors */}
      <div data-bg-color="#faf8ff">
        <Hero />
      </div>

      <div data-bg-color="#ffffff">
        <ScrollReveal>
          <ProductsMarquee />
        </ScrollReveal>
      </div>

      <div data-bg-color="#faf8ff">
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
      </div>

      <div data-bg-color="#eef2ff">
        <ScrollReveal>
          <MarketsBento />
        </ScrollReveal>
      </div>

      <div data-bg-color="#f2f3ff">
        <ScrollReveal>
          <Innovation />
        </ScrollReveal>
      </div>

      <div data-bg-color="#ffffff">
        <ScrollReveal>
          <BrandsMarquee />
        </ScrollReveal>
      </div>

      <div data-bg-color="#faf8ff">
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </div>
    </>
  );
}
