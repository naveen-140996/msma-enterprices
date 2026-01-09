"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faLayerGroup, 
  faGear, 
  faMicrochip, 
  faCircleCheck,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';

export default function ProductDetailAlpha({ data }: { data: any }) {
  if (!data) return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h2 className="text-9xl font-black text-zinc-200">404</h2>
        <p className="text-zinc-500 font-bold uppercase tracking-widest -mt-8">Product Data Missing</p>
        <Link href="/" className="mt-8 inline-block text-orange-600 font-black text-xs uppercase tracking-tighter border-b-2 border-orange-600 pb-1">Return to Catalog</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* PRODUCT HEADER */}
      <section className="pt-48 pb-16 bg-white border-b border-zinc-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
             <FontAwesomeIcon icon={data.icon || faMicrochip} className="text-[20rem]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <Link href="/" className="group text-zinc-400 hover:text-orange-600 font-black text-[10px] uppercase tracking-widest mb-12 inline-flex items-center transition-all">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3 transition-transform group-hover:-translate-x-2" /> 
            Back to Catalog
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                 <span className="bg-orange-600 text-white px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest">
                    {data.model}
                 </span>
                 <span className="text-zinc-400 font-black text-[10px] uppercase tracking-[0.3em]">
                    Engineering Grade // Hardware
                 </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-black uppercase text-black mb-8 leading-[0.9] tracking-tighter">
                {data.name}
              </h1>
              <p className="text-xl lg:text-2xl text-zinc-500 font-medium max-w-2xl leading-relaxed italic border-l-4 border-orange-600 pl-6">
                "{data.desc}"
              </p>
            </div>
            
            <div className="bg-zinc-950 p-10 rounded-[2rem] text-white w-full lg:w-80 shadow-2xl shadow-orange-950/20">
              <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> Status: Build to Order
              </p>
              <p className="text-sm text-zinc-400 mb-8 leading-snug font-medium">Standard lead time: 8-12 weeks for custom configuration.</p>
              <button className="w-full py-5 bg-orange-600 text-white font-black text-[11px] uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-orange-600/20">
                Initiate Technical Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CORE */}
      <section className="py-24 max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* LEFT: Capabilities & Features */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-600 mb-10 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-orange-600"></div>
                Key Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features?.map((f: string, i: number) => (
                  <div key={i} className="group p-8 bg-white border border-zinc-200 rounded-3xl flex flex-col gap-6 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/5 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </div>
                    <p className="text-sm font-black text-black uppercase leading-tight tracking-tight">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PRODUCT SHOWCASE (DIAGRAMS) */}
         {/* PRODUCT SHOWCASE (DIAGRAMS) */}
<div className="pt-12">
    <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">System Architecture</h2>
    <div className="aspect-video bg-zinc-200 rounded-[3rem] overflow-hidden border border-zinc-300 relative group flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/10 group-hover:bg-transparent transition-all z-10">
            <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl pointer-events-none">
              Detailed View // {data.name}
            </span>
        </div>
        
        {/* Fix: Wrap the plain text in a string or template literal to avoid parsing errors */}
        <p className="text-zinc-400 font-mono text-[10px] p-8 text-center uppercase tracking-tighter">
          {`} integration]`}
        </p>
    </div>
</div>
          </div>

          {/* RIGHT: Technical Specifications Data */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="bg-zinc-950 rounded-[3rem] p-12 text-white border border-white/10 overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-600/20 blur-[80px] rounded-full"></div>
                
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-12 flex items-center gap-3">
                  <FontAwesomeIcon icon={faShieldHalved} /> Hard Specs // {data.model}
                </h3>
                
                <div className="space-y-8 relative z-10">
                  {Object.entries(data.specs || {}).map(([key, value]: any, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-1">{key}</span>
                        <span className="text-lg font-bold text-white uppercase tracking-tighter tracking-wide">{value}</span>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-orange-600/30 mb-2"></div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                  <p className="text-[10px] text-zinc-400 font-bold uppercase leading-relaxed tracking-wider italic">
                    Certified LabVIEW & NI hardware integration ensures 99.9% uptime and millisecond-level determinism. Contact our engineering team for custom FPGA-level modifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}