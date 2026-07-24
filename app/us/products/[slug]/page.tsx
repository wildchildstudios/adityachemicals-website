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
  // Only pre-render the 8 products that have regional content
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

  const alternates = getAlternates(slug, 'us', true);

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
    `${name} USA`,
    `USA ${name} supplier`,
    `GMP certified ${name} manufacturer USA`,
    `FDA registered ${name} supplier`,
    `${name} chemical factory USA`,
    `${name} chemical industry USA`
  ].join(", ");

  if (slug === "dl-methionine-2") {
    return {
      title: "DL-Methionine (CAS 59-51-8) Bulk Supplier | USA Warehouse – Aditya Chemicals",
      description: "Buy bulk DL-Methionine (CAS 59-51-8) in the USA. USP/FCC compliant. Distributed locally from our Boca Raton, Florida warehouse with fast domestic logistics.",
      keywords: "DL-Methionine manufacturer USA, DL-Methionine supplier USA, bulk DL-Methionine USA, buy DL-Methionine USA",
      alternates
    };
  }

  const compliance = product.details?.grade ? ` Compliant with ${product.details.grade}` : "";

  return {
    title: `${product.name} (CAS ${product.casNumber}) Manufacturer & Bulk Supplier | USA`,
    description: `Buy high-purity ${product.name} (CAS Registry No. ${product.casNumber}) in bulk in the USA.${compliance} FDA-registered GMP supply, localized shipping from our Florida warehouse.`,
    keywords,
    alternates
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  // Safeguard: only render US path for products that have regional content
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
      region="us"
    />
  );
}
