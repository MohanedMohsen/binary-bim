import { products } from '@/data/products';
import { ProductCard } from './ProductCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface RelatedProductsProps {
  currentSlug: string;
}

export function RelatedProducts({ currentSlug }: RelatedProductsProps) {
  const relatedProducts = products.filter((product) => product.slug !== currentSlug);

  return (
    <section className="bg-[#111827] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="More tools"
          title="Explore More Binary BIM Tools"
          description="Purpose-built automation tools for recurring AEC workflows."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
