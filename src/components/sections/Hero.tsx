import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] sm:min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-[#0B1120] pt-[4.5rem]">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow — restrained */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Where BIM meets AUTOMATION
          </p>

          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl sm:leading-[1.08] lg:text-6xl xl:text-7xl">
            Professional Tools
            <br />
            <span className="text-blue-400">for the AEC Industry</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Binary BIM develops Revit Add-ins and AutoCAD Plugins that automate
            repetitive AEC workflows — so your team can focus on engineering,
            not data entry.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button asChild size="lg" variant="primary" className="w-full sm:w-auto justify-center">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto justify-center">
              <Link href="/contact">Request License</Link>
            </Button>
          </div>

          {/* Platform indicators */}
          <div className="mt-14 flex flex-wrap items-center gap-6">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-600">
              Built for
            </p>
            <div className="flex items-center gap-2 rounded-lg border border-[#263449] bg-[#172033] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-300">
                Autodesk Revit
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-[#263449] bg-[#172033] px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
              <span className="text-sm font-medium text-slate-300">
                Autodesk AutoCAD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
