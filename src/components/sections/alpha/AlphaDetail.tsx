"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, faShieldHalved, faFileLines, 
  faTerminal, faMicrochip, faCompass, faRocket 
} from '@fortawesome/free-solid-svg-icons';

export default function AlphaDetail({ data, type }: { data: any; type: string }) {
  if (!data) return <div className="p-40 text-center font-black uppercase tracking-widest animate-pulse">Initializing System...</div>;

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-orange-500 selection:text-white font-sans">
      
      {/* SECTION 1: TACTICAL HERO */}
      <section className="relative pt-32 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>

        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <Link href="/" className="group inline-flex items-center gap-3 text-zinc-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-16 hover:text-orange-500 transition-all">
            <FontAwesomeIcon icon={faArrowLeft} className="group-hover:-translate-x-2 transition-transform" /> 
            Back to Command Suite
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-orange-600"></span>
                <span className="text-orange-500 font-black text-[11px] tracking-[0.5em] uppercase">
                  {data.category || 'Strategic Service'}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] uppercase tracking-tighter text-white mb-8">
                {data.title}
              </h1>
              <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed font-medium border-l-2 border-zinc-800 pl-8">
                {data.desc}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-tr-[40px] rounded-bl-[40px] min-w-[320px]">
                <FontAwesomeIcon icon={data.icon || faMicrochip} className="text-orange-500 text-2xl mb-4" />
                <h3 className="text-zinc-500 font-bold text-[9px] uppercase tracking-widest mb-2">Primary Architecture</h3>
                <p className="text-xl font-black text-white uppercase tracking-tight leading-none">
                  {data.tech}
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECHNICAL CONTENT & STICKY SIDEBAR */}
      <section className="py-24 max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-16">
                <FontAwesomeIcon icon={faTerminal} className="text-orange-600" />
                <h2 className="text-xs font-black uppercase tracking-[0.6em] text-zinc-400">Tactical Specifications</h2>
            </div>

            <div className="space-y-24">
              {data.categories?.map((cat: any, i: number) => (
                <div key={i} className="group relative">
                  <span className="absolute -left-12 top-0 text-zinc-200 font-black text-6xl select-none group-hover:text-orange-500/10 transition-colors">0{i+1}</span>
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-6">
                      {cat.label}
                    </h3>
                    <p className="text-zinc-600 text-lg leading-relaxed font-normal max-w-4xl">
                      {cat.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Tactical Sidebar */}
          <aside className="lg:w-[400px] lg:sticky lg:top-32">
            <div className="space-y-6">
              <div className="bg-zinc-900 rounded-[32px] p-10 text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl"></div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-8 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCompass} /> Operational Focus
                </h4>
                <ul className="space-y-4">
                  {data.points?.map((p: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[11px] font-bold uppercase tracking-wider text-zinc-300 border-b border-white/5 pb-3 last:border-0">
                      <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-[32px] p-10 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center text-orange-600 text-xl">
                     <FontAwesomeIcon icon={faShieldHalved} />
                   </div>
                   <div>
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900">Mission Assurance</h4>
                     <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter">MIL-SPEC / AS9100D Compliance</p>
                   </div>
                </div>
                <p className="text-[11px] leading-relaxed text-zinc-500 font-medium mb-8 uppercase tracking-wide">
                  Engineered for deterministic execution and validated via Hardware-in-the-Loop (HIL) safety protocols.
                </p>
                <button className="group w-full py-5 bg-zinc-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all flex items-center justify-center gap-3">
                  <FontAwesomeIcon icon={faFileLines} />
                  Download System Specs
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}