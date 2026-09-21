'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    ['nav.products', '/products'],
    ['nav.about', '/about'],
    ['nav.contact', '/contact'],
  ] as const;

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#263449] bg-[#0B1120]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-slate-100 shrink-0 transition-opacity hover:opacity-90"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-blue-600 text-sm font-bold text-white shadow-sm">
            B
          </span>
          <span className="text-base tracking-tight">
            Binary <span className="text-blue-400">BIM</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map(([k, h]) => (
            <Link
              key={h}
              href={h}
              className="rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 transition-colors"
            >
              {t(k)}
            </Link>
          ))}
          <div className="mx-1 h-4 w-px bg-[#263449]" aria-hidden="true" />
          <LanguageToggle />
          <ThemeToggle />
          <Link
            className="ms-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            href="/contact"
          >
            {t('nav.request')}
          </Link>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex items-center gap-0.5 sm:gap-1 md:hidden shrink-0">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-slate-200 hover:bg-slate-800/80 active:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[#263449] bg-[#0B1120] px-4 py-4 md:hidden max-h-[calc(100svh-4.5rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-1">
            {links.map(([k, h]) => (
              <Link
                onClick={() => setOpen(false)}
                key={h}
                href={h}
                className="rounded-lg px-3.5 py-3 text-base font-medium text-slate-200 hover:bg-[#172033] hover:text-white transition-colors"
              >
                {t(k)}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                onClick={() => setOpen(false)}
                href="/contact"
                className="block w-full rounded-lg bg-blue-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 active:bg-blue-700 transition-colors"
              >
                {t('nav.request')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
