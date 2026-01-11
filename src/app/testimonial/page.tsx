"use client";

import { motion } from "framer-motion";
import HeaderAlpha from "@/components/headers/HeaderAlpha";
import FooterAlpha from "@/components/footers/FooterAlpha";
import { useState, useEffect } from "react";


const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, D2C E-Commerce Brand",
    quote:
      "We started with just an idea. The team helped us design, build, and scale a full e-commerce platform. Our revenue grew steadily within months.",
    result: "+182% Revenue Growth",
  },
  {
    name: "Sneha Rao",
    role: "Head of Marketing, SaaS Company",
    quote:
      "Their marketing analytics and automation transformed our campaigns. We finally had clarity on what works and what doesn’t.",
    result: "-41% Cost, +3.2x ROI",
  },
  {
    name: "Karthik Iyer",
    role: "CTO, Enterprise Web Platform",
    quote:
      "From architecture to deployment and reporting automation, everything was handled professionally and at scale.",
    result: "99.9% Platform Stability",
  },
];

/* ------------------ PAGE ------------------ */

export default function TestimonialPage() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <HeaderAlpha />

      <main className="bg-white text-zinc-900">

        {/* ================= HERO ================= */}
        <section className="relative bg-[#0b0d10] text-white pt-36 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{ x: ["-30%", "30%", "-30%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 left-0 w-1/2 bg-white/10 blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black"
            >
              Client Success Stories
            </motion.h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-300">
              From idea validation to scalable platforms, marketing growth,
              and AI-powered automation — our clients grow with clarity and confidence.
            </p>
          </div>
        </section>

        {/* ================= CLIENT JOURNEY ================= */}
        <section className="md:py-32 py-10 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-black text-center mb-20">
              How Our Clients Grow With Us
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
              <img
                src="/assets/images/product-detail.jpg"
                alt="Idea to Product"
                className="rounded-3xl shadow-xl"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  From Idea to Product Development
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  We work closely with clients from the early idea stage —
                  validating business models, designing UX, and building
                  scalable e-commerce websites and web applications.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-28 md:flex-row-reverse">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Marketing Growth & Performance Analytics
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  Using data-driven marketing analysis, we optimize traffic,
                  conversions, and ROI through SEO, paid campaigns,
                  and conversion optimization.
                </p>
              </div>
              <img
                src="/assets/images/marketing-growth.webp"
                alt="Marketing Growth"
                className="rounded-3xl shadow-xl"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="/assets/images/ai-automation.jpg"
                alt="AI Automation"
                className="rounded-3xl shadow-xl"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  AI Automation & Smart Reporting
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  We implement AI-driven reporting and automation —
                  reducing manual work, improving insights, and enabling
                  faster business decisions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIAL SLIDER ================= */}
        <section className="md:py-32 py-10 bg-[#0b0d10] text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-black mb-16">
              What Our Clients Say
            </h2>

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
            >
              <p className="text-xl text-zinc-200 leading-relaxed">
                “{testimonials[active].quote}”
              </p>

              <div className="mt-8">
                <p className="font-bold text-lg">
                  {testimonials[active].name}
                </p>
                <p className="text-sm text-zinc-400">
                  {testimonials[active].role}
                </p>
                <p className="mt-2 text-orange-400 font-semibold">
                  {testimonials[active].result}
                </p>
              </div>
            </motion.div>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    active === i ? "bg-orange-500" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterAlpha />
    </>
  );
}
