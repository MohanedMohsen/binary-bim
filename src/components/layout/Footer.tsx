'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[#263449] bg-[#111827]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-semibold text-slate-100">
            Binary <span className="text-blue-400">BIM</span>
          </p>
          <p className="mt-2 text-sm text-slate-400">{t('brand.tagline')}</p>
          <p className="mt-3 max-w-xs text-sm text-slate-500 leading-relaxed">
            {t('footer.description')}
          </p>
        </div>

        <div className="space-y-2.5 text-sm">
          <p className="font-semibold text-slate-200">{t('footer.company')}</p>
          <Link
            className="block text-slate-400 hover:text-blue-400 transition-colors"
            href="/products"
          >
            {t('nav.products')}
          </Link>
          <Link
            className="block text-slate-400 hover:text-blue-400 transition-colors"
            href="/about"
          >
            {t('nav.about')}
          </Link>
          <Link
            className="block text-slate-400 hover:text-blue-400 transition-colors"
            href="/contact"
          >
            {t('nav.contact')}
          </Link>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-slate-200">{t('contact.direct')}</p>
          <a
            href="mailto:mohanedelamghraby6@gmail.com"
            className="mt-2 block break-all text-blue-400 hover:text-blue-300 transition-colors"
          >
            mohanedelamghraby6@gmail.com
          </a>
          <div className="mt-5 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="border-t border-[#263449] px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Binary BIM. {t('footer.rights')}</p>
          <p className="text-slate-600">Built for production AEC teams</p>
        </div>
      </div>
    </footer>
  );
}
