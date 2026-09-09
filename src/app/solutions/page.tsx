import { SectionHeader } from '@/components/ui/SectionHeader';
import { SolutionCard } from '@/components/solutions/SolutionCard';
import { CTASection } from '@/components/sections/CTASection';
import { solutions } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AEC Solutions — Binary BIM',
  description:
    'Tailored BIM automation solutions for Architects, Engineers, BIM Managers, and AEC Companies.',
  openGraph: {
    title: 'AEC Solutions — Binary BIM',
    description:
      'Tailored BIM automation solutions for Architects, Engineers, BIM Managers, and AEC Companies.',
  },
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120]">
      <section className="pt-24 pb-16 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Solutions"
            title="Engineered for AEC Roles & Workflows"
            description="Whether coordinating multi-disciplinary BIM models or managing drawing sheet sets, Binary BIM helps AEC teams eliminate repetitive manual work."
            align="left"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Integration"
            title="Built to Fit Real Project Cycles"
            description="Designed for production environments where speed, precision, and standards compliance are paramount."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                1. Project Setup & Standards
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Establish project sheet lists, element numbering logic, and CAD layer hierarchies before drafting begins.
              </p>
            </div>

            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                2. Design & Documentation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Execute batch modifications across hundreds of sheets, rooms, or layers with single-click automation.
              </p>
            </div>

            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                3. Quality Audit & Delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Audit element numbers, room finishes, and layer consistency to ensure error-free submissions to clients and contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Transform your team's AEC productivity"
        description="Speak with our software engineers about licensing Binary BIM tools for your team."
        primaryLabel="Request a License"
        primaryHref="/contact"
        secondaryLabel="Explore Products"
        secondaryHref="/products"
      />
    </main>
  );
}
