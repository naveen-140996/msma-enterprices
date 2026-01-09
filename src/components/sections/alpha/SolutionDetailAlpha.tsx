"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCode, faRobot, faDatabase, faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function SolutionDetailAlpha({ data }: { data: any }) {
  // CRASH PROTECTION: If data is undefined, stop here.
  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center font-black uppercase tracking-[0.4em] text-zinc-500">
          <p className="text-orange-600 text-5xl mb-4">Offline</p>
          Data Registry Sync Failed
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] pointer-events-none" />

      <section className="relative pt-48 pb-20 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-500 font-black text-[10px] uppercase tracking-[0.4em] mb-12 hover:gap-4 transition-all">
            <FontAwesomeIcon icon={faArrowLeft} /> Core Terminal
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-[1px] w-12 bg-orange-600" />
                 <span className="text-orange-500 font-black text-[10px] uppercase tracking-widest">{data.tagline}</span>
              </div>
              <h1 className="text-7xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8">
                {/* Safe splitting of the title */}
                {data.title?.includes(' / ') ? data.title.split(' / ')[0] : data.title}
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">{data.desc}</p>
            </div>

            <div className="flex flex-col justify-end">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl">
                <h3 className="text-orange-500 font-black text-[10px] uppercase mb-6 tracking-widest flex items-center gap-2">
                  <FontAwesomeIcon icon={faTerminal} /> Development Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.stack?.map((s: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-xs font-bold text-zinc-300 uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features?.map((feature: any, i: number) => (
            <div key={i} className="group p-10 bg-zinc-900/50 border border-white/5 rounded-[2rem] hover:border-orange-500/50 transition-all">
              <div className="w-12 h-12 bg-orange-600/10 rounded-xl flex items-center justify-center mb-8">
                <FontAwesomeIcon icon={i % 2 === 0 ? faCode : faRobot} className="text-orange-500 text-xl" />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4 tracking-tight">{feature.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.detail}</p>
            </div>
          ))}
          
          <div className="p-10 bg-gradient-to-br from-orange-600 to-orange-800 rounded-[2rem] flex flex-col justify-between">
            <FontAwesomeIcon icon={faDatabase} className="text-4xl text-white/20" />
            <div>
              <h4 className="text-2xl font-black uppercase text-white mb-2 leading-none">Ready for Integration</h4>
              <button className="mt-8 px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}