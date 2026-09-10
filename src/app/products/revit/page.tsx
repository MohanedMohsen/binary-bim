import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CTASection } from '@/components/sections/CTASection';
import { getProductsByPlatform } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revit Add-ins — Binary BIM',
  description:
    'Professional Autodesk Revit Add-ins for AEC teams. Automate sheet management, room data, element numbering, and more.',
};

export default function RevitProductsPage() {
  const revitProducts = getProductsByPlatform('revit');

  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* Page header */}
      <section className="bg-[#0B1120] pb-16 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Autodesk Revit
            </span>
          </div>
          <SectionHeader
            eyebrow=""
            title="Revit Add-ins"
            description="Binary BIM Revit tools automate the most time-consuming data management tasks in Autodesk Revit — so your team can focus on delivering quality projects."
            align="left"
          />
        </div>
      </section>

      {/* Products */}
      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={revitProducts} />
        </div>
      </section>

      <CTASection
        title="Need a Revit automation solution?"
        description="Contact Binary BIM to request a license or discuss how our tools can be integrated into your workflow."
        primaryLabel="Request a License"
        primaryHref="/contact"
        secondaryLabel="View AutoCAD Plugins"
        secondaryHref="/products/autocad"
      />
    </main>
  );
}
