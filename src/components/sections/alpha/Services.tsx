"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Engineering Test & Validation",
    tag: "Aerospace & Defence",
    desc: "Mission-critical ATE, HIL simulation, and Radar/RF validation systems designed for deterministic deployment-ready performance.",
    scope: ["ATE Systems", "Missile & Rocket Checkout", "Radar & RF Validation", "HIL Simulation"],
  },
  {
    id: "02",
    title: "Industrial Automation",
    tag: "Smart Manufacturing",
    desc: "Transforming physical operations into data-driven ecosystems using robotics, cobots, and predictive maintenance.",
    scope: ["Industry 4.0", "Robotics & Cobots", "Condition Monitoring", "Supply Chain Auto"],
  },
  {
    id: "03",
    title: "Software, Cloud & AI",
    tag: "Enterprise Ecosystems",
    desc: "Scalable digital products including ReactJS dashboards, ERP systems, and n8n-powered AI workflow automation.",
    scope: ["Web Dashboards", "ERP Systems", "AWS/Azure Cloud", "AI Agent Workflows"],
  },
  {
    id: "04",
    title: "Digital Health & Life Sciences",
    tag: "Medical Systems",
    desc: "Safe and compliant healthcare technologies for medical device testing, patient monitoring, and AI diagnostics.",
    scope: ["Device Validation", "Biomedical Signal", "AI Diagnostics", "Lab Automation"],
  },
];

export default function ServicesAlpha() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isPaused || !mounted) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, mounted]);

  if (!mounted) return null;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Technical Domains
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.9]">
            ENGINEERING <br />
            <span className="text-orange-500 italic">SYNERGY.</span>
          </h2>
        </div>

        {/* The Blade Container */}
        <div 
          className="flex flex-col md:flex-row gap-4 min-h-[750px] md:min-h-[550px] h-auto items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              onClick={() => setActive(i)}
              animate={{ 
                flex: active === i ? 12 : 1,
                backgroundColor: active === i ? "#ffffff" : "#f9f9f9"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden cursor-pointer border transition-all duration-500 rounded-[2rem] ${
                active === i 
                  ? "border-orange-500 shadow-2xl z-10" 
                  : "border-zinc-100 hover:border-zinc-200 z-0"
              }`}
            >
              {/* Individual Progress Bar */}
              {active === i && !isPaused && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 h-1 bg-orange-500 z-20" 
                />
              )}

              <div className="p-8 h-full flex flex-col relative overflow-hidden">
                {/* ID Tag */}
                <span className={`text-[10px] font-mono font-black mb-10 transition-colors shrink-0 ${
                  active === i ? "text-orange-500" : "text-zinc-300"
                }`}>
                  // SECTOR_{s.id}
                </span>

                {/* Fixed Title Alignment */}
                <div className="relative flex-grow flex flex-col">
                  <h3 className={`font-black text-zinc-900 uppercase tracking-tighter transition-all duration-500 ${
                    active !== i 
                      ? "text-xl md:text-2xl rotate-90 origin-left absolute left-4 top-0 whitespace-nowrap opacity-20" 
                      : "text-2xl md:text-4xl opacity-100 relative mb-6"
                  }`}>
                    {s.title}
                  </h3>

                  {/* Expanded Content View */}
                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col flex-grow"
                      >
                        <div className="space-y-4 mb-8">
                          <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                            {s.tag}
                          </p>
                          <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-md font-medium">
                            {s.desc}
                          </p>
                        </div>

                        {/* Scope Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 border-t border-zinc-100 pt-8 mt-auto shrink-0 bg-white">
                          {s.scope.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                              <span className="text-[9px] md:text-[10px] font-black text-zinc-800 uppercase tracking-tight whitespace-nowrap">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}