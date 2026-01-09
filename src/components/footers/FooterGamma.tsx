"use client";
import React from 'react';
import { Terminal, Cpu, Share2, Database, ShieldCheck } from 'lucide-react';

export default function FooterGamma() {
  return (
    <footer className="bg-[#05080F] text-white pt-24 pb-8 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Logo Section */}
          <div className="md:col-span-4 border-l border-blue-600/30 pl-8 space-y-8">
            <div className="flex items-center gap-3">
              <Terminal className="text-blue-500" />
              <h2 className="font-mono text-2xl font-black tracking-widest uppercase">VI_SYNC</h2>
            </div>
            <p className="text-xs text-slate-400 font-mono leading-relaxed uppercase">
              // ENGINEERING_INTEL <br />
              // HARDWARE_CENTRIC_SYSTEMS <br />
              // REAL_TIME_VALIDATION
            </p>
            <div className="flex gap-6 pt-4">
              <Share2 className="text-blue-500 hover:text-white cursor-pointer transition-colors" size={20} />
              <Cpu className="text-blue-500 hover:text-white cursor-pointer transition-colors" size={20} />
              <Database className="text-blue-500 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </div>

          {/* Capabilities Col */}
          <div className="md:col-span-4 grid grid-cols-1 gap-12">
            <div>
              <h4 className="text-blue-500 font-mono text-[10px] mb-8 uppercase tracking-[0.4em] flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500" /> [Core_Capabilities]
              </h4>
              <ul className="space-y-4 font-mono text-[11px] text-slate-400">
                {["Hardware Test & Automation", "Data Acquisition & Control", "Simulation & HIL Systems", "AI-Driven Analytics"].map(c => (
                  <li key={c} className="hover:text-blue-400 cursor-pointer transition-all">{`> ${c}`}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nav & Info */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-blue-500 font-mono text-[10px] mb-8 uppercase tracking-[0.4em] flex items-center gap-2">
                 <div className="w-1 h-1 bg-blue-500" /> [Node_Directory]
              </h4>
              <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-slate-400 uppercase">
                 {["About", "Services", "Portfolio", "Contact", "Privacy", "Terms"].map(l => (
                   <span key={l} className="hover:underline cursor-pointer">_{l}</span>
                 ))}
              </div>
            </div>
            
            <div className="pt-12 flex items-center gap-4">
               <ShieldCheck size={32} className="text-blue-900" />
               <p className="text-[9px] font-mono text-slate-500 uppercase">Designed for aerospace, defence, and high-reliability industrial test environments.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between text-[9px] font-mono text-slate-600 uppercase tracking-widest">
          <p>© 2025 VI WebSync // System_Operational</p>
          <p className="italic">All marks™ registered to respective owners.</p>
        </div>
      </div>
    </footer>
  );
}