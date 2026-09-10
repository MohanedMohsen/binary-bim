'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useI18n();

  const footerLinks = {
    [t('nav.products')]: [
      { label: t('nav.all_products'), href: '/products' },
      { label: t('nav.revit'), href: '/products/revit' },
      { label: t('nav.autocad'), href: '/products/autocad' },
    ],
    Company: [
      { label: t('nav.about'), href: '/about' },
      { label: t('nav.solutions'), href: '/solutions' },
      { label: t('nav.contact'), href: '/contact' },
    ],
  };

  return (
    <footer className="border-t border-[#263449] bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-950/20">
                <span className="text-sm font-bold text-white">B</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-100">
                Binary <span className="text-blue-400">BIM</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              {t('footer.description')}
            </p>
            <p className="mt-3 text-xs font-semibold text-blue-400 uppercase tracking-widest">
              {t('brand.tagline')}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {section}
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-slate-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#263449] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {year} Binary BIM. {t('footer.rights')}
          </p>
          <p className="text-xs text-slate-600">
            {t('footer.trademark')}
          </p>
        </div>
      </div>
    </footer>
  );
}
