"use client";
import React, { use } from 'react';
// Use the relative path to be 100% sure Turbopack finds the data
import { softwareContent } from "../../../data/softwareContent"; 
import SolutionDetailAlpha from "@/components/sections/alpha/SolutionDetailAlpha";

export default function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Safety check for the data registry
  if (!softwareContent) {
    return <div className="p-20 bg-black text-red-500">Registry File Not Found</div>;
  }

  const data = softwareContent[slug];

  // If the slug "reactjs--js-apps" isn't in your softwareContent.ts, show this:
  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-orange-600 text-6xl font-black mb-4">DATA MISSING</h1>
        <p className="text-zinc-500 uppercase tracking-widest">
          Key <span className="text-white">"{slug}"</span> not found in softwareContent.ts
        </p>
      </div>
    );
  }

  return <SolutionDetailAlpha data={data} />;
}