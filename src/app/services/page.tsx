"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeaderAlpha from "@/components/headers/HeaderAlpha";
import FooterAlpha from "@/components/footers/FooterAlpha";

/* ------------------ DATA ------------------ */

const services = [
  {
    title: "Web Application Development",
    desc: "Scalable, secure, and high-performing web applications using modern frameworks and cloud-ready architecture.",
  },
  {
    title: "E-Commerce Platforms",
    desc: "Conversion-focused e-commerce solutions with payment gateways, analytics, and inventory management.",
  },
  {
    title: "UI/UX Engineering",
    desc: "Design systems and interfaces built to maximize usability, accessibility, and engagement.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud migration, CI/CD pipelines, monitoring, and infrastructure automation.",
  },
  {
    title: "Backend & API Engineering",
    desc: "Robust backend services, REST & GraphQL APIs with high availability.",
  },
  {
    title: "Maintenance & Support",
    desc: "24/7 monitoring, optimization, security updates, and long-term technical support.",
  },
];

const industries = [
  "E-Commerce",
  "FinTech",
  "Healthcare",
  "SaaS",
  "Education",
  "Startups & Enterprises",
];

const techStack = [
  "React / Next.js",
  "Node.js / Java / Python",
  "AWS / Azure / GCP",
  "Docker / Kubernetes",
  "PostgreSQL / MongoDB",
  "CI/CD & DevOps Tools",
];

/* ------------------ PAGE ------------------ */

export default function ServicesPage() {
  const svgRef = useRef<SVGSVGElement>(null);


    useEffect(() => {
    if (!svgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hex-flow",
        { x: -140 },
        {
          x: 140,
          duration: 1,
          repeat: -1,
          ease: "linear",
          stagger: {
            each: 0,
          },
        }
      );
    }, svgRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
    <HeaderAlpha />
    <main className="overflow-hidden bg-white text-zinc-900">

      {/* ================= HERO ================= */}
   <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#f8fafc]">

      {/* ================= FULL-WIDTH HEX BACKGROUND ================= */}
      <div className="absolute inset-0 z-10">
        <svg
          ref={svgRef}
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
        >
          <defs>
            {/* Hexagon shape */}
            <symbol id="hex">
              <polygon
                points="60,8 112,38 112,98 60,128 8,98 8,38"
                fill="none"
                stroke="#d4d4d8"
                strokeWidth="1.2"
              />
            </symbol>

            {/* Clip for flow line */}
            <clipPath id="hexClip">
              <polygon points="60,8 112,38 112,98 60,128 8,98 8,38" />
            </clipPath>
          </defs>

          {/* ================= DIAGONAL GRID ================= */}
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 18 }).map((_, col) => {
              const x = col * 120 + (row % 2 ? 60 : 0);
              const y = row * 105;

              return (
                <g key={`${row}-${col}`} transform={`translate(${x}, ${y})`}>
                  {/* Hexagon outline */}
                  <use href="#hex" />

                  {/* SINGLE FLOW LINE */}
                  <g clipPath="url(#hexClip)">
                    <line
                      className="hex-flow"
                      x1="-60"
                      y1="150"
                      x2="180"
                      y2="-40"
                      stroke="#fb923c"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.75"
                    />
                  </g>
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-6xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black leading-tight text-zinc-900"
        >
          Intelligent IT Solutions <br />
          for Digital Transformation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto"
        >
          We design, build, and scale secure digital platforms using modern
          technologies, cloud infrastructure, and enterprise-grade engineering
          practices.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-full bg-[#4c4c4c] text-white font-semibold shadow-lg hover:scale-105 transition">
            Book an Appoinment
          </button>
        </motion.div>
      </div>
    </section>
      {/* ================= SERVICES ================= */}
   <section className="py-10 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl font-black text-center mb-16">
          Our Core IT Services
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="${className} custom-dot"></span>`,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="services-swiper"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-lg border h-[200px] md:h-[180px]"
              >
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* ================= INDUSTRIES ================= */}
     <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-black text-center mb-16">
          Industries We Serve
        </h2>

        {/* Slider Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-industries-slide whitespace-nowrap">
            {[...industries, ...industries].map((item, i) => (
              <div
                key={i}
                className="px-8 py-4 bg-zinc-100 rounded-full font-semibold shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-20">
            Our Delivery Process
          </h2>

          <div className="grid md:grid-cols-4 gap-12">
            {["Discover", "Design", "Develop", "Deploy"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl font-black text-orange-500 mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-bold text-lg">{step}</h4>
                <p className="mt-3 text-zinc-300 text-sm">
                  Structured workflows ensuring quality, speed, and transparency.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16">
          Technology Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-zinc-50 rounded-xl font-semibold shadow"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
    <FooterAlpha />
    </>
    
  );
}
