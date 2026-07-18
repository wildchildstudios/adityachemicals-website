import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollBackground from "@/components/ScrollBackground";
import { getCategoryBySlug, getProductBySlug, products } from "@/data/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const compliance = product.details?.grade ? ` Compliant with ${product.details.grade}` : "";

  return {
    title: `${product.name} (CAS ${product.casNumber}) Bulk Supplier & Manufacturer`,
    description: `Buy high-purity ${product.name} (CAS Registry No. ${product.casNumber}) in bulk.${compliance} GMP-certified manufacturing, reliable global shipping to USA, Europe, UK, and Asia.`,
    keywords: `${product.name}, CAS ${product.casNumber}, bulk ${product.name}, buy ${product.name}, ${product.name} manufacturer, ${product.name} supplier, USP grade ${product.name}, BP grade ${product.name}`,
  };
}

// Crisp Chemical Structure Image for Calcium Glycerophosphate
function CalciumGlycerophosphateStructure() {
  return (
    <div className="flex flex-col items-center justify-center p-2 bg-white border border-surface-container-highest rounded-2xl h-full min-h-[220px]">
      <div className="relative w-full h-[180px] max-w-[340px]">
        <Image
          src="/aditya chemicals images/Calcium/product card/calcium-glycerophosphate-structure.jpg"
          alt="Calcium Glycerophosphate Chemical Structure & Formula"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

// Fallback Molecular Art SVG for other products
function GenericMolecularStructure({ formula }: { formula?: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-surface-container-highest rounded-2xl h-full min-h-[220px]">
      <svg viewBox="0 0 200 120" className="w-28 h-auto opacity-75" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="16" fill="#015095" opacity="0.8" />
        <circle cx="100" cy="35" r="12" fill="#3B82F6" opacity="0.8" />
        <circle cx="150" cy="60" r="16" fill="#10B981" opacity="0.8" />
        <circle cx="100" cy="85" r="14" fill="#F59E0B" opacity="0.8" />
        <line x1="50" y1="60" x2="100" y2="35" stroke="#64748B" strokeWidth="2" />
        <line x1="100" y1="35" x2="150" y2="60" stroke="#64748B" strokeWidth="2" />
        <line x1="150" y1="60" x2="100" y2="85" stroke="#64748B" strokeWidth="2" />
        <line x1="100" y1="85" x2="50" y2="60" stroke="#64748B" strokeWidth="2" />
      </svg>
      <span className="text-xs font-mono font-bold text-deep-navy mt-4 select-none">
        {formula || "Molecular Structure"}
      </span>
    </div>
  );
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const parentCat = getCategoryBySlug(product.parentCategorySlug);
  const subCat = product.subCategorySlug ? getCategoryBySlug(product.subCategorySlug) : null;

  // Build chemical-specific JSON-LD Product schema
  const productSchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://www.adityachemicals.com${product.imagePath}`,
    "description": product.description || `High-purity industrial chemical compound ${product.name}. CAS Number: ${product.casNumber}. Category: ${product.categoryTag}.`,
    "category": product.categoryTag,
    "mpn": product.casNumber,
    "brand": {
      "@type": "Brand",
      "name": "Aditya Chemicals"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "Contact for Pricing",
      "offerCount": "1",
      "seller": {
        "@type": "Organization",
        "name": "Aditya Chemicals"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "CAS Registry Number",
        "value": product.casNumber
      }
    ]
  };

  if (product.details?.formula) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Chemical Formula",
      "value": product.details.formula
    });
  }
  if (product.details?.weight) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Molecular Weight",
      "value": product.details.weight
    });
  }
  if (product.details?.grade) {
    productSchema.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Grades",
      "value": product.details.grade
    });
  }

  return (
    <>
      <ScrollBackground />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-12">

        {/* Top Header Row: Breadcrumbs */}
        <div className="border-b border-surface-container-highest pb-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant select-none">
            <Link href="/" className="hover:text-primary transition-colors font-medium">Home</Link>
            <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
            <Link href="/products" className="hover:text-primary transition-colors font-medium">Products</Link>
            <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
            {parentCat && (
              <Link href={`/product-category/${parentCat.slug}`} className="hover:text-primary transition-colors font-medium">
                {parentCat.name}
              </Link>
            )}
            {subCat && (
              <>
                <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
                <Link href={`/product-category/${subCat.slug}`} className="hover:text-primary transition-colors font-medium">
                  {subCat.name}
                </Link>
              </>
            )}
            <span className="material-symbols-outlined text-[10px] md:text-xs">chevron_right</span>
            <span className="text-on-surface font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Main Header / Intro Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro Description & USP Badge Lists */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold select-none uppercase tracking-wider">
                {product.categoryTag}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-deep-navy tracking-tight leading-tight uppercase font-headline-md">
                {product.name}
              </h1>
              {product.slug === "calcium-glycerophosphate" && (
                <p className="text-lg md:text-xl font-semibold text-primary italic">
                  Highly Bioavailable Calcium & Phosphorus for Bone & Dental Health
                </p>
              )}
            </div>

            <p className="text-on-surface-variant text-base leading-relaxed">
              {product.description || `Aditya Chemicals offers high-purity ${product.name}, manufactured to consistent quality standards supporting pharmaceutical, nutraceutical, dietary, and commercial applications worldwide. Our state-of-the-art facilities ensure dependable mineral delivery, purity assurance, and strict batch-to-batch compliance.`}
            </p>

            {/* USP Icon Cards Row (Clean SVGs instead of font characters) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              <div className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container-highest text-center flex flex-col items-center justify-center space-y-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M8 11.5c.5-1 1.5-1.5 2.5-1.5s2 .5 2.5 1.5M11 15h2" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-deep-navy leading-snug">Bone & Dental Support</span>
              </div>
              <div className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container-highest text-center flex flex-col items-center justify-center space-y-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-deep-navy leading-snug">High Bioavailability</span>
              </div>
              <div className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container-highest text-center flex flex-col items-center justify-center space-y-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-deep-navy leading-snug">Gentle on Stomach</span>
              </div>
              <div className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container-highest text-center flex flex-col items-center justify-center space-y-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 8a11 11 0 0 1-9 10Z" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-deep-navy leading-snug">Clean Label Friendly</span>
              </div>
              <div className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container-highest text-center flex flex-col items-center justify-center space-y-2">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <span className="text-[10px] md:text-xs font-bold text-deep-navy leading-snug">Easy to Formulate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Image/Mockup */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] bg-white rounded-3xl overflow-hidden border border-surface-container-highest shadow-sm p-4 flex items-center justify-center group hover:shadow transition-shadow duration-300">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-contain p-6 transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Chemical Structure & Identity Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Chemical Structure Card (Hidden for calcium-glycerophosphate to avoid duplication) */}
          {product.slug !== "calcium-glycerophosphate" && (
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 md:p-8 border border-surface-container-highest shadow-sm space-y-4 flex flex-col justify-between">
              <h3 className="text-lg font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                Chemical Structure
              </h3>
              <GenericMolecularStructure formula={product.details?.formula} />
            </div>
          )}

          {/* Chemical Identity Card */}
          <div className={`${product.slug === "calcium-glycerophosphate" ? "lg:col-span-8 lg:col-start-3" : "lg:col-span-6"} bg-white rounded-3xl p-6 md:p-8 border border-surface-container-highest shadow-sm space-y-4 flex flex-col justify-between`}>
            <div>
              <h3 className="text-lg font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                Chemical Identity
              </h3>
              <table className="w-full text-xs md:text-sm text-left border-collapse mt-4">
                <tbody>
                  <tr className="border-b border-surface-container-highest/60">
                    <td className="py-3 font-semibold text-deep-navy uppercase w-[40%]">Product Name</td>
                    <td className="py-3 text-on-surface-variant font-bold">{product.name}</td>
                  </tr>
                  {product.details?.formula && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy uppercase">Molecular Formula</td>
                      <td className="py-3 text-on-surface-variant font-mono font-bold text-primary">{product.details.formula}</td>
                    </tr>
                  )}
                  {product.details?.weight && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy uppercase">Molecular Weight</td>
                      <td className="py-3 text-on-surface-variant font-medium">{product.details.weight}</td>
                    </tr>
                  )}
                  <tr className="border-b border-surface-container-highest/60">
                    <td className="py-3 font-semibold text-deep-navy uppercase">CAS Registry No.</td>
                    <td className="py-3 text-on-surface-variant font-mono font-bold">{product.casNumber}</td>
                  </tr>
                  {product.slug === "calcium-glycerophosphate" && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy uppercase">EC / EINECS No.</td>
                      <td className="py-3 text-on-surface-variant font-mono">248-328-5</td>
                    </tr>
                  )}
                  {product.details?.shelfLife && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy uppercase">Shelf Life</td>
                      <td className="py-3 text-on-surface-variant">{product.details.shelfLife}</td>
                    </tr>
                  )}
                  {product.details?.grade && (
                    <tr>
                      <td className="py-3 font-semibold text-deep-navy uppercase">Available Grade</td>
                      <td className="py-3 text-on-surface-variant font-semibold text-primary">{product.details.grade}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Action Quote button */}
            <div className="pt-4 border-t border-surface-container-highest/60">
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-vibrant-azure text-white rounded-xl font-button text-xs uppercase hover:scale-[0.99] transition-all duration-200 shadow-sm cursor-pointer font-bold tracking-wider text-center">
                  Request Quote / COA / Samples
                  <span className="material-symbols-outlined text-sm select-none">mail</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Technical Specs & Features Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Features Column */}
          {product.features && product.features.length > 0 && (
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                Key Features & Benefits
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => {
                  const parts = feature.split(': ', 2);
                  return (
                    <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5 select-none">
                        check_circle
                      </span>
                      <span>
                        {parts.length === 2 ? (
                          <>
                            <strong className="text-deep-navy font-bold">{parts[0]}:</strong> {parts[1]}
                          </>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Technical Specs Table Column */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-container-highest">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest font-bold text-deep-navy">
                    <th className="py-2.5 uppercase w-[40%]">Parameter</th>
                    <th className="py-2.5 uppercase">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications?.physicalForm && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Appearance</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.physicalForm}</td>
                    </tr>
                  )}
                  {product.specifications?.assay && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Standard Assay</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.assay}</td>
                    </tr>
                  )}
                  {product.slug === "calcium-glycerophosphate" && (
                    <>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Phosphorus Content</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">12.0% to 13.0% P</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Loss on Drying</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 12.0%</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">pH (1% Solution)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">6.0 – 8.5</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Heavy Metals (as Pb)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 10 ppm</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Arsenic (As)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 2 ppm</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Fluoride (F)</td>
                        <td className="py-3 text-on-surface-variant leading-relaxed">Maximum 50 ppm</td>
                      </tr>
                    </>
                  )}
                  {product.specifications?.solubility && (
                    <tr className="border-b border-surface-container-highest/60">
                      <td className="py-3 font-semibold text-deep-navy">Solubility</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.solubility}</td>
                    </tr>
                  )}
                  {product.specifications?.storage && (
                    <tr>
                      <td className="py-3 font-semibold text-deep-navy">Storage</td>
                      <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.storage}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Physical Properties & Target Applications Split Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Properties Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
              Physical & Chemical Properties
            </h2>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-container-highest">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-container-highest font-bold text-deep-navy">
                    <th className="py-2.5 uppercase w-[40%]">Property</th>
                    <th className="py-2.5 uppercase">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-container-highest/60">
                    <td className="py-3 font-semibold text-deep-navy">Physical Form</td>
                    <td className="py-3 text-on-surface-variant">{product.specifications?.physicalForm || "White powder"}</td>
                  </tr>
                  <tr className="border-b border-surface-container-highest/60">
                    <td className="py-3 font-semibold text-deep-navy">Odor</td>
                    <td className="py-3 text-on-surface-variant">Odorless</td>
                  </tr>
                  <tr className="border-b border-surface-container-highest/60">
                    <td className="py-3 font-semibold text-deep-navy">Taste</td>
                    <td className="py-3 text-on-surface-variant">Slightly saline / bland</td>
                  </tr>
                  {product.slug === "calcium-glycerophosphate" && (
                    <>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Melting Point</td>
                        <td className="py-3 text-on-surface-variant">Decomposes</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Bulk Density</td>
                        <td className="py-3 text-on-surface-variant">0.4 – 0.7 g/mL (approx.)</td>
                      </tr>
                      <tr className="border-b border-surface-container-highest/60">
                        <td className="py-3 font-semibold text-deep-navy">Particle Size</td>
                        <td className="py-3 text-on-surface-variant">90% through 100 mesh</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td className="py-3 font-semibold text-deep-navy">Solubility Info</td>
                    <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications?.solubility ? "Sparingly soluble in water, insoluble in ethanol" : "Available upon request"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications Column */}
          {product.applications && product.applications.length > 0 && (
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                Target Applications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.applications.map((app, idx) => {
                  const parts = app.split(': ', 2);

                  // Dynamically assign an icon for visual elegance
                  let appIcon = "manufacturing";
                  const lowerName = parts[0].toLowerCase();
                  if (lowerName.includes("supplement") || lowerName.includes("nutraceutical")) appIcon = "pill";
                  else if (lowerName.includes("sport") || lowerName.includes("nutrition")) appIcon = "fitness_center";
                  else if (lowerName.includes("pharmaceutical")) appIcon = "medical_services";
                  else if (lowerName.includes("food") || lowerName.includes("beverage")) appIcon = "restaurant";
                  else if (lowerName.includes("clinical") || lowerName.includes("medical")) appIcon = "clinical_notes";
                  else if (lowerName.includes("oral") || lowerName.includes("dental")) appIcon = "dentistry";
                  else if (lowerName.includes("bone") || lowerName.includes("skeletal")) appIcon = "bone";

                  return (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2 flex flex-col justify-start">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl select-none">
                          {appIcon}
                        </span>
                        <h3 className="font-bold text-deep-navy text-sm leading-snug">
                          {parts.length === 2 ? parts[0] : "Application Area"}
                        </h3>
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        {parts.length === 2 ? parts[1] : app}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Quality & Regulatory Compliance Banner */}
        <div className="bg-surface-container-low rounded-3xl p-8 border border-surface-container-highest flex flex-col items-center justify-center space-y-6 text-center shadow-inner mt-8">
          <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-deep-navy uppercase tracking-wider">
              Quality & Regulatory Compliance
            </h3>
            <p className="text-xs md:text-sm text-on-surface-variant max-w-3xl leading-relaxed">
              Manufactured under stringent quality control systems in compliance with BP/EP/USP/FCC standards. Each batch is strictly tested to ensure purity, potency, and safety for use in nutraceutical, pharmaceutical, and food formulations worldwide.
            </p>
          </div>
          {/* Compliance Badges Container */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-2">
            <div className="flex flex-col items-center space-y-1 select-none">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">GMP</div>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-1 select-none">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">ISO</div>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase">9001:2015</span>
            </div>
            <div className="flex flex-col items-center space-y-1 select-none">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">HALAL</div>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-1 select-none">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">KOSHER</div>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase">Certified</span>
            </div>
            <div className="flex flex-col items-center space-y-1 select-none">
              <div className="w-12 h-12 rounded-full bg-white border border-surface-container-highest flex items-center justify-center text-primary text-xs font-black shadow-sm">ISO</div>
              <span className="text-[9px] font-bold text-on-surface-variant uppercase">22000:2018</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
