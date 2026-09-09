import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CTASection } from '@/components/sections/CTASection';
import { getProductsByPlatform } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoCAD Plugins — Binary BIM',
  description:
    'Professional Autodesk AutoCAD plugins for AEC teams. Automate layer management, drawing standards, and more.',
};

export default function AutoCADProductsPage() {
  const autocadProducts = getProductsByPlatform('autocad');

  return (
    <main className="min-h-screen bg-[#0B1120]">
      {/* Page header */}
      <section className="pt-24 pb-16 bg-[#0B1120]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-cyan-500" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Autodesk AutoCAD
            </span>
          </div>
          <SectionHeader
            eyebrow=""
            title="AutoCAD Plugins"
            description="Binary BIM AutoCAD tools bring automation and precision to your drawing workflows — from layer management to batch operations across complex projects."
            align="left"
          />
        </div>
      </section>

      {/* Products */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductGrid products={autocadProducts} />
        </div>
      </section>

      <CTASection
        title="Looking for AutoCAD automation?"
        description="Contact Binary BIM to request a license or discuss your specific workflow requirements."
        primaryLabel="Request a License"
        primaryHref="/contact"
        secondaryLabel="View Revit Add-ins"
        secondaryHref="/products/revit"
      />
    </main>
  );
}
