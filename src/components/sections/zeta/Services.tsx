"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const zetaServices = [
  { id: "A", name: "HARDWARE TEST", sub: "ATE / DAQ / PXI", desc: "Automated verification protocols for extreme hardware reliability." },
  { id: "B", name: "REAL-TIME CONTROL", sub: "FPGA / PID / MOTION", desc: "Deterministic closed-loop systems with sub-millisecond latency." },
  { id: "C", name: "HIL SIMULATION", sub: "SAFETY / RISK / V&V", desc: "Simulating physical world interactions for system-wide validation." },
  { id: "D", name: "SYSTEM INTELLIGENCE", sub: "AI / EDGE / DASH", desc: "Converting raw sensor data into predictive maintenance dashboards." }
];

export default function ServicesZeta() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % zetaServices.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 h-[600px]">
          {zetaServices.map((item, i) => (
            <motion.div
              key={item.id}
              onClick={() => setIndex(i)}
              animate={{ 
                flex: index === i ? 6 : 1,
                backgroundColor: index === i ? "#0a0a0a" : "#000"
              }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="relative border border-white/10 group cursor-pointer"
            >
              {/* Vertical Progress Line */}
              {index === i && (
                <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 5, ease: "linear" }}
                  className="absolute right-0 top-0 w-[1px] bg-zinc-400 z-30" />
              )}

              <div className="p-10 h-full flex flex-col justify-between">
                <div className="flex flex-col gap-8">
                  <span className={`text-4xl font-black transition-colors ${index === i ? 'text-white' : 'text-white/10'}`}>
                    {item.id}
                  </span>
                  
                  {/* Half-Hiding Title Logic */}
                  <h3 className={`text-3xl font-black text-white uppercase tracking-tighter transition-all duration-700 ${
                    index !== i ? 'md:rotate-90 md:origin-left md:translate-x-4 md:mt-32 opacity-10' : 'opacity-100'
                  }`}>
                    {item.name}
                  </h3>
                </div>

                <AnimatePresence>
                  {index === i && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                      <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">{item.sub}</p>
                      <p className="text-zinc-300 text-lg leading-tight max-w-sm">{item.desc}</p>
                      <div className="w-12 h-[2px] bg-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Background Grid Pattern on Active */}
              {index === i && (
                <div className="absolute inset-0 opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}