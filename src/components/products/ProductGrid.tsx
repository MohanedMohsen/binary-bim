import { cn } from '@/lib/utils';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-[#263449] bg-[#172033] py-20 text-center">
        <p className="text-slate-400">No products found.</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
