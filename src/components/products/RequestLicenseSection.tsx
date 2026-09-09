import { SectionHeader } from '@/components/ui/SectionHeader';
import { ContactForm } from '@/components/sections/ContactForm';

interface RequestLicenseSectionProps {
  productName: string;
  productId: string;
}

export function RequestLicenseSection({
  productName,
  productId,
}: RequestLicenseSectionProps) {
  return (
    <section id="license" className="py-20 bg-[#0B1120] border-t border-[#263449]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="License Request"
          title={`Request a License for ${productName}`}
          description="Fill out the form below to get access, request pricing, or schedule a deployment consultation for your team."
        />

        <div className="mt-12 rounded-2xl border border-[#263449] bg-[#111827] p-6 sm:p-10 shadow-xl">
          <ContactForm defaultProduct={productId} variant="section" />
        </div>
      </div>
    </section>
  );
}
