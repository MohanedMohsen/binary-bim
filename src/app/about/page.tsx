import { SectionHeader } from '@/components/ui/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { PromoVideo } from '@/components/sections/PromoVideo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Binary BIM — Where BIM meets AUTOMATION',
  description:
    'Binary BIM develops specialized automation tools and plugins for Autodesk Revit and AutoCAD to solve real-world AEC bottlenecks.',
  openGraph: {
    title: 'About Binary BIM — Where BIM meets AUTOMATION',
    description:
      'Binary BIM develops specialized automation tools and plugins for Autodesk Revit and AutoCAD to solve real-world AEC bottlenecks.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* Header */}
      <section className="bg-[#0B1120] pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About Binary BIM"
            title="Where BIM meets AUTOMATION"
            description="We build purpose-driven software tools for architects, engineers, and BIM specialists who need reliable, scalable automation inside their primary design applications."
            align="left"
          />
        </div>
      </section>

      <PromoVideo />

      {/* Mission & Vision */}
      <section className="bg-[#111827] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#263449] bg-[#172033] p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Our Purpose
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-100">
                Eliminating Manual Friction in AEC Workflows
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Architectural and engineering professionals spend a disproportionate amount of time on repetitive data entry, sheet numbering, room data coordination, and drawing organization.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Binary BIM focuses on creating lean, high-performance add-ins that run directly within Autodesk Revit and AutoCAD to automate these tasks with consistency and speed.
              </p>
            </div>

            <div className="rounded-2xl border border-[#263449] bg-[#172033] p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Engineering Approach
              </span>
              <h2 className="mt-3 text-2xl font-bold text-slate-100">
                Practical, Standards-Compliant Software
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Our software tools are developed with a deep understanding of industry standards, transaction safety, and native API performance. We build software that integrates seamlessly into everyday production without disrupting existing templates or workflows.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-400">
                Every tool is engineered to support native parameters, standard undo actions, and multi-version compatibility across industry-standard CAD and BIM platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-[#0B1120] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Principles"
            title="How We Build"
            description="Guided by practical engineering needs, not software industry trends."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Direct Integration
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Native add-ins running inside Autodesk Revit and AutoCAD. No clunky external exporters or fragile third-party bridges.
              </p>
            </div>

            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Data Integrity
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Built-in validations and transaction checkpoints ensure that automated operations never corrupt project models or drawings.
              </p>
            </div>

            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Clear ROI
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Tools that turn hours of tedious, error-prone manual clicking into rapid, repeatable actions executed in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to discuss your AEC workflow needs?"
        description="Get in touch with Binary BIM to request licenses or explore custom add-in development."
        primaryLabel="Contact Binary BIM"
        primaryHref="/contact"
        secondaryLabel="View Our Products"
        secondaryHref="/products"
      />
    </main>
  );
}
