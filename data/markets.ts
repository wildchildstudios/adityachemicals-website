export interface MarketSector {
  slug: string;
  name: string;
  icon: string;
  bgIcon?: string;
  description: string;
  longDescription: string;
  linkText: string;
  accentClass: string;
  features: string[];
}

export const marketSectors: MarketSector[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    icon: "vaccines",
    bgIcon: "biotech",
    description: "Our high-performance APIs, developed in FDA-approved manufacturing environments, meet stringent pharmaceutical regulatory compliance standards globally.",
    longDescription: "Aditya Chemicals is a trusted supplier of high-purity Active Pharmaceutical Ingredients (APIs) and advanced intermediates. Our state-of-the-art facilities are FDA-approved, operating under strict cGMP guidelines. We offer therapeutic classes ranging from neuroprotective agents to cardiovascular support compounds, supporting leading global pharmaceutical brands with extensive documentation (DMFs, CEPs) and regulatory support.",
    linkText: "View Compliance",
    accentClass: "bg-white text-deep-navy border-surface-container-highest md:col-span-8",
    features: [
      "FDA-Approved Manufacturing Sites",
      "Comprehensive DMF & Regulatory Filings",
      "End-to-End Purity & Impurity Profiling",
      "Custom synthesis of pharmaceutical intermediates"
    ]
  },
  {
    slug: "nutritional-supplements",
    name: "Nutritional Supplements",
    icon: "vital_signs",
    description: "Trusted nutraceutical ingredients, including fine-grade vitamins & derivatives for complex health-focused formulations.",
    longDescription: "We provide bioavailable mineral chelates, specialty amino acids, and stable vitamin formats for the dietary supplement and wellness industry. Our ingredients are engineered for maximum absorption, cellular retention, and shelf-stability, enabling brands to formulate premium capsules, tablets, functional beverages, and powders with clear nutritional advantages.",
    linkText: "Explore Range",
    accentClass: "bg-deep-navy text-white md:col-span-4",
    features: [
      "High-absorption mineral glycinates",
      "Biological coenzyme forms of vitamins (e.g. Methylcobalamin)",
      "Strict allergen-free and GMO-free controls",
      "Custom micronization and particle sizing options"
    ]
  },
  {
    slug: "food-additives",
    name: "Food Additives",
    icon: "restaurant",
    description: "Enhancing taste profiles, texture, and extending shelf life while ensuring unmatched global safety standards.",
    longDescription: "Our food-grade mineral salts, stabilizers, and acidulants are key ingredients in modern food preservation, texturization, and enrichment. Serving food and beverage manufacturers globally, we maintain stringent FSSC 22000, Kosher, and Halal standards, ensuring complete traceablity and absolute safety in consumer goods.",
    linkText: "Formulations",
    accentClass: "bg-surface-container-low text-deep-navy md:col-span-4",
    features: [
      "FSSC 22000 & HACCP Certified Standards",
      "Clean-label preservation solutions",
      "Nutrient fortification premixes",
      "Consistent batch-to-batch taste and texture profiles"
    ]
  },
  {
    slug: "bespoke-formulations",
    name: "Bespoke Formulations",
    icon: "science",
    description: "Need a specific chemical profile? Our R&D team creates custom solutions for global partners.",
    longDescription: "Collaboration is at the heart of our research and development. We work as partners to customize particle sizes, design custom compound ratios, and synthesize bespoke chemical configurations. Whether you need a specific flow-agent compatibility or a high-solubility mineral form, our R&D hub delivers custom trials, pilot batches, and commercial-scale manufacturing.",
    linkText: "Start Collaboration",
    accentClass: "bg-primary text-white md:col-span-8",
    features: [
      "Joint R&D collaboration protocols",
      "Rapid prototyping and pilot-scale trials",
      "Custom particle coating and granulation services",
      "Dedicated IP protection and confidentiality"
    ]
  }
];

export function getSector(slug: string): MarketSector | undefined {
  return marketSectors.find(s => s.slug === slug);
}
