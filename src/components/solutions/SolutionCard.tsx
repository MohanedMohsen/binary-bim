import { Building2, Wrench, Shield, Building, type LucideIcon } from 'lucide-react';
import type { Solution } from '@/types';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Wrench,
  Shield,
  Building,
};

interface SolutionCardProps {
  solution: Solution;
  className?: string;
}

export function SolutionCard({ solution, className }: SolutionCardProps) {
  const Icon = iconMap[solution.icon] || Building2;

  return (
    <div
      className={cn(
        'flex flex-col rounded-xl border border-[#263449] bg-[#172033] p-8 transition-all duration-200 hover:border-blue-700/60 hover:bg-[#1a2540]',
        className
      )}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400">
        <Icon className="h-6 w-6" aria-hidden={true} />
      </div>

      <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">
        {solution.audience}
      </p>

      <h3 className="text-xl font-bold text-slate-100">
        {solution.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {solution.description}
      </p>
    </div>
  );
}
