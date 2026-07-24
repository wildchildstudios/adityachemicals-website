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
  return products.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const hasRegional = !!product.regionalContent;
  const alternates = getAlternates(slug, 'default', hasRegional);

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
    `${name} UK`,
    `${name} Europe`,
    `${name} supplier USA`,
    `${name} manufacturer UK`,
    `${name} exporter Europe`,
    `GMP certified ${name} manufacturer`,
    `FDA registered ${name} supplier`,
    `REACH compliant ${name} Europe`,
    `${name} chemical factory`,
    `${name} chemical industry`,
    `USA ${name} chemical factory`,
    `UK ${name} chemical factory`,
    `Europe ${name} chemical factory`,
    `USA ${name} chemical industry`,
    `UK ${name} chemical industry`,
    `Europe ${name} chemical industry`
  ].join(", ");

  if (slug === "dl-methionine-2") {
    return {
      title: "DL-Methionine (CAS 59-51-8) | Bulk Manufacturer & Global Supplier – Aditya Chemicals",
      description: "DL-Methionine (CAS 59-51-8) manufactured to BP/USP/FCC standards. GMP-certified bulk supply for animal feed, nutraceutical & pharma use. Fast export to the USA, UK & EU.",
      keywords: "DL-Methionine manufacturer, DL-Methionine supplier, bulk DL-Methionine, DL-Methionine CAS 59-51-8, DL-Methionine feed grade, buy DL-Methionine Europe/UK/USA",
      alternates
    };
  }

  const compliance = product.details?.grade ? ` Compliant with ${product.details.grade}` : "";

  return {
    title: `${product.name} (CAS ${product.casNumber}) Manufacturer & Bulk Supplier | USA, UK, Europe`,
    description: `Buy high-purity ${product.name} (CAS Registry No. ${product.casNumber}) in bulk.${compliance} GMP-certified manufacturing, reliable global shipping to USA, Europe, UK, and Asia.`,
    keywords,
    alternates
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
    <ProductDetailView
      product={product}
      parentCat={parentCat}
      subCat={subCat}
      region="default"
    />
  );
}
