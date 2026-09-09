import Link from 'next/link';
import { Home, Package } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-[#0B1120] px-4 py-24">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#263449] bg-[#172033] text-blue-400 font-mono text-2xl font-bold">
          404
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          The requested page or product could not be located. Please verify the URL or return to the main product catalog.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="md" variant="primary">
            <Link href="/">
              <Home className="mr-1.5 h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="md" variant="secondary">
            <Link href="/products">
              <Package className="mr-1.5 h-4 w-4" aria-hidden="true" />
              All Products
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
