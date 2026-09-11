'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useI18n } from '@/lib/i18n';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { t } = useI18n();

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  const navLinks = [
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.solutions'), href: '/solutions' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-[#263449] bg-[#0B1120]/95 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-950/20">
            <span className="text-sm font-bold text-white">B</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            Binary <span className="text-blue-400">BIM</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                    pathname === item.href
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                  )}
                >
                  {item.label}
                </Link>
              </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild size="sm" variant="primary">
            <Link href="/contact">{t('nav.request_license')}</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1.5 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#263449] bg-[#0B1120]/98 backdrop-blur-md md:hidden"
        >
          <ul className="mx-4 pb-4 pt-2" role="list">
            {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-md px-3 py-3 text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-blue-400'
                        : 'text-slate-300'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
            ))}
            <li className="mt-4">
              <Button asChild size="md" variant="primary" className="w-full">
                <Link href="/contact">{t('nav.request_license')}</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
