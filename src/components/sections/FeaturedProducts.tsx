import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

export function FeaturedProducts() {
  const featured = products.filter((p) => p.status === 'available').slice(0, 3);

  return (
    <section className="bg-[#0B1120] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeader
            eyebrow="Products"
            title="AEC Software Tools"
            description="Purpose-built add-ins and plugins for Autodesk Revit and AutoCAD."
            align="left"
          />
          <Link
            href="/products"
            className="inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            View all products
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
