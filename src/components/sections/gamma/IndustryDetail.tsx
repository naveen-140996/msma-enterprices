"use client";
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

// 1. THE MAIN WRAPPER (No hooks here)
export default function IndustryDetailAlpha({ data, slug }: { data: any, slug: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // If we aren't mounted, return a simple placeholder. 
  // This stops the 'useScroll' hook inside the child from firing too early.
  if (!mounted) {
    return <div className="min-h-screen bg-zinc-950" />;
  }

  // Only render the component with hooks once we are 100% on the client.
  return <IndustryContentSafe data={data} slug={slug} />;
}

// 2. THE ACTUAL CONTENT (Hooks live here)
function IndustryContentSafe({ data, slug }: { data: any, slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Because this component only exists when 'mounted' is true, 
  // containerRef.current is guaranteed to be available for hydration.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xTransform = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  if (!data) return <div className="pt-40 text-center font-black">DATA OFFLINE</div>;

  const themes: any = {
    "aerospace-defence": { gradient: "from-orange-600 to-red-900", accent: "text-orange-500" },
    "oil-gas": { gradient: "from-amber-500 to-yellow-900", accent: "text-amber-500" },
    "medical-health": { gradient: "from-blue-600 to-indigo-900", accent: "text-blue-500" },
    "industry-4-0": { gradient: "from-purple-600 to-fuchsia-900", accent: "text-purple-500" }
  };
  const theme = themes[slug] || themes["industry-4-0"];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <section className="relative h-screen flex items-center overflow-hidden border-b border-white/5">
        <motion.div 
          style={{ x: xTransform }}
          className="absolute -bottom-10 left-0 whitespace-nowrap opacity-[0.03] font-black text-[25vw] uppercase leading-none"
        >
          {data.title} • {data.title}
        </motion.div>

        <div className="max-w-[1440px] mx-auto px-8 w-full z-10">
          <Link href="/" className="group inline-flex items-center gap-3 mb-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500 hover:text-white transition-all">
             <span className="w-8 h-[1px] bg-zinc-800 group-hover:w-12 group-hover:bg-orange-500 transition-all"></span> 
             System Hub
          </Link>
          <h1 className="text-7xl lg:text-[11rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
            {data.title}
          </h1>
        </div>
      </section>
      
      {/* Rest of your sections... */}
    </div>
  );
}