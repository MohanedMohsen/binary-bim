import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, Clock, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & License Request — Binary BIM',
  description:
    'Request a license, ask technical questions, or inquire about Binary BIM software tools for Autodesk Revit and AutoCAD.',
  openGraph: {
    title: 'Contact & License Request — Binary BIM',
    description:
      'Request a license, ask technical questions, or inquire about Binary BIM software tools.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact & Licensing"
          title="Connect with Binary BIM"
          description="Request product licenses, explore multi-seat deployments for your firm, or ask technical questions about our tools."
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#263449] bg-[#111827] p-6 sm:p-10">
              <h2 className="text-xl font-bold text-slate-100 mb-6">
                Send an Inquiry
              </h2>
              <ContactForm variant="page" />
            </div>
          </div>

          {/* Info Side Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-[#263449] bg-[#172033] p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Direct Inquiries
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                You can reach out directly via the form or email our software team.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-950/60 p-2 border border-blue-800/40 text-blue-400">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Inquiries
                    </p>
                    <p className="text-sm font-medium text-slate-200 mt-0.5">
                      info@binarybim.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-blue-950/60 p-2 border border-blue-800/40 text-blue-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Response Time
                    </p>
                    <p className="text-sm font-medium text-slate-200 mt-0.5">
                      Within 1 business day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#263449] bg-[#172033] p-8">
              <h3 className="text-lg font-semibold text-slate-100">
                Licensing Information
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Standalone and multi-user network license options available upon request.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Compatible with current and recent Autodesk releases (2022–2025).</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Evaluation licenses available for qualifying firms and BIM managers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
