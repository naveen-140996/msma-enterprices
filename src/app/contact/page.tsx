"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [activeNode, setActiveNode] = useState('01');

  return (
    <main className="min-h-screen bg-white pt-32 pb-16 selection:bg-orange-500 selection:text-white overflow-hidden">
      
      {/* 1. BACKGROUND GRID DETAIL (No Shadows, Pure Technical Lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8f8f8_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* HEADER: Architectural Approach */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-500 mb-6"
            >
              System_Inquiry_Terminal // v4.0
            </motion.p>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.75] text-zinc-900">
              Direct <br />
              <span className="text-zinc-100">Interface.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <div className="inline-block border-l-2 border-orange-500 pl-6 text-left">
                <span className="block text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">Awaiting Input</span>
                <span className="block text-2xl font-black text-zinc-900 uppercase italic">Ready_To_Sync</span>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* LEFT: INFORMATION ARCHITECTURE */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* Live Data Card */}
            <div className="relative p-8 border border-zinc-100 bg-white group overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-zinc-50 -mr-8 -mt-8 rotate-45 border-b border-zinc-100" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Connectivity_HUB
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="text-[9px] font-mono font-bold text-zinc-400 uppercase">Secure_Mail</p>
                  <p className="text-sm font-black text-zinc-900">HELLO@VIWEBSYNC.COM</p>
                </div>
                <div>
                  <p className="text-[9px] font-mono font-bold text-zinc-400 uppercase">Operations_Base</p>
                  <p className="text-sm font-black text-zinc-900">COIMBATORE, TN // IN</p>
                </div>
              </div>
            </div>

            {/* Availability Visualization */}
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Response_Bandwidth</span>
              <div className="flex gap-1 h-8 items-end">
                {[...Array(15)].map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ height: [10, 32, 10] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    className={`w-1 flex-grow ${i < 12 ? 'bg-zinc-900' : 'bg-zinc-100'}`}
                  />
                ))}
              </div>
              <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">Current Status: High_Availability</p>
            </div>
          </div>

          {/* RIGHT: ADVANCED INTERFACE FORM */}
          <div className="lg:col-span-8">
            <div className="border-t-2 border-zinc-900 pt-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                
                {/* Inputs with floating labels logic */}
                <div className="relative group">
                  <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-zinc-300 group-focus-within:text-orange-500 transition-colors">ID_Identification</span>
                  <input 
                    type="text"
                    placeholder="FULL NAME"
                    className="w-full bg-transparent border-b border-zinc-200 py-4 text-sm font-bold uppercase focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-200"
                  />
                </div>

                <div className="relative group">
                  <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-zinc-300 group-focus-within:text-orange-500 transition-colors">COM_Protocol</span>
                  <input 
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-zinc-200 py-4 text-sm font-bold uppercase focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-200"
                  />
                </div>

                <div className="md:col-span-2 relative group">
                  <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-zinc-300 group-focus-within:text-orange-500 transition-colors">Service_Path</span>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {['LabVIEW', 'Hardware', 'Aerospace', 'Other'].map((item) => (
                      <button 
                        key={item}
                        type="button"
                        onClick={() => setActiveNode(item)}
                        className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${activeNode === item ? 'bg-zinc-900 text-white border-zinc-900' : 'border-zinc-100 text-zinc-400 hover:border-zinc-900'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 relative group">
                  <span className="absolute -top-6 left-0 text-[9px] font-black uppercase tracking-widest text-zinc-300 group-focus-within:text-orange-500 transition-colors">Manifest_Description</span>
                  <textarea 
                    rows={4}
                    placeholder="BRIEF YOUR PROJECT REQUIREMENTS..."
                    className="w-full bg-transparent border-b border-zinc-200 py-4 text-sm font-bold uppercase focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-200 resize-none"
                  />
                </div>

                <div className="md:col-span-2 pt-8">
                  <button className="group relative w-full md:w-auto px-20 py-6 bg-zinc-900 overflow-hidden">
                    <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.6em] text-white">
                      Initialize_Transmission
                    </span>
                    <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-zinc-100" />
                    <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
                      All data processed via encrypted secure-tunnel
                    </p>
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER DETAIL (Architectural Stamp) */}
      <div className="mt-32 border-t border-zinc-50 pt-8 text-center px-8">
         <p className="text-[10px] font-black uppercase tracking-[1em] text-zinc-200">
           VIWEB SYNC // PRECISION INTEGRATION SYSTEMS
         </p>
      </div>
    </main>
  );
}