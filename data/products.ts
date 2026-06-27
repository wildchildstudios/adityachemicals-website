export interface Product {
  name: string;
  slug: string;
  casNumber: string;
  categoryTag: string;
  parentCategorySlug: string;
  subCategorySlug?: string;
  imagePath: string;
}

export interface Category {
  slug: string;
  name: string;
  parentCategorySlug?: string;
  description: string;
  bannerPath: string;
  cardImagePath?: string;
}

export const productCategories: Category[] = [
  {
    slug: "amino-acids-derivatives",
    name: "Amino Acids and Derivatives",
    description: "High-purity essential and non-essential amino acids for pharmaceutical formulations, clinical nutrition, and dietary supplements.",
    bannerPath: "/aditya chemicals images/Amino Acids and Derivatives/Amino Acids & Derivatives Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Amino Acids & Derivatives.png"
  },
  {
    slug: "minerals",
    name: "Chelated Minerals",
    description: "Highly bioavailable mineral glycinates and chelates engineered for optimal absorption, stability, and digestive tolerance.",
    bannerPath: "/aditya chemicals images/Chelated Minerals/Chelated Minerals Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Chelated Minerals.png"
  },
  {
    slug: "calcium",
    name: "Calcium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Calcium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Calcium/Calcium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Calcium.png"
  },
  {
    slug: "copper",
    name: "Copper",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Copper mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Copper/Copper Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Copper.png"
  },
  {
    slug: "ferrous",
    name: "Iron",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Iron mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Ferrous/Ferrous Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/ferrous.png"
  },
  {
    slug: "magnesium",
    name: "Magnesium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Magnesium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Magnesium/Magnesium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/magnesium.png"
  },
  {
    slug: "manganese",
    name: "Manganese",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Manganese mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Manganese/Manganese Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Manganese.png"
  },
  {
    slug: "potassium",
    name: "Potassium",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Potassium mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Potassium/Potassium Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/Potassium.png"
  },
  {
    slug: "zinc",
    name: "Zinc",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Zinc mineral chelates and salts.",
    bannerPath: "/aditya chemicals images/Zinc/Zinc Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/Chelated Minerals/product cads/zinc.png"
  },
  {
    slug: "creatine",
    name: "Creatine",
    parentCategorySlug: "minerals",
    description: "Premium bioavailable Creatine mineral formulations and salts.",
    bannerPath: "/aditya chemicals images/Chelated Minerals/Chelated Minerals Page Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Chelated Minerals.png"
  },
  {
    slug: "vitamins-derivatives",
    name: "Vitamins & Derivatives",
    description: "Premium stable vitamin derivatives and premixes for food fortification, beverages, and therapeutic pharmaceuticals.",
    bannerPath: "/aditya chemicals images/Vitamins & derivatives/Vitamins & Derivatives Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Vitamins & Derivatives.png"
  },
  {
    slug: "excipients",
    name: "Excipients",
    description: "Pharmaceutical grade binders, lubricants, and stabilizers that ensure formulation uniformity, tableting durability, and controlled API release.",
    bannerPath: "/aditya chemicals images/Excipients/Excipients Category Hero Banner.png",
    cardImagePath: "/aditya chemicals images/product page/product cards/Excipients.png"
  }
];

export const products: Product[] = [
  // 1. Amino Acids and Derivatives
  {
    name: "DL-Methionine",
    slug: "dl-methionine-2",
    casNumber: "59-51-8",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/DL Methionine.png"
  },
  {
    name: "L-Carnitine Fumarate",
    slug: "l-carnitine-fumarate-ih",
    casNumber: "90471-79-7",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine Fumarate.png"
  },
  {
    name: "Glycine",
    slug: "glycine",
    casNumber: "56-40-6",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/Glycine.png"
  },
  {
    name: "L-Carnitine L-Tartrate",
    slug: "l-carnitine-l-tartrate-ih",
    casNumber: "36687-82-8",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine L Tartrate.png"
  },
  {
    name: "L-Arginine L-Aspartate",
    slug: "arginine-aspartate-2",
    casNumber: "7675-83-4",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/Arginine Aspartate.png"
  },
  {
    name: "L-Carnitine Orotate",
    slug: "l-carnitine-orotate-2",
    casNumber: "160468-17-7",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Carnitine Orotate.png"
  },
  {
    name: "L-Carnitine L-Aspartate",
    slug: "l-carnitine-l-aspartate",
    casNumber: "20323-95-5",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/Glycine.png" // Fallback
  },
  {
    name: "L-Lysine Monohydrochloride",
    slug: "l-lysine-hcl",
    casNumber: "657-27-2",
    categoryTag: "Amino Acids and Derivatives",
    parentCategorySlug: "amino-acids-derivatives",
    imagePath: "/aditya chemicals images/Amino Acids and Derivatives/product cards/L Lysine HCL.png"
  },

  // 2. Vitamins and Derivatives
  {
    name: "Calcium L-5 Methyltetrahydrofolate",
    slug: "l-methyl-folate-calcium",
    casNumber: "151533-22-1",
    categoryTag: "Vitamins & Derivatives",
    parentCategorySlug: "vitamins-derivatives",
    imagePath: "/aditya chemicals images/Vitamins & derivatives/product card/Calcium L-5 Methyltetrahydrofolate.png"
  },
  {
    name: "Riboflavin Sodium 5 - Phosphate",
    slug: "riboflavin-sodium-5phosphate",
    casNumber: "130-40-5",
    categoryTag: "Vitamins & Derivatives",
    parentCategorySlug: "vitamins-derivatives",
    imagePath: "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin Sodium 5' Phosphate.png"
  },
  {
    name: "Riboflavin",
    slug: "riboflavin",
    casNumber: "83-88-5",
    categoryTag: "Vitamins & Derivatives",
    parentCategorySlug: "vitamins-derivatives",
    imagePath: "/aditya chemicals images/Vitamins & derivatives/product card/Riboflavin.png"
  },

  // 3. Excipients & Specialty Ingredients
  {
    name: "Disodium Edetate",
    slug: "disodium-edetate",
    casNumber: "6381-92-6",
    categoryTag: "Excipients",
    parentCategorySlug: "excipients",
    imagePath: "/aditya chemicals images/Excipients/product card/Disodium Edetate.png"
  },
  {
    name: "Tetrasodium Edetate",
    slug: "tetrasodium-edetate",
    casNumber: "13235-36-4",
    categoryTag: "Excipients",
    parentCategorySlug: "excipients",
    imagePath: "/aditya chemicals images/Excipients/product card/Disodium Edetate.png" // Fallback
  },
  {
    name: "Boron Citrate",
    slug: "boron-citrate",
    casNumber: "7440-42-8",
    categoryTag: "Excipients",
    parentCategorySlug: "excipients",
    imagePath: "/aditya chemicals images/Excipients/product card/Disodium Edetate.png" // Fallback
  },
  {
    name: "Boron Glycinate",
    slug: "boron-glycinate",
    casNumber: "14281-83-5",
    categoryTag: "Excipients",
    parentCategorySlug: "excipients",
    imagePath: "/aditya chemicals images/Excipients/product card/Disodium Edetate.png" // Fallback
  },

  // 4. Chelated Minerals - Magnesium
  {
    name: "Magnesium Aspartate",
    slug: "magnesium-aspartate",
    casNumber: "18962-61-3",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png" // Fallback
  },
  {
    name: "Magnesium Bis Glycinate",
    slug: "magnesium-bis-glycinate",
    casNumber: "14783-68-7",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png"
  },
  {
    name: "Magnesium Citrate",
    slug: "magnesium-citrate",
    casNumber: "3344-18-1",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Citrate.png"
  },
  {
    name: "Magnesium Creatine",
    slug: "magnesium-creatinine-2",
    casNumber: "290357-35-6",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png"
  },
  {
    name: "Magnesium Gluconate",
    slug: "magnesium-gluconate",
    casNumber: "3632-91-5",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Gluconate.png"
  },
  {
    name: "Magnesium L-Pidolate",
    slug: "magnesium-pidolate",
    casNumber: "135701-98-3",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Pidolate.png"
  },
  {
    name: "Magnesium Glycerophosphate",
    slug: "magnesium-glycerophosphate",
    casNumber: "927-20-8",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png" // Fallback
  },
  {
    name: "Magnesium Lactate",
    slug: "magnesium-lactate",
    casNumber: "18917-93-6",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Lactate.png"
  },
  {
    name: "Magnesium Malate",
    slug: "magnesium-malate",
    casNumber: "869-06-7",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Malate.png"
  },
  {
    name: "Magnesium Orotate",
    slug: "magnesium-orotate-2",
    casNumber: "34717-03-8",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Orotate.png"
  },
  {
    name: "Magnesium Succinate",
    slug: "magnesium-succinate-2",
    casNumber: "556-32-1",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Succinate.png"
  },
  {
    name: "Magnesium Taurinate/taurate",
    slug: "magnesium-taurinate",
    casNumber: "334824-43-0",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Taurinate.png"
  },
  {
    name: "Magnesium Fumarate",
    slug: "magnesium-fumarate",
    casNumber: "7395-92-8",
    categoryTag: "Magnesium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "magnesium",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Bis Glycinate.png" // Fallback
  },

  // 5. Chelated Minerals - Creatine
  {
    name: "Creatine Malate",
    slug: "creatine-malate",
    casNumber: "160468-17-8",
    categoryTag: "Creatine (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "creatine",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png" // Fallback
  },
  {
    name: "Creatine Gluconate",
    slug: "creatine-gluconate",
    casNumber: "123-45-6",
    categoryTag: "Creatine (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "creatine",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png" // Fallback
  },
  {
    name: "Creatine Citrate",
    slug: "creatine-citrate",
    casNumber: "17050-09-8",
    categoryTag: "Creatine (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "creatine",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png" // Fallback
  },
  {
    name: "Creatine Orotate",
    slug: "creatine-orotate",
    casNumber: "123-45-7",
    categoryTag: "Creatine (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "creatine",
    imagePath: "/aditya chemicals images/Magnesium/product card/Magnesium Creatine Chelate.png" // Fallback
  },

  // 6. Chelated Minerals - Iron
  {
    name: "Ferrous Asparto Glycinate",
    slug: "ferrous-asparto-glycinate",
    casNumber: "404-84-4",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Ferrous Asparto Glycinate.png"
  },
  {
    name: "Ferrous L-Pidolate",
    slug: "ferrous-l-pidolate",
    casNumber: "113479-54-4",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png" // Fallback
  },
  {
    name: "Ferrous Bis Glycinate",
    slug: "ferrous-bis-glycinate-ih",
    casNumber: "20150-34-9",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png"
  },
  {
    name: "Ferrous Lactate",
    slug: "ferrous-lactate",
    casNumber: "5905-52-2",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Ferrous Lactate.png"
  },
  {
    name: "Ferrous Gluconate",
    slug: "ferrous-gluconate",
    casNumber: "299-29-6",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Ferrous Bis Glycinate.png" // Fallback
  },
  {
    name: "Sodium Ferric EDTA",
    slug: "sodium-ferric-edta",
    casNumber: "15708-41-5",
    categoryTag: "Iron (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "ferrous",
    imagePath: "/aditya chemicals images/Ferrous/product cards/Sodium Ferric EDTA.png"
  },

  // 7. Chelated Minerals - Calcium
  {
    name: "Calcium Aspartate",
    slug: "calcium-aspartate",
    casNumber: "10389-09-0",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Aspartate.png"
  },
  {
    name: "Calcium L-Pidolate",
    slug: "calcium-l-pidolate",
    casNumber: "31377-05-6",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Bis Glycinate.png" // Fallback
  },
  {
    name: "Calcium Bis Glycinate",
    slug: "calcium-bis-glycinate",
    casNumber: "35947-07-0",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Bis Glycinate.png"
  },
  {
    name: "Calcium Lactate Gluconate",
    slug: "calcium-lactate-gluconate-ih",
    casNumber: "11116-97-5",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Lactate Gluconate.png"
  },
  {
    name: "Calcium Citrate",
    slug: "calcium-citrate",
    casNumber: "813-94-5",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Citrate.png"
  },
  {
    name: "Calcium Malate",
    slug: "calcium-malate",
    casNumber: "17482-42-7",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Malate.png"
  },
  {
    name: "Calcium Citrate Malate",
    slug: "calcium-citrate-malate",
    casNumber: "142606-53-9",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Citrate Malate.png"
  },
  {
    name: "Calcium Orotate",
    slug: "calcium-orotate-2",
    casNumber: "22454-86-0",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Orotate.png"
  },
  {
    name: "Calcium Glycerophosphate",
    slug: "calcium-glycerophosphate",
    casNumber: "27214-00-2",
    categoryTag: "Calcium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "calcium",
    imagePath: "/aditya chemicals images/Calcium/product card/Calcium Bis Glycinate.png" // Fallback
  },

  // 8. Chelated Minerals - Zinc
  {
    name: "Zinc Bis Glycinate",
    slug: "zinc-bis-glycinate",
    casNumber: "14281-83-5",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png"
  },
  {
    name: "Zinc L-Pidolate",
    slug: "zinc-l-pidolate",
    casNumber: "15454-75-8",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png" // Fallback
  },
  {
    name: "Zinc Citrate",
    slug: "zinc-citrate",
    casNumber: "546-46-3",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Citrate.png"
  },
  {
    name: "Zinc Lactate",
    slug: "zinc-lactate",
    casNumber: "16039-53-5",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Lactate.png"
  },
  {
    name: "Zinc Gluconate",
    slug: "zinc-gluconate",
    casNumber: "4468-02-4",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Gluconate.png"
  },
  {
    name: "Zinc Monomethionine",
    slug: "zinc-monomethionine",
    casNumber: "56329-42-1",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png" // Fallback
  },
  {
    name: "Zinc L-Carnosine",
    slug: "zinc-l-carnosine",
    casNumber: "107667-60-7",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png" // Fallback
  },
  {
    name: "Zinc Orotate",
    slug: "zinc-orotate",
    casNumber: "60388-02-5",
    categoryTag: "Zinc (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "zinc",
    imagePath: "/aditya chemicals images/Zinc/product card/Zinc Bis Glycinate.png" // Fallback
  },

  // 9. Chelated Minerals - Potassium
  {
    name: "Potassium Bis Glycinate",
    slug: "potassium-bis-glycinate",
    casNumber: "15708-41-6",
    categoryTag: "Potassium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "potassium",
    imagePath: "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png" // Fallback
  },
  {
    name: "Potassium Magnesium Citrate",
    slug: "potassium-magnesium-citrate",
    casNumber: "137590-34-2",
    categoryTag: "Potassium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "potassium",
    imagePath: "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png"
  },
  {
    name: "Potassium Citrate",
    slug: "potassium-citrate",
    casNumber: "6100-05-6",
    categoryTag: "Potassium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "potassium",
    imagePath: "/aditya chemicals images/Potassium/product card/Potassium Magnesium Citrate.png" // Fallback
  },
  {
    name: "Potassium Gluconate",
    slug: "potassium-gluconate",
    casNumber: "299-27-4",
    categoryTag: "Potassium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "potassium",
    imagePath: "/aditya chemicals images/Potassium/product card/Potassium Gluconate.png"
  },
  {
    name: "Potassium Magnesium Aspartate",
    slug: "potassium-magnesium-aspartate-2",
    casNumber: "67528-13-6",
    categoryTag: "Potassium (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "potassium",
    imagePath: "/aditya chemicals images/Potassium/product card/Potassium Magnesium Aspartate.png"
  },

  // 10. Chelated Minerals - Copper
  {
    name: "Copper Bis Glycinate",
    slug: "copper-bis-glycinate",
    casNumber: "13479-54-4",
    categoryTag: "Copper (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "copper",
    imagePath: "/aditya chemicals images/Copper/product card/Copper Bis Glycinate.png"
  },
  {
    name: "Copper Gluconate",
    slug: "copper-gluconate",
    casNumber: "527-09-3",
    categoryTag: "Copper (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "copper",
    imagePath: "/aditya chemicals images/Copper/product card/Copper Gluconate.png"
  },

  // 11. Chelated Minerals - Manganese
  {
    name: "Manganese Bis Glycinate",
    slug: "manganese-bis-glycinate",
    casNumber: "14281-77-7",
    categoryTag: "Manganese (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "manganese",
    imagePath: "/aditya chemicals images/Manganese/product card/Manganese Bis Glycinate.png"
  },
  {
    name: "Manganese Gluconate",
    slug: "manganese-gluconate",
    casNumber: "6485-39-8",
    categoryTag: "Manganese (Chelated Minerals)",
    parentCategorySlug: "minerals",
    subCategorySlug: "manganese",
    imagePath: "/aditya chemicals images/Manganese/product card/Manganese Gluconate.png"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return productCategories.find(c => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.parentCategorySlug === categorySlug || p.subCategorySlug === categorySlug);
}