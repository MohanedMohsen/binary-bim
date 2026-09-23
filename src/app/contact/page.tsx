'use client';

import { ContactForm } from '@/components/sections/ContactForm';
import { BinaryWorkflowVisualization } from '@/components/sections/BinaryWorkflowVisualization';
import { useI18n } from '@/lib/i18n';

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="contact-page min-h-screen bg-[#0B1120] px-4 pb-20 pt-24 sm:pt-32 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)] items-start">
          {/* Form Section */}
          <section>
            <p className="eyebrow">{t('contact.kicker')}</p>
            <h1 className="mt-4 sm:mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-100">
              {t('contact.title')}
            </h1>
            <p className="mt-4 sm:mt-5 max-w-lg text-base sm:text-lg leading-7 sm:leading-8 text-slate-400">
              {t('contact.body')}
            </p>
            <div className="mt-8 sm:mt-10">
              <ContactForm />
            </div>
          </section>

          {/* Interactive Automation Workflow Engine Visualization & Direct Contact */}
          <aside className="lg:sticky lg:top-24 flex flex-col justify-center">
            <BinaryWorkflowVisualization />

            {/* Direct Contact Info (Original Large Style) */}
            <div className="mt-8 sm:mt-10">
              <p className="eyebrow">{t('contact.direct')}</p>
              <a
                className="contact-email mt-4 sm:mt-5 block break-all hover:text-cyan-300 transition-colors"
                href="mailto:mohanedelamghraby6@gmail.com"
              >
                mohanedelamghraby6@gmail.com
                <span className="text-cyan-400 ms-1 not-italic">↗</span>
              </a>
              <p className="mt-5 sm:mt-7 max-w-sm text-sm leading-6 text-slate-400">
                {t('contact.directbody')}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
