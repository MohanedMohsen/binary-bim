import {
  LayoutGrid,
  ArrowDown10,
  FileText,
  Filter,
  RefreshCw,
  ClipboardList,
  Grid,
  Table,
  Search,
  Copy,
  FileSpreadsheet,
  CheckCircle,
  Hash,
  Layers,
  Settings,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Download,
  Trash2,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Feature } from '@/types';

// Map icon name strings to Lucide components
const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  SortAsc: ArrowDown10,
  FileText,
  Filter,
  RefreshCw,
  ClipboardList,
  Grid,
  Table,
  Search,
  Copy,
  FileSpreadsheet,
  CheckCircle,
  Hash,
  Layers,
  Settings,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Download,
  Trash2,
};

interface ProductFeaturesProps {
  features: Feature[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section id="features" className="py-20 bg-[#111827]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Features"
          title="What it does"
          description="A focused set of tools designed to eliminate manual overhead and keep your project data consistent."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={feature.title}
                className="rounded-xl border border-[#263449] bg-[#172033] p-6"
              >
                {Icon && (
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/50 border border-blue-800/30">
                    <Icon
                      className="h-5 w-5 text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                )}
                <h3 className="text-base font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
