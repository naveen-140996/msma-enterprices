"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTerminal, faMicrochip, faCircle } from '@fortawesome/free-solid-svg-icons';

export default function ServiceDetailZeta({ slug, data }: { slug: string, data: any }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-40 pb-20 selection:bg-orange-500">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-12">
          <Link href="/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-orange-500 transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
          </Link>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            Systems / {data?.category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
              {data?.title}<span className="text-orange-500">.</span>
            </h1>
            
            <div className="flex items-center gap-6 mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl">
              <FontAwesomeIcon icon={faTerminal} className="text-orange-500 text-2xl" />
              <p className="text-xl text-zinc-400 font-medium italic">"{data?.description}"</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data?.features?.map((f: string, i: number) => (
                <div key={i} className="group p-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl">
                  <div className="bg-zinc-900 p-6 rounded-[calc(1rem-1px)] h-full">
                    <FontAwesomeIcon icon={faCircle} className="text-[6px] text-orange-500 mb-4 block" />
                    <h4 className="text-sm font-black uppercase tracking-widest text-white group-hover:text-orange-500 transition-colors">{f}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-4">
              <div className="p-8 rounded-[2rem] bg-orange-600 shadow-[0_20px_50px_rgba(234,88,12,0.3)]">
                <FontAwesomeIcon icon={faMicrochip} className="text-3xl mb-6 text-white" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-orange-200 mb-2">Hardware/Software Sync</h3>
                <p className="text-2xl font-bold leading-tight">{data?.techStack}</p>
              </div>
              
              <div className="p-8 rounded-[2rem] border border-white/10 bg-zinc-900/50 backdrop-blur-xl">
                <p className="text-[10px] font-black uppercase text-zinc-500 mb-4 tracking-widest">Security & Compliance</p>
                <p className="text-sm text-zinc-300 leading-relaxed">System validated for mission-critical deployments with redundant safety protocols and real-time deterministic monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}