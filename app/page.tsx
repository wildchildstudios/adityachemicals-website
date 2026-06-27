import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import MarketsBento from "@/components/sections/MarketsBento";
import Innovation from "@/components/sections/Innovation";
import CTASection from "@/components/sections/CTASection";
import ScrollBackground from "@/components/ScrollBackground";

export default function Home() {
  return (
    <>
      {/* Scroll Background Observer */}
      <ScrollBackground />

      {/* Landing Page Sections with Target Scroll Colors */}
      <div data-bg-color="#faf8ff">
        <Hero />
      </div>

      <div data-bg-color="#ffffff">
        <AboutSection />
      </div>

      <div data-bg-color="#eef2ff">
        <MarketsBento />
      </div>

      <div data-bg-color="#f2f3ff">
        <Innovation />
      </div>

      <div data-bg-color="#faf8ff">
        <CTASection />
      </div>
    </>
  );
}
