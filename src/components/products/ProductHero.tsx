import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { getPlatformLabel } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductHeroProps {
  product: Product;
}

const platformBadgeVariant = (platform: string) => {
  if (platform === 'revit') return 'blue' as const;
  if (platform === 'autocad') return 'cyan' as const;
  return 'green' as const;
};

export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] pb-20 pt-28 sm:pt-32">
      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-500" role="list">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/products" className="hover:text-slate-300 transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-300" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className={product.image ? 'grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]' : 'max-w-3xl'}>
          <div>
            <Badge variant={platformBadgeVariant(product.platform)}>
              {getPlatformLabel(product.platform)}
            </Badge>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-300">
              {product.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {product.status === 'available' ? (
              <>
                <Button asChild size="lg" variant="primary" className="w-full sm:w-auto justify-center">
                  <Link href="/contact">
                    Request License
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto justify-center">
                  <Link href="/products">Back to Products</Link>
                </Button>
              </>
            ) : (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto justify-center">
                <Link href="/contact">Contact for Early Access</Link>
              </Button>
            )}
            </div>
          </div>

          {product.image && (
            <div className="relative aspect-[16/10] rounded-2xl border border-[#263449] bg-[#111827] p-3 shadow-xl">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="rounded-xl object-contain p-3"
                fill
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
