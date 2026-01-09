"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FooterAlpha() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navData = {
    quickLinks: [
      { name: 'Aerospace Tech', path: '/aerospace-tech' },
      { name: 'LabVIEW Solutions', path: '/labview' },
      { name: 'Telemetry Systems', path: '/telemetry' },
      { name: 'Hardware Design', path: '/hardwaredesign' },
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Careers', path: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' }, // CORRECT: Points to app/privacy/page.tsx
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
    ]
  };

  if (!mounted) return null;

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-zinc-100">
      
      {/* 1. ARCHITECTURAL BACKGROUND WATERMARK */}
      <div className="absolute -bottom-10 right-0 select-none pointer-events-none opacity-[0.03] font-black text-[15vw] uppercase leading-none text-zinc-900">
        VIWEBSYNC
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 2. TOP CTA SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 pb-20 border-b border-zinc-100">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-none mb-6">
              Ready to automate <br />
              <span className="text-orange-500">your infrastructure?</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl font-medium">
              Join leading aerospace and industrial firms leveraging our mission-critical 
              LabVIEW and hardware integration expertise.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end lg:justify-end">
            <Link href="/contact" className="group relative px-10 py-5 bg-zinc-900 text-white text-xs font-black uppercase tracking-[0.4em] overflow-hidden transition-all">
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* 3. MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-20">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rotate-45" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">VIWEB<span className="text-orange-500">SYNC</span></span>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Main Office</p>
              <address className="not-italic text-sm text-zinc-600 font-medium leading-relaxed">
                Coimbatore, Tamil Nadu<br />
                India, 641001
              </address>
            </div>
          </div>

          {/* Columns */}
          {Object.keys(navData).map((sectionKey) => (
            <div key={sectionKey}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-8">
                {sectionKey === 'quickLinks' ? 'Expertise' : sectionKey}
              </h4>
              <ul className="space-y-4">
                {(navData as any)[sectionKey].map((item: any) => (
                  <li key={item.name}>
                    <Link 
                      href={item.path} 
                      className="text-xs font-bold text-zinc-600 hover:text-orange-600 uppercase tracking-widest transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright Info */}
          <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
            <span>© 2025 VIWEB SYNC</span>
            <span className="w-10 h-[1px] bg-zinc-100" />
            <Link href="/privacy" className="text-orange-500 hover:text-zinc-900 transition-colors">Privacy Protocol</Link>
          </div>

          {/* Social / Connect */}
          <div className="flex items-center gap-10">
            <Link href="mailto:hello@viwebsync.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 hover:text-orange-500 transition-colors">
              hello@viwebsync.com
            </Link>
            <div className="flex gap-4">
              {['LN', 'TW', 'GH'].map(social => (
                <span key={social} className="text-[10px] font-black text-zinc-300 hover:text-zinc-900 cursor-pointer transition-colors">
                  {social}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}