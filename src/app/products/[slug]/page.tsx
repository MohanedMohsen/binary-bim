import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductBySlug } from '@/data/products';
import { ProductHero } from '@/components/products/ProductHero';
import { ProductValueSection } from '@/components/products/ProductValueSection';
import { ProductFeatures } from '@/components/products/ProductFeatures';
import { HowItWorks } from '@/components/products/HowItWorks';
import { CompatibilitySection } from '@/components/products/CompatibilitySection';
import { FAQSection } from '@/components/products/FAQSection';
import { RequestLicenseSection } from '@/components/products/RequestLicenseSection';
import { CTASection } from '@/components/sections/CTASection';
import { RelatedProducts } from '@/components/products/RelatedProducts';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category} | Binary BIM`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Binary BIM`,
      description: product.description,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <main className="bg-[#0B1120]">
      <ProductHero product={product} />
      <ProductValueSection product={product} />
      <ProductFeatures features={product.features} />
      <HowItWorks steps={product.howItWorks} />
      <CompatibilitySection compatibility={product.compatibility} />
      <RequestLicenseSection productName={product.name} productId={product.id} />
      <FAQSection faqs={product.faqs} />
      <CTASection
        title="Ready to streamline your workflow?"
        description="Explore how Binary BIM can simplify repetitive BIM tasks for your team."
        primaryLabel="Request a License"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
      <RelatedProducts currentSlug={product.slug} />
    </main>
  );
}
