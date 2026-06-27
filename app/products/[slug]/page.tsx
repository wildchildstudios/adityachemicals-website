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
  return {
    title: `${product.name} (CAS ${product.casNumber}) | Aditya Chemicals`,
    description: `High-purity chemical compound ${product.name}. CAS Number: ${product.casNumber}. Category: ${product.categoryTag}.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const parentCat = getCategoryBySlug(product.parentCategorySlug);
  const subCat = product.subCategorySlug ? getCategoryBySlug(product.subCategorySlug) : null;

  return (
    <>
      <ScrollBackground />

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 space-y-12">
        {/* Breadcrumbs */}
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

        {/* Product Details Grid */}
        <div data-bg-color="#ffffff" className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-surface-container-highest grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[420px] bg-surface-container-low rounded-2xl overflow-hidden border border-glass-stroke shadow-md">
            <Image
              src={product.imagePath}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>

          {/* Right Column: Product Metadata */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold select-none uppercase tracking-wider">
                {product.categoryTag}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-deep-navy font-headline-md tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* CAS Card */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-container-highest flex items-center justify-between">
              <div>
                <span className="text-xs text-on-surface-variant font-label-caps uppercase select-none">CAS Number</span>
                <p className="text-xl md:text-2xl font-bold text-deep-navy mt-1 font-mono tracking-wide">{product.casNumber}</p>
              </div>
              <span className="material-symbols-outlined text-primary text-3xl select-none">
                fingerprint
              </span>
            </div>

            {/* Compliance Note */}
            <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-surface-container-highest/60 text-on-surface-variant text-sm leading-relaxed space-y-2">
              <h3 className="font-bold text-deep-navy">Quality & Compliance</h3>
              <p>
                This high-purity compound is manufactured and packaged in a GMP-certified facility under strict quality controls. Batch-specific Certificates of Analysis (COA), safety data sheets (MSDS), and custom granularity documentation are available upon request.
              </p>
            </div>

            {/* Inquire Action Button */}
            <div className="pt-4">
              <Link href={`/contact?product=${encodeURIComponent(product.name)}`}>
                <button className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-vibrant-azure text-white rounded-full font-button text-button uppercase hover:scale-[0.98] transition-all duration-250 shadow-lg cursor-pointer font-bold tracking-wider text-center">
                  Request Quote / COA / Samples
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
