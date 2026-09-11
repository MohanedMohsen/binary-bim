import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products — Binary BIM',
  description:
    'Browse all Binary BIM Revit Add-ins and AutoCAD Plugins for AEC professionals.',
  openGraph: {
    title: 'Products — Binary BIM',
    description: 'Browse all Binary BIM Revit Add-ins and AutoCAD Plugins.',
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products"
          title="Automation tools for better BIM workflows"
          description="Focused Revit add-ins and AutoCAD plugins for repetitive AEC and BIM workflows."
          align="left"
        />
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </div>
    </main>
  );
}
