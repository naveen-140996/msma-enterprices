"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutAlpha() {
  const [index, setIndex] = useState(0);
  const images = ["../assets/images/about-us-2.webp", "../assets/images/about-us-img.png"];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!mounted) return null;

  return (
    <section className="relative py-10 md:py-32 bg-white overflow-hidden border-t border-zinc-100">
      
      {/* 1. SIDEBAR LABEL - Hidden on smaller screens to maximize content space */}
      <div className="absolute left-4 md:left-8 top-40 hidden xl:flex flex-col items-center gap-16">
        <span className="text-[9px] font-black uppercase tracking-[1em] rotate-90 origin-left text-zinc-300">
         DIGITAL_CORE
        </span>
        <div className="w-[1px] h-40 bg-zinc-100" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* 2. TEXT CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-orange-500" />
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-orange-600">
                    Scalable IT Solutions
                  </p>
                </div>
                {/* Fluid Typography: Scales from text-5xl to text-8xl */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.9] md:leading-[0.85] uppercase">
                  Digital  <br /> 
                  <span className="text-zinc-200">Systems.</span>
                </h2>
              </div>

              <div className="max-w-xl space-y-6">
                <p className="text-base md:text-lg font-bold text-zinc-900 leading-snug tracking-tight">
We design and engineer scalable digital platforms that power e-commerce,
web applications, and high-performance business systems.
                </p>
                <p className="text-xs md:text-sm text-zinc-500 leading-relaxed font-medium">
From custom e-commerce solutions to enterprise-grade web and mobile applications,
we build secure, high-performance systems designed for growth, reliability,
and long-term business impact.                </p>
              </div>

              {/* Technical Spec List - Responsive grid columns */}
             <div className="flex flex-col gap-1">
  <span className="text-[8px] md:text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
    Technology Stack
  </span>
  <p className="text-[11px] md:text-xs font-black text-zinc-900 uppercase">
    React • Next.js • APIs • Shopify • Digital Marketing Tools
  </p>
</div>

<div className="flex flex-col gap-1">
  <span className="text-[8px] md:text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
    Delivery Model
  </span>
  <p className="text-[11px] md:text-xs font-black text-zinc-900 uppercase">
    Scalable • Secure • Performance-Driven
  </p>
</div>

            </div>
          </div>

          {/* 3. IMAGE CONTAINER - Positioned on top for Mobile, Right for Desktop */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative aspect-square sm:aspect-[4/5] w-full max-w-[320px] sm:max-w-[420px] mx-auto lg:ml-auto lg:mr-0 overflow-hidden">
              
              {/* Thin Hairline Frame */}
              <div className="absolute inset-0 border border-zinc-200 z-20 pointer-events-none" />
              
              {/* Technical Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 md:w-6 md:h-6 border-t border-l border-orange-500 z-30" />
              <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 border-b border-r border-zinc-900 z-30" />

              {/* Main Image */}
              <div className="w-full h-full bg-zinc-50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={images[index]}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                    alt="E-commerce and web application system architecture"
                  />
                </AnimatePresence>
              </div>

              {/* Discrete Tag */}
              {/* <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 px-2 md:px-3 py-1 bg-white border border-zinc-200 z-30">
                <span className="text-[7px] md:text-[8px] font-mono font-black text-zinc-900 tracking-widest">
                  SYS_REF_0{index + 1}
                </span>
              </div> */}
            </div>

            {/* Decorative Grid - Hidden on smallest phones to keep it clean */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-24 h-24 md:w-32 md:h-32 bg-[radial-gradient(#f1f1f1_1.5px,transparent_1.5px)] [background-size:10px_10px] md:[background-size:12px_12px] -z-10 hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}