import Image from "next/image";
import Link from "next/link";
import ScrollBackground from "@/components/ScrollBackground";
import { productCategories } from "@/data/products";

export const metadata = {
  title: "Products Hub | Aditya Chemicals",
  description: "Explore the main product lines of Aditya Chemicals: Amino Acids & Derivatives, Chelated Minerals, Vitamins & Derivatives, and Excipients.",
};

export default function ProductsHubPage() {
  // Only display the 4 top-level categories (which do not have a parentCategorySlug)
  const parentCategories = productCategories.filter(cat => !cat.parentCategorySlug);

  return (
    <>
      <ScrollBackground />

      {/* Hero Header */}
      <div data-bg-color="#faf8ff" className="py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-4 text-center md:text-left">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-label-caps uppercase select-none">
            Product Catalog
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-deep-navy tracking-tight mt-4">
            Our <span className="text-primary italic">Products</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Aditya Chemicals manufactures and supplies premium active pharmaceutical ingredients (APIs), bioavailable Chelated Minerals, stable vitamins, and high-performance excipients worldwide.
          </p>
        </div>
      </div>

      {/* Categories Bento Grid */}
      <div data-bg-color="#ffffff" className="bg-white py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
            Select Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-bento-gap">
            {parentCategories.map((category) => (
              <div
                key={category.slug}
                className="bg-white rounded-3xl border border-surface-container-highest shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[480px]"
              >
                {/* Visual Category Card Image Banner */}
                <div className="relative w-full h-[240px] bg-surface-container-low">
                  <Image
                    src={category.cardImagePath || category.bannerPath}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Details Section */}
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-deep-navy font-headline-md leading-snug">
                      {category.name}
                    </h3>
                    <p className="text-on-surface-variant font-body-md leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </div>
                  <div>
                    <Link href={`/product-category/${category.slug}`}>
                      <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-vibrant-azure text-white rounded-full font-button text-button uppercase hover:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer font-bold tracking-wider text-center">
                        Explore Category
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
