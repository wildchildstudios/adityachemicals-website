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

            {/* About Box / Compliance Note */}
            {product.description ? (
              <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-surface-container-highest/60 text-on-surface-variant text-sm leading-relaxed space-y-2">
                <h3 className="font-bold text-deep-navy">About {product.name}</h3>
                <p>{product.description}</p>
              </div>
            ) : (
              <div className="bg-surface-container-low/50 p-6 rounded-2xl border border-surface-container-highest/60 text-on-surface-variant text-sm leading-relaxed space-y-2">
                <h3 className="font-bold text-deep-navy">Quality & Compliance</h3>
                <p>
                  This high-purity compound is manufactured and packaged in a GMP-certified facility under strict quality controls. Batch-specific Certificates of Analysis (COA), safety data sheets (MSDS), and custom granularity documentation are available upon request.
                </p>
              </div>
            )}

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

        {/* Detailed Product Copy Section */}
        {(product.features || product.applications || product.details || product.specifications) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            
            {/* Left Column: Key Features, Applications */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Key Features List */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                    Key Features & Functional Benefits
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => {
                      const parts = feature.split(': ', 2);
                      return (
                        <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5 select-none">
                            check_circle
                          </span>
                          <span>
                            {parts.length === 2 ? (
                              <>
                                <strong className="text-deep-navy font-semibold">{parts[0]}:</strong> {parts[1]}
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

              {/* Applications List */}
              {product.applications && product.applications.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                    Target Applications
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.applications.map((app, idx) => {
                      const parts = app.split(': ', 2);
                      return (
                        <div key={idx} className="bg-white p-5 rounded-2xl border border-surface-container-highest shadow-sm hover:shadow transition-shadow duration-300 space-y-2 flex flex-col justify-start">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl select-none">
                              manufacturing
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

            {/* Right Column: Properties & Specifications Tables */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Product Details Table */}
              {product.details && (
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-container-highest space-y-6">
                  <h3 className="text-lg font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                    Chemical Properties
                  </h3>
                  <table className="w-full text-xs text-left border-collapse">
                    <tbody>
                      {product.details.formula && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase w-[40%]">Formula</td>
                          <td className="py-3 text-on-surface-variant font-mono">{product.details.formula}</td>
                        </tr>
                      )}
                      {product.details.weight && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase">Mol. Weight</td>
                          <td className="py-3 text-on-surface-variant">{product.details.weight}</td>
                        </tr>
                      )}
                      {product.details.shelfLife && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase">Shelf Life</td>
                          <td className="py-3 text-on-surface-variant">{product.details.shelfLife}</td>
                        </tr>
                      )}
                      {product.details.grade && (
                        <tr>
                          <td className="py-3 font-semibold text-deep-navy uppercase">Available Grades</td>
                          <td className="py-3 text-on-surface-variant">{product.details.grade}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Technical Specifications Table */}
              {product.specifications && (
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-surface-container-highest space-y-6">
                  <h3 className="text-lg font-bold text-deep-navy border-b border-surface-container-highest pb-2 select-none uppercase tracking-wider">
                    Technical Specifications
                  </h3>
                  <table className="w-full text-xs text-left border-collapse">
                    <tbody>
                      {product.specifications.iupacName && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase w-[40%]">IUPAC Name</td>
                          <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.iupacName}</td>
                        </tr>
                      )}
                      {product.specifications.solubility && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase">Solubility</td>
                          <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.solubility}</td>
                        </tr>
                      )}
                      {product.specifications.physicalForm && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase">Physical Form</td>
                          <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.physicalForm}</td>
                        </tr>
                      )}
                      {product.specifications.assay && (
                        <tr className="border-b border-surface-container-highest/60">
                          <td className="py-3 font-semibold text-deep-navy uppercase">Standard Assay</td>
                          <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.assay}</td>
                        </tr>
                      )}
                      {product.specifications.storage && (
                        <tr>
                          <td className="py-3 font-semibold text-deep-navy uppercase">Storage</td>
                          <td className="py-3 text-on-surface-variant leading-relaxed">{product.specifications.storage}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </>
  );
}
