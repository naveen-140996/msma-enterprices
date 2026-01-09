"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Discovery & Product Analysis",
    desc: "We analyze your business goals, target users, and technical requirements to define a clear digital roadmap.",
    tags: ["Requirement Analysis", "Market Research"]
  },
  {
    id: "02",
    title: "System & UX Architecture",
    desc: "Designing scalable system architecture and user experiences that balance performance, usability, and growth.",
    tags: ["System Design", "UX Strategy"]
  },
  {
    id: "03",
    title: "Development & Integration",
    desc: "Building e-commerce platforms, web and mobile applications, and integrating APIs, payments, and cloud services.",
    tags: ["Web & App Dev", "API Integration"]
  },
  {
    id: "04",
    title: "Optimization & Growth",
    desc: "Optimizing performance, applying automation, and scaling through analytics, AI workflows, and digital marketing.",
    tags: ["AI Automation", "Digital Marketing"]
  }
];


export default function ProcessAlpha() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section Title */}
        <div className="mb-20">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">  Delivery Framework</h3>
          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter">
            From Idea to <span className="italic text-zinc-200">Growth.</span>
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
              Ready to launch your <span className="text-orange-500 font-black tracking-tighter">
                Digital Product?
              </span>
            </p>

            <button className="px-8 py-3 bg-orange-600 hover:bg-white hover:text-zinc-900 text-white font-black uppercase text-[10px] tracking-widest transition-all">
              Start a Consultation
            </button>
        </div>
      </div>
    </section>
  );
}