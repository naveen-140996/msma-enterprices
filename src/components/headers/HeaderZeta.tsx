"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faMicrochip, 
  faLayerGroup, 
  faCircleNodes,
  faTerminal
} from '@fortawesome/free-solid-svg-icons';

export default function HeaderZeta({ activeTier, setTier }: any) {
  // Navigation Data based on Engineering Foundations
  const navData = {
    disciplines: [
      { name: 'NI LabVIEW & PXI', path: '/labview-core' },
      { name: 'FPGA & Real-Time Control', path: '/real-time-fpga' },
      { name: 'Applied AI & Vision', path: '/applied-ai' },
    ],
    hardware: [
      { name: 'Pyro Firing Setup Tool', path: '/products/pyro' },
      { name: 'Custom DAQ Chassis', path: '/products/daq' },
      { name: 'Signal Conditioning', path: '/products/signal' },
    ],
    solutions: [
      { name: 'Radar Echo Simulation', path: '/radarecho' },
      { name: 'Aerospace Checkout Systems', path: '/checkout' },
      { name: 'HIL & Validation', path: '/hil' },
      { name: 'Web & ERP Connectivity', path: '/connectivity' },
    ]
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] z-[1000]">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 flex items-center justify-between shadow-2xl">
        
        {/* LEFT: Version Switcher (The Action Tab) */}
        <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5">
          {['alpha', 'gamma', 'zeta'].map((tier) => (
            <button
              key={tier}
              onClick={() => setTier(tier)}
              className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-tighter transition-all ${
                activeTier === tier 
                ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' 
                : 'text-zinc-500 hover:text-white'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* CENTER: Brand */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white font-black tracking-tighter text-lg leading-none uppercase italic">
            VI<span className="text-cyan-400">Sync</span>
          </span>
        </Link>

        {/* RIGHT: Navigation & Action */}
        <div className="flex items-center gap-6">
          <nav className="hidden xl:flex items-center">
            <NavDropdown title="Disciplines" items={navData.disciplines} icon={faCircleNodes} />
            <NavDropdown title="Systems" items={navData.solutions} icon={faLayerGroup} />
          </nav>

          <Link 
            href="/consult" 
            className="group relative bg-white text-black px-6 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-8"
          >
            <span className="relative z-10">Initialize</span>
            <span className="absolute right-3 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </Link>
        </div>
        
      </div>
    </header>
  );
}

function NavDropdown({ title, items, icon }: any) {
  return (
    <div className="relative group">
      <button className="px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white flex items-center gap-2 transition-all">
        {title}
        <FontAwesomeIcon icon={faChevronDown} className="text-[7px] opacity-30 group-hover:rotate-180 transition-transform" />
      </button>
      
      <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <div className="w-56 bg-zinc-900 border border-white/10 rounded-2xl p-2 shadow-3xl">
          {items.map((item: any) => (
            <Link key={item.path} href={item.path} className="block px-4 py-3 text-[9px] font-bold text-zinc-500 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}