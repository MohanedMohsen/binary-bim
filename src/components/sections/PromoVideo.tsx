import { SectionHeader } from '@/components/ui/SectionHeader';

export function PromoVideo() {
  return (
    <section className="bg-[#111827] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Inside Binary BIM"
          title="Explore Binary BIM"
          description="Take a closer look at our products, workflows, and automation tools."
        />
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-[#263449] bg-[#0B1120] p-2 shadow-xl sm:p-3">
          <video
            className="aspect-video w-full rounded-xl bg-black"
            controls
            playsInline
            preload="metadata"
          >
            <source src="/videos/binary-bim-promo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
