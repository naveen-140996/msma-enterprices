"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: "T-01",
    client: "Aerospace Dynamics",
    quote: "NI-ATE validation cycle reduced by 40%. World-class architecture and deterministic timing.",
    role: "Lead Systems Engineer",
    location: "Bengaluru",
  },
  {
    id: "T-02",
    client: "Nexus Robotics",
    quote: "Perfect hardware-to-cloud synchronization. Their React + LabVIEW bridge is a game changer.",
    role: "Chief Technology Officer",
    location: "Pune",
  },
  {
    id: "T-03",
    client: "Global Mfg Corp",
    quote: "AI Agents eliminated manual data entry. We saw full ROI in just 12 weeks of deployment.",
    role: "Head of Digital Transformation",
    location: "Mumbai",
  },
  {
    id: "T-04",
    client: "Energy Systems",
    quote: "Zero-latency control loops verified under extreme stress testing. Robust engineering.",
    role: "Principal Control Systems Architect",
    location: "Chennai",
  },
];

export default function TestimonialsAdvanced() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight"
          >
            Client Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto"
          >
            Trusted by leading organizations in aerospace, defence, robotics, and manufacturing
          </motion.p>
        </div>

        {/* Main Testimonial Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left: Client Selector */}
          <div className="space-y-6">
            {testimonials.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                whileHover={{ x: 8 }}
                className={`block w-full text-left p-6 rounded-2xl transition-all duration-500 ${
                  activeIndex === i
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl"
                    : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    activeIndex === i ? "text-orange-100" : "text-orange-600"
                  }`}>
                    {item.id}
                  </span>
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  )}
                </div>
                <h4 className={`font-bold text-lg ${
                  activeIndex === i ? "text-white" : "text-zinc-900"
                }`}>
                  {item.client}
                </h4>
                <p className={`text-sm mt-1 ${
                  activeIndex === i ? "text-orange-100" : "text-zinc-500"
                }`}>
                  {item.role}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Center: Quote Display */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 rounded-3xl p-12 md:p-16 shadow-xl">
              {/* Decorative number */}
              <div className="absolute top-8 right-8 text-8xl font-black text-zinc-50 select-none pointer-events-none">
                0{activeIndex + 1}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-relaxed">
                    “{testimonials[activeIndex].quote}”
                  </blockquote>

                  <div className="mt-12 flex items-center gap-6">
                    <div>
                      <p className="font-bold text-zinc-900 text-lg">
                        {testimonials[activeIndex].client}
                      </p>
                      <p className="text-zinc-600 text-sm mt-1">
                        {testimonials[activeIndex].role} • {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-100 rounded-b-3xl overflow-hidden">
                <motion.div
                  key={activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom dots indicator */}
        <div className="flex justify-center mt-16 gap-3">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: activeIndex === i ? 1.4 : 1,
                backgroundColor: activeIndex === i ? "#ea580c" : "#e4e4e7",
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}