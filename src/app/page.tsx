import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { PlatformsSection } from '@/components/sections/PlatformsSection';
import { CTASection } from '@/components/sections/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Binary BIM — Where BIM meets AUTOMATION',
  description:
    'Professional Revit Add-ins and AutoCAD Plugins for the AEC industry. Automate sheet management, room data, element numbering, and more.',
  openGraph: {
    title: 'Binary BIM — Where BIM meets AUTOMATION',
    description:
      'Professional Revit Add-ins and AutoCAD Plugins for the AEC industry.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <PlatformsSection />
      <CTASection
        title="Ready to automate your AEC workflow?"
        description="Contact Binary BIM to request a license or learn more about our products."
        primaryLabel="Request a License"
        primaryHref="/contact"
        secondaryLabel="Browse All Products"
        secondaryHref="/products"
      />
    </>
  );
}
