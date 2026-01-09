"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRightLong, 
  faTerminal, 
  faFlask, 
  faWaveSquare, 
  faMicrochip, 
  faWind, 
  faDroplet, 
  faStethoscope, 
  faBolt,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

export default function IndustryDetailAlpha({ data, slug }: { data: any, slug: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted || !data) return <div className="min-h-screen bg-white" />;

  return <LaboratoryLayout data={data} slug={slug} />;
}

function LaboratoryLayout({ data, slug }: { data: any, slug: string }) {
  // 1. STYLE THEMES (Clinical Laboratory Palette)
  const themes: any = {
    "aerospace-defence": { color: "bg-orange-600", icon: faWind },
    "oil-gas": { color: "bg-amber-500", icon: faDroplet },
    "medical-health": { color: "bg-blue-600", icon: faStethoscope },
    "industry-4-0": { color: "bg-purple-600", icon: faMicrochip },
    "chemical-industry": { color: "bg-emerald-600", icon: faFlask },
    "power-energy": { color: "bg-cyan-500", icon: faBolt }
  };

  const currentTheme = themes[slug] || themes["industry-4-0"];
  const accentColor = currentTheme.color;
  const industryIcon = currentTheme.icon;

  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* SECTION 1: BRUTALIST SPLIT HERO */}
      <section className="relative min-h-screen flex flex-col lg:flex-row border-b border-zinc-200">
        <div className="lg:w-7/12 p-8 lg:p-20 flex flex-col justify-between border-r border-zinc-200">
          <div>
            <div className="flex items-center gap-4 mb-20">
              <div className={`w-3 h-3 rounded-full ${accentColor} animate-pulse`} />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-400">System_Protocol / {slug}</span>
            </div>
            
            <motion.h1 
              initial={{ x: -20, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              className="text-6xl lg:text-[9rem] font-black uppercase leading-[0.8] tracking-tighter mb-12"
            >
              {data.title}
            </motion.h1>
            
            <p className="text-xl lg:text-2xl text-zinc-600 max-w-xl font-medium border-l-4 border-zinc-100 pl-8 py-2">
              {data.desc}
            </p>
          </div>

          <div className="mt-20 flex flex-wrap gap-12">
            {data.outcomes.map((stat: any, i: number) => (
              <div key={i} className="min-w-[150px]">
                <p className="text-[10px] font-mono uppercase text-zinc-400 mb-2">{stat.label}</p>
                <p className="text-4xl font-black italic tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-5/12 bg-zinc-50 relative flex items-center justify-center p-12 overflow-hidden">
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 w-full aspect-square border-2 border-dashed border-zinc-200 rounded-full flex items-center justify-center"
          >
             <FontAwesomeIcon icon={industryIcon} className={`text-[12rem] opacity-10 ${accentColor.replace('bg-', 'text-')}`} />
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-zinc-200 text-[9px] font-mono tracking-widest text-zinc-400">
               CORE_COMPONENT_V1.0
             </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: VERTICAL TECHNICAL LOG */}
      <section className="max-w-[1440px] mx-auto py-32 px-8">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 sticky top-32 h-fit">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-6">Technical_Log.deploy</h2>
            <h3 className="text-5xl font-black uppercase leading-none tracking-tighter">Specialist<br/>Units</h3>
            <div className={`w-16 h-1.5 ${accentColor} mt-8`} />
          </div>

          <div className="lg:col-span-8 space-y-px bg-zinc-100 border border-zinc-100">
            {data.subServices.map((sub: any, i: number) => (
              <div key={sub.slug} className="group bg-white p-12 transition-all hover:bg-zinc-50">
                <div className="flex flex-col md:flex-row justify-between gap-12">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-zinc-300 mb-4 block">UNIT_0{i + 1}</span>
                    <h4 className="text-3xl font-black uppercase mb-6 group-hover:pl-4 transition-all duration-300 border-zinc-900">{sub.name}</h4>
                    <p className="text-zinc-500 max-w-md leading-relaxed mb-8 text-sm">{sub.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {sub.features?.map((f: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-[9px] font-bold uppercase tracking-tighter text-zinc-600">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/industries/${slug}/${sub.slug}`} className="w-16 h-16 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-all transform group-hover:-rotate-45">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLIANCE STRIP */}
      <section className="bg-zinc-900 py-12 overflow-hidden border-y border-white/10">
        <div className="flex whitespace-nowrap gap-16 items-center">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
               <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">Validation_Success</span>
               <span className="text-white font-black text-xl uppercase tracking-widest flex items-center gap-3">
                 <FontAwesomeIcon icon={faCircleCheck} className="text-zinc-700 text-sm" />
                 {data.compliance[i % data.compliance.length]}
               </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE LABORATORY REPORT (CASE STUDY) */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-[1000px] mx-auto px-8">
           <div className="bg-white border border-zinc-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-8 lg:p-20 relative">
              <div className="absolute top-0 right-0 p-6 border-l border-b border-zinc-100 font-mono text-[9px] text-zinc-300">
                LOG_ID: WS-ALPHA-{slug.toUpperCase()}
              </div>
              
              <div className="mb-16">
                <FontAwesomeIcon icon={faTerminal} className={`text-4xl mb-10 ${accentColor.replace('bg-', 'text-')}`} />
                <h5 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 mb-6">Tactical_Report_Analysis</h5>
                <h6 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic leading-[0.95]">
                  {data.caseStudy.title}
                </h6>
              </div>
              
              <p className="text-xl lg:text-2xl font-light text-zinc-700 leading-relaxed italic border-l-2 border-zinc-200 pl-10">
                "{data.caseStudy.result}"
              </p>
              
              <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex gap-3">
                   {data.mainTech.split(',').slice(0, 3).map((t: string, i: number) => (
                     <span key={i} className="px-4 py-2 bg-zinc-50 border border-zinc-100 text-[10px] font-mono uppercase text-zinc-500">
                       {t.trim()}
                     </span>
                   ))}
                </div>
                <button className="group font-mono text-[11px] uppercase tracking-widest flex items-center gap-4 hover:text-zinc-400 transition-colors">
                  <span className="border-b-2 border-zinc-900 pb-1">Technical_Whitepaper</span>
                  <FontAwesomeIcon icon={faWaveSquare} className="animate-pulse" />
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 5: BRUTALIST CTA */}
      <section className="py-40 border-t border-zinc-200 flex flex-col items-center justify-center">
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-zinc-400 mb-10">End_Of_Transmission</span>
        <h2 className="text-7xl lg:text-[12vw] font-black uppercase tracking-tighter leading-none mb-20 text-center">
          Let's<br/>Build.
        </h2>
        <Link href="/contact" className="group relative px-24 py-12 bg-zinc-950 text-white overflow-hidden transition-all hover:scale-105 active:scale-95">
           <span className="relative z-10 font-black uppercase tracking-[0.6em] text-xs">Initiate Protocol</span>
           <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${accentColor}`} />
        </Link>
      </section>

    </div>
  );
}