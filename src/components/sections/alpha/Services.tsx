"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "E-Commerce & Web Platforms",
    tag: "Digital Commerce",
    headline: "Scalable Platforms Built for Growth",
    desc: "We design and develop secure, high-performance e-commerce and web platforms that scale with your business. From storefront experiences to backend systems, we focus on performance, reliability, and conversion optimization.",
    details: [
      "Custom e-commerce storefronts with optimized UX",
      "Secure payment gateway and order management",
      "Headless commerce architectures for flexibility",
      "Performance optimization for high-traffic platforms",
    ],
    scope: [
      "Custom Storefronts",
      "Payment Integration",
      "Order & Inventory",
      "Headless Commerce",
    ],
  },
  {
    id: "02",
    title: "Web & Mobile Application Development",
    tag: "Product Engineering",
    headline: "Modern Applications That Perform",
    desc: "We engineer modern web and mobile applications with clean architecture, scalable APIs, and user-centric design. Our applications are built to support long-term growth and evolving business requirements.",
    details: [
      "React, Next.js & modern frontend frameworks",
      "Cross-platform and native mobile applications",
      "Robust backend APIs and integrations",
      "UX-focused design for real-world usability",
    ],
    scope: [
      "React & Next.js",
      "Mobile Apps",
      "API Development",
      "UX Engineering",
    ],
  },
  {
    id: "03",
    title: "Product Analysis & Strategy",
    tag: "Business Intelligence",
    headline: "Turning Ideas into Market-Ready Products",
    desc: "We help businesses validate ideas, analyze market needs, and define product roadmaps. Our product analysis process reduces risk and ensures your digital products align with real user and business demands.",
    details: [
      "Product requirement analysis and validation",
      "User journey mapping and experience planning",
      "Competitive market and feature analysis",
      "Scalable product roadmap definition",
    ],
    scope: [
      "Requirement Analysis",
      "User Experience Mapping",
      "Market Research",
      "Product Roadmaps",
    ],
  },
  {
    id: "04",
    title: "Digital Marketing & Growth",
    tag: "Marketing Systems",
    headline: "Data-Driven Digital Growth",
    desc: "Our digital marketing solutions focus on measurable growth. We combine analytics, automation, and performance strategies to help brands reach the right audience and maximize ROI.",
    details: [
      "SEO-optimized content and site structure",
      "Performance marketing and analytics tracking",
      "Marketing automation and lead workflows",
      "Brand visibility and growth strategy",
    ],
    scope: [
      "SEO & Content",
      "Performance Marketing",
      "Marketing Automation",
      "Analytics & Insights",
    ],
  },
  {
    id: "05",
    title: "Company Registration & Compliance",
    tag: "Business Enablement",
    headline: "Strong Foundations for Business Growth",
    desc: "We support startups and businesses with company registration guidance, compliance processes, and digital setup required to operate legally and efficiently in modern markets.",
    details: [
      "Company registration guidance and structure",
      "Compliance and documentation support",
      "Digital presence and operational setup",
      "Technology enablement for new businesses",
    ],
    scope: [
      "Business Registration",
      "Compliance Guidance",
      "Startup Enablement",
      "Digital Setup",
    ],
  },
];

export default function ServicesAlpha() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative md:py-28 py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* HEADER */}
        <div className="mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-orange-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
              What We Do
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.9] mb-6">
            Digital Services <br />
            <span className="text-orange-500 italic">That Scale.</span>
          </h2>

          <p className="text-zinc-600 text-sm md:text-base max-w-3xl leading-relaxed font-medium">
            We provide end-to-end digital services — from product analysis and platform development
            to marketing growth and business enablement — designed to support startups, enterprises,
            and growing digital brands.
          </p>
        </div>

        {/* TABS */}
        <div
          className="flex flex-wrap gap-3 mb-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setActive(i)}
              className={`relative px-5 py-3 rounded-[8px] text-[10px] font-black uppercase tracking-widest transition-all
                ${
                  active === i
                    ? "bg-orange-50 text-orange-600"
                    : "bg-zinc-100 text-zinc-400 hover:text-zinc-700"
                }
              `}
            >
              {service.title}

              {active === i && !paused && (
                <motion.div
                  key={active}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute left-0 bottom-0 h-[2px] bg-orange-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={services[active].id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 md:p-12"
          >
            <div className="max-w-5xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-4">
                {services[active].tag}
              </p>

              <h3 className="text-3xl md:text-4xl font-black text-zinc-900 mb-6">
                {services[active].headline}
              </h3>

              <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-4xl mb-10 font-medium">
                {services[active].desc}
              </p>

              {/* DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {services[active].details.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                    <p className="text-sm text-zinc-700 font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* SCOPE */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 border-t border-zinc-200 pt-8">
                {services[active].scope.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-[11px] font-black uppercase text-zinc-800 tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
