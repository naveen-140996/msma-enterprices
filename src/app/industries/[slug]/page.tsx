"use client";
import React, { use } from 'react';
import { alphaContent } from "@/data/alphaContent";
import IndustryDetailAlpha from "@/components/sections/alpha/IndustryDetail";

export default function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  
  // Look up the data
  const data = alphaContent.industries[slug as keyof typeof alphaContent.industries];

  // Pass it to the component (even if data is undefined, the component now handles it safely)
  return <IndustryDetailAlpha data={data} slug={slug} />;
}