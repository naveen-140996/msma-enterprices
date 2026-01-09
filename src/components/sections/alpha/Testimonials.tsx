"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: "T-01",
    client: "Retail Commerce Group",
    quote:
      "Our e-commerce platform performance improved significantly. The new architecture handled peak traffic effortlessly and increased conversion rates.",
    role: "Director of Digital Commerce",
    location: "Bengaluru",
  },
  {
    id: "T-02",
    client: "FinTech Solutions",
    quote:
      "Their web application redesign and backend optimization helped us scale securely while reducing operational complexity.",
    role: "Chief Technology Officer",
    location: "Pune",
  },
  {
    id: "T-03",
    client: "Growth Marketing Co.",
    quote:
      "With integrated analytics and automation, our digital marketing campaigns achieved measurable ROI within weeks.",
    role: "Head of Marketing",
    location: "Mumbai",
  },
  {
    id: "T-04",
    client: "Startup Enablement Hub",
    quote:
      "From product analysis to launch, the team guided us through every phase with clarity and technical excellence.",
    role: "Founder & CEO",
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
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 md:mt-6 text-base md:text-lg text-zinc-600 max-w-3xl mx-auto"
          >
            Trusted by businesses across e-commerce, technology, and digital services.
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* CLIENT LIST */}
          <div className="space-y-4 order-2 lg:order-1">
            {testimonials.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveIndex(i)}
                whileHover={{ x: 6 }}
                className={`block w-full text-left p-5 rounded-2xl transition-all duration-500
                  ${
                    activeIndex === i
                      ? "bg-orange-500 text-white shadow-xl"
                      : "bg-zinc-50 hover:bg-zinc-100 text-zinc-800"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${
                      activeIndex === i ? "text-orange-100" : "text-orange-500"
                    }`}
                  >
                    {item.id}
                  </span>
                  {activeIndex === i && (
                    <motion.div
                      layoutId="activeDot"
                      className="w-2.5 h-2.5 bg-white rounded-full"
                    />
                  )}
                </div>
                <h4 className="font-bold text-base md:text-lg">
                  {item.client}
                </h4>
                <p
                  className={`text-xs md:text-sm mt-1 ${
                    activeIndex === i ? "text-orange-100" : "text-zinc-500"
                  }`}
                >
                  {item.role}
                </p>
              </motion.button>
            ))}
          </div>

          {/* TESTIMONIAL DISPLAY */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative bg-zinc-50 border border-zinc-200 rounded-lg p-8 md:p-12 shadow-lg">

              {/* Decorative Index */}
              <div className="absolute top-6 right-6 text-6xl md:text-8xl font-black text-zinc-100 select-none pointer-events-none">
                0{activeIndex + 1}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 leading-relaxed">
                    “{testimonials[activeIndex].quote}”
                  </blockquote>

                  <div className="mt-8">
                    <p className="font-bold text-zinc-900">
                      {testimonials[activeIndex].client}
                    </p>
                    <p className="text-sm text-zinc-600 mt-1">
                      {testimonials[activeIndex].role} •{" "}
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* PROGRESS BAR */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200 rounded-b-3xl overflow-hidden">
                <motion.div
                  key={activeIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="h-full bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DOT INDICATORS */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: activeIndex === i ? 1.4 : 1,
                backgroundColor: activeIndex === i ? "#f97316" : "#e5e7eb",
              }}
              className="w-2 h-2 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
