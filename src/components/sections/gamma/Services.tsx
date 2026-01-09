"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { id: "01", title: "Hardware Test & Automation", tag: "ATE SYSTEMS", desc: "Design and deployment of automated test equipment for aerospace and defense validation." },
  { id: "02", title: "Data Acquisition & Control", tag: "DETERMINISM", desc: "High-speed synchronized measurement systems with real-time FPGA-based control loops." },
  { id: "03", title: "Simulation & HIL Validation", tag: "RISK REDUCTION", desc: "Simulating mission environments and fault injection to verify systems before deployment." },
  { id: "04", title: "Intelligence & Platforms", tag: "DIGITAL LAYER", desc: "Edge AI and custom dashboards for predictive maintenance and automated system reporting." }
];

export default function ServicesGamma() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % services.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#05080F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 md:px-20">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">System <span className="text-blue-500">Architecture.</span></h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-[550px]">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              onClick={() => setActive(i)}
              animate={{ flex: active === i ? 5 : 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden cursor-pointer border border-white/5 rounded-sm ${active === i ? 'bg-[#0A0E1A]' : 'bg-[#060910] hover:bg-white/[0.02]'}`}
            >
              {/* Progress Bar (Only for active) */}
              {active === i && (
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 h-[2px] bg-blue-500 z-20" />
              )}

              <div className="p-8 h-full flex flex-col">
                <div className="flex flex-col gap-6">
                  <span className={`text-xs font-mono font-bold ${active === i ? 'text-blue-500' : 'text-slate-700'}`}>[{s.id}]</span>
                  
                  {/* The "Hiding" Title Logic */}
                  <h3 className={`text-xl font-black text-white uppercase tracking-tighter whitespace-nowrap transition-all duration-700 ${
                    active !== i ? 'md:rotate-90 md:origin-left md:translate-x-4 md:mt-24 opacity-20' : 'opacity-100'
                  }`}>
                    {s.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mt-auto space-y-6">
                      <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{s.desc}</p>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-black px-3 py-1 border border-blue-500/30 text-blue-400 uppercase tracking-widest">{s.tag}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}