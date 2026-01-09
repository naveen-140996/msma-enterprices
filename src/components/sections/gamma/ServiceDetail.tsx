"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircleInfo, faLayerGroup, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function ServiceDetailGamma({ slug, data }: { slug: string, data: any }) {
  if (!data) return <div className="p-20 text-zinc-400 font-medium">Synchronizing...</div>;

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-900 pt-40 pb-24 selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-[1200px] mx-auto px-8">
        
        {/* Simple Navigation */}
        <Link href="/" className="inline-flex items-center gap-3 text-zinc-400 font-medium text-sm mb-16 hover:text-zinc-800 transition-colors group">
          <FontAwesomeIcon icon={faArrowLeft} className="text-xs group-hover:-translate-x-1 transition-transform" /> 
          Back to Overview
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Main Content Area */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-zinc-200"></span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">{data.category}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-zinc-950 mb-8">
              {data.title}
            </h1>
            
            <p className="text-lg text-zinc-500 leading-relaxed mb-16 max-w-xl">
              {data.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleInfo} /> System Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.features?.map((f: string, i: number) => (
                  <div key={i} className="p-6 rounded-3xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm font-semibold text-zinc-800">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specification Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] border border-zinc-100 p-10 shadow-xl shadow-zinc-200/50">
              <div className="inline-flex p-4 rounded-2xl bg-zinc-50 text-zinc-400 mb-8">
                <FontAwesomeIcon icon={faLayerGroup} className="text-xl" />
              </div>
              
              <h2 className="text-2xl font-semibold mb-2">Technical Specification</h2>
              <p className="text-sm text-zinc-400 mb-10">Integration Architecture Details</p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <FontAwesomeIcon icon={faMicrochip} className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Architecture</p>
                    <p className="text-md font-medium text-zinc-800">{data.techStack}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100">
                  <p className="text-xs text-zinc-500 italic leading-relaxed">
                    "This system is engineered for long-term stability in clinical and research environments, emphasizing data integrity and user-centric control interfaces."
                  </p>
                </div>
              </div>

              <button className="w-full mt-10 py-5 bg-zinc-950 text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-all">
                Download Technical PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}