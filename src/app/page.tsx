"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// --- DYNAMIC IMPORTS (No SSR for Animation Stability) ---
const HeroAlpha = dynamic(() => import('@/components/sections/alpha/Hero'), { ssr: false });
const AboutAlpha = dynamic(() => import('@/components/sections/alpha/About'), { ssr: false });
const ServicesAlpha = dynamic(() => import('@/components/sections/alpha/Services'), { ssr: false });
const TechStackAlpha = dynamic(() => import('@/components/sections/alpha/TechStack'), { ssr: false });
const TestimonialsAlpha = dynamic(() => import('@/components/sections/alpha/Testimonials'), { ssr: false });
const ProcessAlpha = dynamic(() => import('@/components/sections/alpha/ProcessAlpha'), { ssr: false }); 

// Navigation
import HeaderAlpha from '@/components/headers/HeaderAlpha';
import FooterAlpha from '@/components/footers/FooterAlpha';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <HeaderAlpha />

      <main>
        <HeroAlpha />
        <AboutAlpha />
        <ServicesAlpha />
        <ProcessAlpha />
        <TestimonialsAlpha />
        <TechStackAlpha />
      </main>

      {/* Footer */}
      <FooterAlpha />
    </div>
  );
}