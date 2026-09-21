'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-[#0B1120] px-4 pb-20 pt-24 sm:pt-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{t('about.kicker')}</p>
        <h1 className="mt-4 max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100">
          {t('about.title')}
        </h1>
        <p className="mt-6 sm:mt-7 max-w-3xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
          {t('about.body')}
        </p>

        <div className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <article
              key={n}
              className="rounded-xl border border-[#263449] bg-[#172033] p-6 sm:p-7 transition-colors hover:border-slate-700"
            >
              <h2 className="text-lg font-semibold text-slate-100">
                {t('about.principle' + n)}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {t('about.principle' + n + 'b')}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto text-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
          >
            {t('nav.request')}
          </Link>
        </div>
      </div>
    </main>
  );
}
