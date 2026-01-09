"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  faMicrochip, 
  faShieldHalved, 
  faChartLine, 
  faAtom 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pillars = [
  {
    icon: faShieldHalved,
    title: "Enterprise Reliability",
    desc: "Secure, scalable platforms built for high-traffic e-commerce and mission-critical business operations."
  },
  {
    icon: faAtom,
    title: "System Architecture",
    desc: "Bridging frontend experience, backend logic, cloud infrastructure, and AI-driven automation."
  },
  {
    icon: faMicrochip,
    title: "Product Engineering",
    desc: "Custom web and mobile applications engineered for performance, scalability, and long-term growth."
  },
  {
    icon: faChartLine,
    title: "Business Intelligence",
    desc: "Transforming user data and system insights into measurable growth and operational efficiency."
  }
];

export default function AboutAlpha() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* TOP GRID: HERO TEXT & DIAGRAM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                E-Commerce & Application Architecture
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.85] mb-8"
            >
              WE BUILD <br />
              <span className="text-orange-500 italic">DIGITAL COMMERCE.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
            >
              We are a technology-driven IT services company specializing in e-commerce platforms,
              web applications, mobile apps, and AI-powered digital systems.  
              Our solutions are designed to scale with business growth, performance demands, and evolving user experiences.
            </motion.p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200 p-1">
              <div className="w-full h-full bg-white rounded-[2.8rem] flex items-center justify-center p-12 border border-zinc-100">
                <div className="text-center space-y-4">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">Digital Product Flow</div>
                  <div className="h-40 w-[2px] bg-gradient-to-b from-orange-500 via-zinc-200 to-zinc-50 mx-auto relative">
                    <div className="absolute top-0 -left-1 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                    <div className="absolute bottom-0 -left-1 w-3 h-3 bg-zinc-200 rounded-full" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-orange-500">Commerce ↔ Applications ↔ AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* BOTTOM GRID: PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-zinc-50/50 rounded-[2.5rem] border border-zinc-100 hover:border-orange-500 hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 bg-zinc-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                <FontAwesomeIcon icon={p.icon} className="text-lg" />
              </div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-zinc-900">{p.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed font-medium">{p.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}