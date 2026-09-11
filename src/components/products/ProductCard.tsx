import Link from 'next/link';
import Image from 'next/image';
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
        'group relative flex flex-col overflow-hidden rounded-xl border border-[#263449] bg-[#172033]',
        'transition-all duration-200 hover:-translate-y-1 hover:border-blue-800/60 hover:bg-[#1a2540]',
        className
      )}
    >
      {product.image && (
        <div className="relative aspect-[16/9] border-b border-[#263449] bg-[#111827] p-3">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="rounded-lg object-contain"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
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

        <div className="flex flex-1 flex-col">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-500">
            {product.category}
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-blue-300">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
            {product.tagline}
          </p>
        </div>

        {product.status === 'available' ? (
          <Link
            href={`/products/${product.slug}`}
            className={cn(
              'mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400',
              'transition-colors hover:text-blue-300',
              'focus-visible:outline-none focus-visible:underline',
              'after:absolute after:inset-0'
            )}
          >
            Explore Product
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        ) : (
          <p className="mt-5 text-sm text-slate-600">
            Contact us for early access
          </p>
        )}
      </div>
    </article>
  );
}
