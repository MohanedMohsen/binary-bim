'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback } from 'react';

export type Locale = 'en' | 'ar';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: 'ltr' | 'rtl';
  t: (key: string) => string;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.products': 'Products',
    'nav.all_products': 'All Products',
    'nav.revit': 'Revit Add-ins',
    'nav.autocad': 'AutoCAD Plugins',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.request_license': 'Request License',
    'brand.tagline': 'Where BIM meets AUTOMATION',
    'footer.description':
      'Professional software tools for the AEC industry. Revit Add-ins, AutoCAD Plugins, and BIM automation solutions.',
    'footer.rights': 'All rights reserved.',
    'footer.trademark':
      'Autodesk, Revit, and AutoCAD are registered trademarks of Autodesk, Inc.',
    'common.language': 'العربية',
  },
  ar: {
    'nav.products': 'المنتجات',
    'nav.all_products': 'جميع المنتجات',
    'nav.revit': 'إضافات ريفيت',
    'nav.autocad': 'ملحقات أوتوكاد',
    'nav.solutions': 'الحلول',
    'nav.about': 'عن الشركة',
    'nav.contact': 'اتصل بنا',
    'nav.request_license': 'طلب ترخيص',
    'brand.tagline': 'حيث يلتقي نمذجة معلومات البناء بالأتمتة',
    'footer.description':
      'برمجيات احترافية لقطاع الهندسة والبناء. إضافات ريفيت وملحقات أوتوكاد وحلول أتمتة BIM.',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.trademark':
      'أوتوديسك وريفيت وأوتوكاد هي علامات تجارية مسجلة لشركة Autodesk, Inc.',
    'common.language': 'English',
  },
};

function subscribeLocale(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('localechange', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('localechange', callback);
  };
}

function getLocaleSnapshot(): Locale {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('locale') as Locale | null;
  return saved === 'ar' ? 'ar' : 'en';
}

function getServerLocaleSnapshot(): Locale {
  return 'en';
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  dir: 'ltr',
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot
  );

  const setLocale = useCallback((newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    if (newLocale === 'ar') {
      document.documentElement.classList.add('font-cairo');
    } else {
      document.documentElement.classList.remove('font-cairo');
    }
    window.dispatchEvent(new Event('localechange'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[locale]?.[key] || translations.en[key] || key;
    },
    [locale]
  );

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, dir, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
