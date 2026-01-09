"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiPython, SiTypescript, SiAmazonwebservices, 
  SiDocker, SiOpenai, SiN8N, SiCplusplus 
} from 'react-icons/si';
import { PiCircuitryBold } from 'react-icons/pi';

const tools = [
  { name: "NI LabVIEW", icon: <span className="text-5xl font-black text-[#FFD100]">LV</span>, color: "#FFD100" },
  { name: "PXI / cRIO Systems", icon: <PiCircuitryBold className="text-5xl" />, color: "#ea580c" },
  { name: "Embedded C++", icon: <SiCplusplus className="text-5xl" />, color: "#00599C" },
  { name: "Next.js / React", icon: <SiReact className="text-5xl" />, color: "#00D8FF" },
  { name: "Python AI / ML", icon: <SiPython className="text-5xl" />, color: "#3776AB" },
  { name: "TypeScript", icon: <SiTypescript className="text-5xl" />, color: "#3178C6" },
  { name: "AWS Cloud", icon: <SiAmazonwebservices className="text-5xl" />, color: "#FF9900" },
  { name: "n8n Automation", icon: <SiN8N className="text-5xl" />, color: "#FF6C5C" },
  { name: "OpenAI", icon: <SiOpenai className="text-5xl" />, color: "#10a37f" },
  { name: "Docker", icon: <SiDocker className="text-5xl" />, color: "#2496ED" },
];

export default function TechStackPulse() {
  return (
    <section className="py-10 md:py-40 bg-white relative overflow-hidden">
      {/* Minimal background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/20 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Clean, elegant header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.5em] text-orange-600 block mb-6"
          >
            Technology Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight"
          >
            Powered by Best-in-Class Tools
          </motion.h2>
        </div>

        {/* Orbiting / floating icons with original colors always visible */}
        <div className="relative flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-24">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.1, 
                duration: 0.8,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.2,
                y: -10,
                transition: { duration: 0.4 }
              }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon in full original brand color by default */}
              <div 
                className="transition-all duration-500 group-hover:drop-shadow-2xl"
                style={{ color: tool.color }}
              >
                {tool.icon}
              </div>

              {/* Tool name - subtle, always visible below */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="mt-6 text-sm font-medium text-zinc-600 uppercase tracking-wide group-hover:text-zinc-900 transition-colors duration-300"
              >
                {tool.name}
              </motion.p>

              {/* Gentle floating animation */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                }}
                transition={{ 
                  duration: 6 + i * 0.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0"
              />
            </motion.div>
          ))}
        </div>

        {/* Subtle footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-28 text-center"
        >
          <p className="text-sm text-zinc-500 font-medium">
            Integrated ecosystem for mission-critical engineering solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}