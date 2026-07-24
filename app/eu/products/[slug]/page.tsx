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

  const alternates = getAlternates(slug, 'eu', true);

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
    `${name} Europe`,
    `Europe ${name} supplier`,
    `GMP certified ${name} manufacturer Europe`,
    `REACH compliant ${name} Europe`,
    `${name} chemical factory Europe`,
    `${name} chemical industry Europe`
  ].join(", ");

  if (slug === "dl-methionine-2") {
    return {
      title: "DL-Methionine (CAS 59-51-8) Bulk Supplier | Europe – Aditya Chemicals",
      description: "Buy bulk DL-Methionine (CAS 59-51-8) in Europe. EP/FCC compliant. Manufactured under strict GMP-certified conditions with active REACH registration for EU distribution.",
      keywords: "DL-Methionine manufacturer Europe, DL-Methionine supplier Europe, bulk DL-Methionine Europe, buy DL-Methionine Europe",
      alternates
    };
  }

  const compliance = product.details?.grade ? ` Compliant with ${product.details.grade}` : "";

  return {
    title: `${product.name} (CAS ${product.casNumber}) Manufacturer & Bulk Supplier | Europe`,
    description: `Buy high-purity ${product.name} (CAS Registry No. ${product.casNumber}) in bulk in Europe.${compliance} GMP-certified manufacturing, reliable direct shipping with active EU REACH registration.`,
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
      region="eu"
    />
  );
}
