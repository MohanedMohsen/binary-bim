'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { ProductGallery } from './ProductGallery';
import { useI18n } from '@/lib/i18n';

export function ProductDetail({ product }: { product: Product }) {
  const { t } = useI18n();

  return (
    <main className="bg-[#0B1120] pt-24 sm:pt-28">
      {/* Product Hero Header */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-16 md:py-20">
        <div className="detail-grid" />
        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t('ux.all')}
          </Link>

          <div className="mt-10 sm:mt-14 grid gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.75fr)] lg:items-end">
            <div>
              <p className="eyebrow">{product.eyebrow}</p>
              <h1 className="display-title mt-4 sm:mt-5">{product.name}</h1>
              <p className="mt-5 sm:mt-6 max-w-2xl text-lg sm:text-xl leading-7 sm:leading-8 text-slate-300">
                {t('ux.detail.lead')}
              </p>
            </div>
            <div className="border-s border-cyan-400/60 ps-4 sm:ps-6 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
              {t('ux.detail.body')}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Media Showcase */}
      <ProductGallery product={product} />

      {/* Workflow & Capabilities */}
      <section className="px-4 py-16 sm:py-20 md:py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{t('ux.workflow')}</p>
          <div className="mt-8 sm:mt-10 grid gap-px overflow-hidden rounded-xl sm:rounded-2xl border border-[#263449] bg-[#263449] sm:grid-cols-2 md:grid-cols-3">
            {product.capabilities.map((capability) => (
              <article key={capability.number} className="bg-[#0B1120] p-6 sm:p-8 md:p-9">
                <span className="font-mono text-xs font-semibold text-cyan-400">
                  {capability.number}
                </span>
                <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-100">
                  {capability.title}
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-400">
                  {capability.body}
                </p>
              </article>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-14 sm:mt-20 flex flex-col justify-between gap-6 border-t border-[#263449] pt-8 sm:pt-10 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">{t('ux.available')}</p>
              <h2 className="section-title mt-3 sm:mt-4">{t('ux.detail.cta')}</h2>
            </div>
            <Link
              href="/contact"
              className="primary-action w-full sm:w-auto text-center justify-center shrink-0"
            >
              {t('nav.request')}{' '}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
