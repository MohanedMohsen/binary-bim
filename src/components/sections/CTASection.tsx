import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#263449] bg-[#111827] px-8 py-14 text-center sm:px-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            {secondaryLabel && secondaryHref && (
              <Button asChild size="lg" variant="secondary">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
