"use client";

import React, { useState, useEffect, useRef } from "react";
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

const INTERVAL = 6000;

export default function TestimonialsAdvanced() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const userInteracted = useRef(false);

  /* Detect screen */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Auto cycle (desktop + mobile accordion) */
  useEffect(() => {
    if (userInteracted.current) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [activeIndex]);

  /* Resume auto after user click */
  const handleClick = (index: number) => {
    userInteracted.current = true;
    setActiveIndex(index);

    setTimeout(() => {
      userInteracted.current = false;
    }, INTERVAL * 1.5);
  };

  return (
    <section className="py-10 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900"
          >
            What Our Clients Say
          </motion.h2>
          <p className="mt-4 text-zinc-600 max-w-3xl mx-auto">
            Trusted by businesses across e-commerce, technology, and digital services.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ACCORDION LIST */}
          <div className="space-y-4 order-2 lg:order-1">
            {testimonials.map((item, i) => {
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={i}
                  className={`rounded-2xl transition-all duration-500
                    ${isActive ? "bg-orange-500 text-white shadow-xl" : "bg-zinc-50"}
                  `}
                >
                  {/* HEADER */}
                  <button
                    onClick={() => handleClick(i)}
                    className="w-full text-left p-5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-bold uppercase ${
                          isActive ? "text-orange-100" : "text-orange-500"
                        }`}
                      >
                        {item.id}
                      </span>

                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        className="lg:hidden text-lg"
                      >
                        ▼
                      </motion.span>
                    </div>

                    <h4 className="font-bold text-base md:text-lg">
                      {item.client}
                    </h4>
                    <p
                      className={`text-xs mt-1 ${
                        isActive ? "text-orange-100" : "text-zinc-500"
                      }`}
                    >
                      {item.role}
                    </p>
                  </button>

                  {/* ACCORDION BODY */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="lg:hidden overflow-hidden px-5 pb-5"
                      >
                        <p className="text-sm leading-relaxed text-orange-50">
                          “{item.quote}”
                        </p>
                        <p className="mt-3 text-xs text-orange-100">
                          {item.role} • {item.location}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* DESKTOP PANEL */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative bg-zinc-50 rounded-lg p-12 shadow-lg">

              {/* <div className="absolute top-6 right-6 text-8xl font-black text-zinc-100">
                0{activeIndex + 1}
              </div> */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                >
                  <blockquote className="text-3xl font-bold leading-relaxed">
                    “{testimonials[activeIndex].quote}”
                  </blockquote>

                  <div className="mt-8">
                    <p className="font-bold">
                      {testimonials[activeIndex].client}
                    </p>
                    <p className="text-sm text-zinc-600">
                      {testimonials[activeIndex].role} •{" "}
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-200">
                <motion.div
                  key={activeIndex}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                  className="h-full bg-orange-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
