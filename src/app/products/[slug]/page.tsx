import { notFound } from 'next/navigation';
import { getProduct, products } from '@/data/products';
import { ProductDetail } from '@/components/products/ProductDetail';
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) { const product = getProduct((await params).slug); if (!product) notFound(); return <ProductDetail product={product} />; }
