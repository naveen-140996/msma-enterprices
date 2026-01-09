"use client";
import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  "Aerospace", "Automotive", "Manufacturing", "Semiconductor", 
  "Energy Systems", "Chemical", "Medical", "Research"
];

export default function IndustriesZeta() {
  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10 mb-20">
        <h2 className="text-7xl md:text-9xl font-black text-white/5 uppercase tracking-[ -0.05em] leading-none select-none">
          DOMAINS
        </h2>
      </div>

      <div className="relative">
        <motion.div 
          className="flex gap-10"
          animate={{ x: [0, -1200] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...industries, ...industries].map((ind, i) => (
            <div key={i} className="min-w-[400px] h-[250px] bg-zinc-900/50 border border-white/5 flex items-center justify-center p-12 group hover:border-white/20 transition-all">
              <h4 className="text-3xl font-black text-zinc-500 group-hover:text-white uppercase tracking-tighter text-center transition-colors">
                {ind}
              </h4>
            </div>
          ))}
        </motion.div>
        
        {/* Decorative Overlay Lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}