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
      <section className="video-landing relative flex flex-col items-center justify-center min-h-screen min-h-dvh overflow-hidden px-4 pt-24 pb-8 sm:px-6 md:py-28 text-center">
        {/* Video: Below buttons on mobile matching screenshot, Fullscreen Background on Desktop */}
        <div className="video-landing__frame relative order-2 mt-8 w-full max-w-2xl aspect-video rounded-t-xl sm:rounded-t-2xl border-t border-x border-[#263449] bg-[#07101e] shadow-[0_20px_50px_rgba(2,6,23,0.9)] overflow-hidden md:order-none md:mt-0 md:max-w-none md:aspect-auto md:rounded-none md:border-0 md:shadow-none md:absolute md:inset-0 md:h-full md:w-full">
          <video
            className="video-landing__media h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/binary-bim-promo.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Cinematic Veil Overlay on Desktop */}
        <div className="video-landing__veil hidden md:block pointer-events-none" />

        {/* Content */}
        <div className="video-landing__content relative z-10 mx-auto max-w-4xl px-2 w-full text-center order-1 md:order-none flex flex-col items-center justify-center">
          <p className="eyebrow">{t('ux.hero.kicker')}</p>
          <h1 className="video-landing__title mx-auto max-w-3xl mt-4 sm:mt-5 text-center">
            {t('ux.hero.title')}
          </h1>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-200 text-center">
            {t('ux.hero.body')}
          </p>
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
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

        {/* Bottom line on desktop */}
        <span className="video-landing__line hidden md:block" />
      </section>

      {/* Focus Section */}
      <section className="border-y border-[#263449] bg-[#111827] px-4 py-14 sm:py-16 md:py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <p className="eyebrow">{t('ux.home.focus')}</p>
            </div>
            <h2 className="section-title mt-3 sm:mt-4">{t('ux.home.title')}</h2>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">
              {t('ux.home.body')}
            </p>
            <Link
              href={`/products/${product.slug}`}
              className="mt-6 sm:mt-7 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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
          <div className="flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <p className="eyebrow">{t('ux.cadence')}</p>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {steps.map((item, idx) => (
              <div
                key={item}
                className="group relative rounded-xl sm:rounded-2xl border border-[#263449] bg-[#172033] p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/50 hover:shadow-xl"
              >
                {/* Integrated number & text */}
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="flex items-center justify-center font-mono text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-2.5 py-1 shadow-[0_0_12px_rgba(6,182,212,0.15)] group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.35)] transition-all">
                    0{idx + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 via-slate-700/20 to-transparent" />
                  <span className="h-2 w-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                </div>
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-200 group-hover:text-cyan-400 transition-colors">
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
