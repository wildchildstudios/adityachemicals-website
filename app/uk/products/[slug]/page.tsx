import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductBySlug, products } from "@/data/products";
import ProductDetailView from "@/components/ProductDetailView";
import { getAlternates } from "@/utils/seo";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products
    .filter((p) => !!p.regionalContent)
    .map((prod) => ({
      slug: prod.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || !product.regionalContent) return {};

  const alternates = getAlternates(slug, 'uk', true);

  const name = product.name;
  const cas = product.casNumber;
  const keywords = [
    name,
    `CAS ${cas}`,
    `bulk ${name}`,
    `buy ${name} bulk`,
    `${name} manufacturer`,
    `${name} supplier`,
    `${name} factory`,
    `${name} exporter`,
    `${name} UK`,
    `UK ${name} supplier`,
    `GMP certified ${name} manufacturer UK`,
    `UK-REACH registered ${name} supplier`,
    `${name} chemical factory UK`,
    `${name} chemical industry UK`
  ].join(", ");

  if (slug === "dl-methionine-2") {
    return {
      title: "DL-Methionine (CAS 59-51-8) Bulk Supplier | UK – Aditya Chemicals",
      description: "Buy bulk DL-Methionine (CAS 59-51-8) in the UK. BP/FCC compliant. Manufactured under strict GMP-certified conditions with full UK-REACH documentation support.",
      keywords: "DL-Methionine manufacturer UK, DL-Methionine supplier UK, bulk DL-Methionine UK, buy DL-Methionine UK",
      alternates
    };
  }

  const compliance = product.details?.grade ? ` Compliant with ${product.details.grade}` : "";

  return {
    title: `${product.name} (CAS ${product.casNumber}) Manufacturer & Bulk Supplier | UK`,
    description: `Buy high-purity ${product.name} (CAS Registry No. ${product.casNumber}) in bulk in the UK.${compliance} GMP-certified manufacturing, reliable direct shipping with UK-REACH compliance.`,
    keywords,
    alternates
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product || !product.regionalContent) {
    notFound();
  }

  const parentCat = getCategoryBySlug(product.parentCategorySlug);
  const subCat = product.subCategorySlug ? getCategoryBySlug(product.subCategorySlug) : null;

  return (
    <ProductDetailView
      product={product}
      parentCat={parentCat}
      subCat={subCat}
      region="uk"
    />
  );
}
