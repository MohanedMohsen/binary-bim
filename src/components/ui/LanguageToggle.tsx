'use client';

import { Globe } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  const toggle = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${locale === 'en' ? 'Arabic' : 'English'}`}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-slate-400',
        'hover:bg-slate-800 hover:text-slate-200 transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
        className
      )}
    >
      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{locale === 'en' ? 'العربية' : 'EN'}</span>
    </button>
  );
}
