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
    { name: 'E-Commerce Development', path: '/services/ecommerce' },
    { name: 'Web & App Development', path: '/services/web-apps' },
    { name: 'AI & Automation', path: '/services/ai-automation' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blogs', path: '/blog' },
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ],
};


  if (!mounted) return null;

  return (
    <footer className="relative bg-white md:pt-24 pb-12 pt-10 overflow-hidden border-t border-zinc-100">
      
      {/* 1. ARCHITECTURAL BACKGROUND WATERMARK */}
      <div className="absolute -bottom-10 right-0 select-none pointer-events-none opacity-[0.03] font-black text-[15vw] uppercase leading-none text-zinc-900">
        MSMA
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* 2. TOP CTA SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 md:pb-20 pb-10 border-b border-zinc-100">
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 leading-none mb-6">
              Ready to build  <br />
              <span className="text-orange-500">your digital platform?</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl font-medium">
              Partner with us to design, build, and scale e-commerce platforms, web applications,
              AI-driven systems, and digital solutions tailored for modern businesses.
            </p>
          </div>
          <div className="lg:col-span-4 flex items-end lg:justify-end">
            <Link href="/contact" className="group relative px-10 py-5 bg-zinc-900 text-white text-xs font-black uppercase tracking-[0.4em] overflow-hidden transition-all">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>

        {/* 3. MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:py-20 py-10">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rotate-45" />
              </div>
              <span className="font-black text-xl tracking-tighter uppercase">MSMA <span className="text-orange-500">Enterprises</span></span>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">  Headquarters </p>
              <address className="not-italic text-sm text-zinc-600 font-medium leading-relaxed">
                Chennai, Tamil Nadu<br />
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
            <span>© 2025 MSMA Enterprises</span>
            <span className="w-10 h-[1px] bg-zinc-100" />
            <Link href="/privacy" className="text-orange-500 hover:text-zinc-900 transition-colors">Privacy Policy</Link>
          </div>

          {/* Social / Connect */}
          <div className="flex items-center gap-10">
            <Link href="mailto:hello@viwebsync.com" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 hover:text-orange-500 transition-colors">
              hello@msma.com
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