'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import { useI18n } from '@/lib/i18n';

export function ProductCatalog() {
  const { t } = useI18n();

  return (
    <main className="bg-[#0B1120] pt-24 sm:pt-32">
      {/* Catalog Header */}
      <section className="relative overflow-hidden px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="catalog-orbit" />
        <div className="relative mx-auto max-w-7xl">
          <p className="eyebrow">{t('ux.products.kicker')}</p>
          <h1 className="display-title mt-4 sm:mt-5 max-w-4xl">
            {t('ux.products.title')}
          </h1>
          <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
            {t('ux.products.body')}
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="border-t border-[#263449] px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {products.map((item, index) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="product-rail group grid gap-6 sm:gap-8 py-8 md:grid-cols-[2.5rem_minmax(0,1.2fr)_minmax(0,1fr)] lg:grid-cols-[3.5rem_minmax(0,1.2fr)_minmax(0,1fr)] md:items-center"
            >
              <span className="font-mono text-xs font-semibold text-cyan-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-blue-400">
                  {item.eyebrow}
                </p>
                <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-100">
                  {item.name}
                </h2>
                <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
                  {item.summary}
                </p>
                <span className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                  {t('ux.open')}{' '}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </span>
              </div>
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#263449] bg-[#111827]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  src={item.image}
                  alt={`${item.name} workspace`}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
