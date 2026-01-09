"use client";
import React from 'react';
import Image from 'next/image';

export default function AboutZeta() {
  return (
    <section className="relative min-h-screen flex items-center py-24 bg-[#020202] overflow-hidden">
      {/* Background Cyber Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[180px] rounded-full" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-[ -0.05em] text-white">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">ENGINEERING</span> OF SYNC
          </h2>
        </div>

        {/* The Main "Card Inside" Container */}
        <div className="backdrop-blur-3xl bg-white/[0.02] border border-white/10 rounded-[40px] p-8 md:p-16 shadow-2xl relative">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/20 rounded-tl-[40px]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/20 rounded-br-[40px]" />

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Column: Intelligence Briefing */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-8 bg-blue-500" />
                  <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
                    Advanced Tier Intelligence
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                  Unlocking the <br />
                  <span className="text-zinc-500">Logic of</span> <br />
                  <span className="text-white italic">Hardware.</span>
                </h3>
              </div>

              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Viwebsync architects elite <span className="text-white font-medium italic underline decoration-blue-500/30">LabVIEW environments</span>, bridging the critical gap between mechanical hardware and digital intelligence.
                </p>
                <p>
                  Our bespoke solutions in <span className="text-white font-medium">real-time automation</span> and <span className="text-white font-medium">multi-tier data logging</span> represent the apex of modern system synchronization.
                </p>
              </div>

              {/* Technical Footnote */}
              <div className="flex gap-6 items-center pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-black bg-zinc-800 flex items-center justify-center">
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-tight">
                  Systems deployed across <br /> Aerospace & Semiconductor sectors.
                </p>
              </div>
            </div>

            {/* Right Column: High-Fidelity Visual */}
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[30px] opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-1000" />
              
              {/* Image Frame */}
              <div className="relative rounded-[30px] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square">
                <Image 
                  src="/AboutViweb1.png" 
                  alt="Zeta Interface Architecture" 
                  fill 
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                  priority 
                />
                
                {/* Visual Overlay Labels */}
                <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                  <span className="text-[9px] font-mono text-white tracking-[0.2em] uppercase">Core_Module_V.01</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}