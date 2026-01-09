"use client";
import React, { use } from 'react';
import { subServicesContent } from "@/data/subServicesContent";
import AlphaDetail from "@/components/sections/alpha/AlphaDetail";

// 1. Change the type definition to use 'slug' to match your folder [slug]
export default function SubServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  
  // 2. Access 'slug' from resolvedParams
  const data = subServicesContent[resolvedParams.slug as keyof typeof subServicesContent];

  if (!data) {
    return (
      <div className="pt-40 text-center font-black uppercase tracking-widest text-zinc-500">
        <p className="text-4xl mb-4 text-orange-500 font-mono">404</p>
        System Registry Not Found: {resolvedParams.slug}
      </div>
    );
  }

  return <AlphaDetail data={data} type="service" />;
}