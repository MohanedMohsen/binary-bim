import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Step } from '@/types';

interface HowItWorksProps {
  steps: Step[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple to use"
          description="Designed to fit into your existing Revit or AutoCAD workflow with minimal setup."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Step number */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-blue-800/40 bg-blue-950/40">
                <span className="text-sm font-bold text-blue-400">
                  {step.number}
                </span>
              </div>

              <h3 className="text-base font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
