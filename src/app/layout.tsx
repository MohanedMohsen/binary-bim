import type { Metadata, Viewport } from 'next';
import { Inter, Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { I18nProvider } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
});

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://binarybim.com'),
  title: {
    default: 'Binary BIM — Where BIM meets AUTOMATION',
    template: '%s | Binary BIM',
  },
  description:
    'Binary BIM develops practical automation software for AEC professionals, with focused Revit and AutoCAD workflows.',
  keywords: [
    'BIM',
    'Revit automation',
    'AutoCAD automation',
    'AEC Automation',
    'Autodesk Revit',
    'Autodesk AutoCAD',
    'Binary BIM',
    'BIM Management',
    'AEC software',
  ],
  authors: [{ name: 'Binary BIM' }],
  creator: 'Binary BIM',
  publisher: 'Binary BIM',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://binarybim.com',
    siteName: 'Binary BIM',
    title: 'Binary BIM — Where BIM meets AUTOMATION',
    description:
      'Practical AEC automation software for Autodesk Revit and AutoCAD workflows.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binary BIM — Where BIM meets AUTOMATION',
    description:
      'Practical AEC automation software for Autodesk Revit and AutoCAD workflows.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${cairo.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-preference" strategy="beforeInteractive">
          {`try {
            var theme = localStorage.getItem('theme');
            document.documentElement.classList.toggle('dark', theme !== 'light');
          } catch (_) {}`}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white font-sans">
        <I18nProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
