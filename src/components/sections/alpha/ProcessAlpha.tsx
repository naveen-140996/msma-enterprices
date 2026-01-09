"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery & Analysis",
    desc: "We deep-dive into your hardware constraints, signal requirements, and business logic to define the scope.",
    tags: ["Feasibility Study", "Tech Stack Selection"]
  },
  {
    id: "02",
    title: "Architecture Design",
    desc: "Designing the bridge between physical and digital. From PCB schematics to LabVIEW Actor Frameworks.",
    tags: ["System Modeling", "Safety Logic"]
  },
  {
    id: "03",
    title: "Rapid Integration",
    desc: "Deployment of custom hardware and software. We build the dashboards and the control loops in parallel.",
    tags: ["HIL Testing", "UI/UX Deployment"]
  },
  {
    id: "04",
    title: "AI Optimization",
    desc: "Applying machine learning agents to your data stream to predict failures and automate growth.",
    tags: ["Predictive Maint", "Autonomous Workflows"]
  }
];

export default function ProcessAlpha() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section Title */}
        <div className="mb-20">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Execution Framework</h3>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter">
            From Lab to <span className="italic text-zinc-200">Scale.</span>
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-100 border border-zinc-100">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-10 hover:bg-zinc-50 transition-colors group relative overflow-hidden">
              {/* Step Number Background */}
              <span className="absolute -right-2 -top-4 text-[120px] font-black text-zinc-50 group-hover:text-orange-50/50 transition-colors pointer-events-none">
                {step.id}
              </span>

              <div className="relative z-10">
                <div className="w-8 h-[2px] bg-orange-500 mb-8" />
                <h4 className="text-xl font-black text-zinc-900 uppercase tracking-tighter mb-4 leading-tight">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span key={tag} className="text-[8px] font-bold py-1 px-2 bg-zinc-100 text-zinc-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for the Process */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-900 p-8 bg-zinc-900 text-white">
            <p className="text-sm font-medium tracking-wide uppercase">
              Ready to start the <span className="text-orange-500 font-black tracking-tighter">Integration Phase?</span>
            </p>
            <button className="px-8 py-3 bg-orange-600 hover:bg-white hover:text-zinc-900 text-white font-black uppercase text-[10px] tracking-widest transition-all">
              Consult an Engineer
            </button>
        </div>
      </div>
    </section>
  );
}