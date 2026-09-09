'use client';

import { useState } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { products } from '@/data/products';
import type { Platform } from '@/types';
import { cn } from '@/lib/utils';

type Filter = 'all' | Platform;

const tabs: { label: string; value: Filter }[] = [
  { label: 'All Products', value: 'all' },
  { label: 'Revit Add-ins', value: 'revit' },
  { label: 'AutoCAD Plugins', value: 'autocad' },
];

export function ProductsClient() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered =
    filter === 'all'
      ? products
      : products.filter((p) => p.platform === filter || p.platform === 'multi');

  return (
    <>
      {/* Filter tabs */}
      <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter products by platform">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={filter === tab.value}
            onClick={() => setFilter(tab.value)}
            className={cn(
              'rounded-lg border px-5 py-2 text-sm font-medium transition-all duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
              filter === tab.value
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-[#263449] bg-[#172033] text-slate-400 hover:border-slate-600 hover:text-slate-200'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8" role="tabpanel">
        <ProductGrid products={filtered} />
      </div>
    </>
  );
}
