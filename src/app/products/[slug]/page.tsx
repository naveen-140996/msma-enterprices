"use client";
import React, { use } from 'react';
import { productsContent } from "@/data/productsContent";
// Match the filename exactly (Case Sensitive!)
import ProductDetailAlpha from "@/components/sections/alpha/ProductDetailAlpha";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const data = productsContent[resolvedParams.slug];

  if (!data) {
    return (
      <div className="pt-60 text-center font-black uppercase tracking-[0.5em] text-zinc-400 min-h-screen bg-zinc-50">
        <span className="text-orange-600 text-6xl block mb-6">404</span>
        Product Registry Not Found: {resolvedParams.slug}
      </div>
    );
  }

  return <ProductDetailAlpha data={data} />;
}