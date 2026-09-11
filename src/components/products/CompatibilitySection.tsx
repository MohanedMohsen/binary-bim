import { Monitor } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Compatibility } from '@/types';

interface CompatibilitySectionProps {
  compatibility: Compatibility;
}

export function CompatibilitySection({ compatibility }: CompatibilitySectionProps) {
  return (
    <section className="bg-[#111827] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Compatibility"
          title="Software context"
          description="The supplied product interface is shown in the following software context."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Software versions */}
          {compatibility.software.map((sw) => (
            <div
              key={sw.label}
              className="rounded-xl border border-[#263449] bg-[#172033] p-6"
            >
              <p className="mb-4 text-sm font-semibold text-slate-300">
                {sw.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {sw.versions.length > 0 ? sw.versions.map((v) => (
                  <span
                    key={v}
                    className="inline-flex items-center rounded-md border border-[#263449] bg-[#111827] px-3 py-1 text-xs font-medium text-slate-400"
                  >
                    {v}
                  </span>
                )) : <span className="text-sm text-slate-400">Shown in the supplied interface</span>}
              </div>
            </div>
          ))}

          {compatibility.os.length > 0 && (
            <div className="rounded-xl border border-[#263449] bg-[#172033] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Monitor className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-300">
                  Operating System
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {compatibility.os.map((os) => (
                  <span
                    key={os}
                    className="inline-flex items-center rounded-md border border-[#263449] bg-[#111827] px-3 py-1 text-xs font-medium text-slate-400"
                  >
                    {os}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
