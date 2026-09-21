'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { product } from '@/data/products';
import { useI18n } from '@/lib/i18n';

export default function HomePage() {
  const { t } = useI18n();
  const steps = [t('ux.step1'), t('ux.step2'), t('ux.step3')];

  return (
    <main className="overflow-hidden bg-[#0B1120]">
      {/* Hero Video Section */}
      <section className="video-landing relative grid min-h-[calc(100svh-4.5rem)] min-h-[30rem] sm:min-h-[36rem] md:min-h-[42rem] place-items-center overflow-hidden px-4 py-20 sm:py-28 md:py-32 text-center sm:px-6">
        <video
          className="video-landing__media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/binary-bim-promo.mp4" type="video/mp4" />
        </video>
        <div className="video-landing__veil" />
        <div className="video-landing__content relative z-10 mx-auto max-w-4xl px-2">
          <p className="eyebrow">{t('ux.hero.kicker')}</p>
          <h1 className="video-landing__title mt-4 sm:mt-5">{t('ux.hero.title')}</h1>
          <p className="mx-auto mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-200">
            {t('ux.hero.body')}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
            <Link
              href={`/products/${product.slug}`}
              className="primary-action w-full sm:w-auto text-center justify-center"
            >
              {t('ux.hero.cta')}{' '}
              <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="hero-quiet-action w-full sm:w-auto text-center justify-center"
            >
              {t('ux.hero.secondary')}
            </Link>
          </div>
        </div>
        <span className="video-landing__line" />
      </section>

      {/* Focus Section */}
      <section className="border-y border-[#263449] bg-[#111827] px-4 py-14 sm:py-16 md:py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 md:grid-cols-[auto_1fr] lg:grid-cols-[14rem_1fr] items-start">
          <p className="eyebrow md:pt-2">{t('ux.home.focus')}</p>
          <div>
            <h2 className="section-title">{t('ux.home.title')}</h2>
            <p className="mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
              {t('ux.home.body')}
            </p>
            <Link
              href={`/products/${product.slug}`}
              className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {t('ux.home.link')}{' '}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workflow Cadence Section */}
      <section className="px-4 py-16 sm:py-20 md:py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">{t('ux.cadence')}</p>
          <div className="mt-6 sm:mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {steps.map((item, idx) => (
              <div key={item} className="border-t border-[#263449] pt-5">
                <span className="font-mono text-xs font-semibold text-cyan-400">0{idx + 1}</span>
                <p className="mt-3 text-lg sm:text-xl font-medium leading-snug sm:leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
