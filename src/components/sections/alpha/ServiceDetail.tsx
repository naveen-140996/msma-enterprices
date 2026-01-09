"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheckCircle, faCogs } from '@fortawesome/free-solid-svg-icons';

export default function ServiceDetailAlpha({ slug, data }: { slug: string, data: any }) {
  if (!data) return <div className="p-20 font-black uppercase">Data Loading...</div>;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Bar Area */}
      <div className="pt-32 pb-12 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-[1440px] mx-auto px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-widest mb-8 hover:gap-4 transition-all">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Sync
          </Link>
          <span className="block text-orange-600 font-black text-[12px] tracking-[0.4em] uppercase mb-4">
            {data.category || "Engineering Service"}
          </span>
          <h1 className="text-6xl lg:text-8xl font-black text-black leading-none uppercase tracking-tighter">
            {data.title}
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Deep Info */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-black text-black uppercase mb-6 italic">Technical Overview</h2>
            <p className="text-xl text-zinc-500 leading-relaxed mb-12">
              {data.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features?.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-4 p-6 border border-zinc-100 rounded-2xl bg-white shadow-sm">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-orange-600 mt-1" />
                  <div>
                    <span className="font-black text-[11px] uppercase tracking-tight text-black block mb-1">{feature}</span>
                    <span className="text-[10px] text-zinc-400 uppercase">Validated Technical Spec</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Architecture & Tech Stack */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-900 rounded-[2rem] p-8 text-white sticky top-40">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faCogs} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-widest">Stack Details</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Core Technology</p>
                  <p className="text-lg font-bold text-white uppercase">{data.techStack}</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Delivery Model</p>
                  <p className="text-lg font-bold text-white uppercase italic">Modular Integration</p>
                </div>
              </div>

              <button className="w-full mt-10 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl">
                Consult with an Architect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}