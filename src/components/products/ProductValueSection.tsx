import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Product } from '@/types';

interface ProductValueSectionProps {
  product: Product;
}

export function ProductValueSection({ product }: ProductValueSectionProps) {
  return (
    <section className="bg-[#0B1120] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        <SectionHeader
          eyebrow="The workflow"
          title={`Bring clarity to ${product.category.toLowerCase()}`}
          align="left"
        />
        <div className="rounded-2xl border border-[#263449] bg-[#172033] p-7 sm:p-9">
          <p className="text-lg leading-8 text-slate-300">{product.description}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#263449] bg-[#111827] p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Manual workflow</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Repetitive project updates managed one item at a time.</p>
            </div>
            <div className="rounded-xl border border-blue-800/50 bg-blue-950/30 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Binary BIM</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">A focused tool for managing the workflow with greater consistency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
