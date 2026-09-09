'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/types';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-[#111827]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Technical details, licensing, and workflow integration information."
        />

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#263449] bg-[#172033] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-100 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200',
                      isOpen && 'rotate-180 text-blue-400'
                    )}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#263449] px-6 pb-6 pt-4">
                    <p className="text-sm leading-relaxed text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
