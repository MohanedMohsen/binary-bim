import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const platforms = [
  {
    id: 'revit',
    name: 'Revit Add-ins',
    description:
      'Sheet management, room data, element numbering, and more. Automation tools that work directly inside Autodesk Revit.',
    href: '/products/revit',
    accent: 'border-blue-800/50 hover:border-blue-600/60',
    dot: 'bg-blue-500',
    label: 'Autodesk Revit',
    labelColor: 'text-blue-400',
  },
  {
    id: 'autocad',
    name: 'AutoCAD Plugins',
    description:
      'Layer management, drawing standards, and productivity tools built for AutoCAD workflows in architecture and engineering.',
    href: '/products/autocad',
    accent: 'border-cyan-800/50 hover:border-cyan-600/60',
    dot: 'bg-cyan-500',
    label: 'Autodesk AutoCAD',
    labelColor: 'text-cyan-400',
  },
];

export function PlatformsSection() {
  return (
    <section className="py-20 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Platforms"
          title="Two Platforms, One Ecosystem"
          description="Binary BIM tools are available for both Autodesk Revit and AutoCAD — built to the same standard of quality and precision."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {platforms.map((platform) => (
            <article
              key={platform.id}
              className={`group relative rounded-2xl border bg-[#172033] p-8 transition-all duration-200 ${platform.accent}`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`h-2.5 w-2.5 rounded-full ${platform.dot}`} aria-hidden="true" />
                <span className={`text-xs font-semibold uppercase tracking-widest ${platform.labelColor}`}>
                  {platform.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                {platform.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {platform.description}
              </p>
              <Link
                href={platform.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline"
              >
                Browse {platform.name}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
