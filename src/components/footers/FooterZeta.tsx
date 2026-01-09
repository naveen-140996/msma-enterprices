"use client";
import React from 'react';
import { Linkedin, Mail, ArrowRight, Globe, Layers } from 'lucide-react';

export default function FooterZeta() {
  return (
    <footer className="bg-black text-white pt-32 pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-10">
        
        {/* Main Interface Row */}
        <div className="grid lg:grid-cols-12 gap-20 pb-24">
          <div className="lg:col-span-5 space-y-12">
            <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">
              VIWEB<span className="text-zinc-800">SYNC</span>
            </h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.2em] leading-loose max-w-sm">
              Engineering intelligence for connected systems. Providing real-time validation for the world’s most demanding sectors.
            </p>
            <div className="flex gap-8 border-l border-zinc-800 pl-8">
              <Linkedin className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={24} />
              <Mail className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={24} />
              <Globe className="text-zinc-600 hover:text-white transition-colors cursor-pointer" size={24} />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { title: "Capabilities", items: ["Hardware Test", "DAQ Control", "HIL Systems", "AI Analytics"] },
              { title: "Validation", items: ["NI LabVIEW", "PXI / cRIO", "FPGA / RT", "Traceability"] },
              { title: "Company", items: ["Solutions", "Case Studies", "About Us", "Contact"] }
            ].map((section) => (
              <div key={section.title}>
                <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-10">{section.title}</p>
                <ul className="space-y-6">
                  {section.items.map(item => (
                    <li key={item} className="group flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white cursor-pointer transition-all">
                      <div className="w-1 h-1 bg-zinc-800 group-hover:bg-white transition-colors" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Glass-Card Bottom Bar */}
        <div className="relative p-1 bg-gradient-to-r from-zinc-800 to-transparent">
          <div className="bg-[#050505] p-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Layers className="text-zinc-700" size={20} />
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest max-w-md">
                Engineered by professionals with experience supporting aerospace, defence, and industrial test environments.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-6 text-[10px] font-black uppercase tracking-tighter text-zinc-300">
                <span className="hover:text-white cursor-pointer">Privacy.Brief</span>
                <span className="hover:text-white cursor-pointer">Terms.Usage</span>
              </div>
              <p className="text-[9px] font-mono text-zinc-700 uppercase">© 2025 VI WebSync. V_2.0.25</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}