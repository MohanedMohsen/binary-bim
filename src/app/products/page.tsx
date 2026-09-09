import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProductsClient } from './ProductsClient';
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
    <main className="min-h-screen bg-[#0B1120] pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products"
          title="All Binary BIM Tools"
          description="Professional add-ins and plugins for Autodesk Revit and AutoCAD. Built for architects, engineers, and BIM managers."
          align="left"
        />
        <ProductsClient />
      </div>
    </main>
  );
}
