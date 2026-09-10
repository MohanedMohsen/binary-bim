import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn, getPlatformColor, getPlatformLabel } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const platformColors = getPlatformColor(product.platform);
  const platformLabel = getPlatformLabel(product.platform);

  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-xl border border-[#263449] bg-[#172033]',
        'p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-800/60 hover:bg-[#1a2540]',
        className
      )}
    >
      {/* Platform badge */}
      <div className="mb-4 flex items-start justify-between">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
            platformColors
          )}
        >
          {platformLabel}
        </span>
        {product.status === 'coming-soon' && (
          <span className="inline-flex items-center rounded-full border border-slate-700/50 bg-slate-900/60 px-2.5 py-0.5 text-xs font-medium text-slate-500">
            Coming Soon
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-blue-300">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {product.tagline}
        </p>
      </div>

      {/* CTA */}
      {product.status === 'available' ? (
        <Link
          href={`/products/${product.slug}`}
          className={cn(
            'mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400',
            'hover:text-blue-300 transition-colors',
            'focus-visible:outline-none focus-visible:underline',
            'after:absolute after:inset-0' // full-card click target
          )}
        >
          View Details
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      ) : (
        <p className="mt-5 text-sm text-slate-600">
          Contact us for early access
        </p>
      )}
    </article>
  );
}
