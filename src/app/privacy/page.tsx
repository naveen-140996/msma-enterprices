"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-zinc-900 selection:bg-orange-500 selection:text-white">
      
      {/* 1. Header Section - Minimal & Architectural */}
      <header className="max-w-4xl mx-auto px-8 mb-20 border-l border-orange-500 pl-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-[0.5em] mb-4">
            Legal_Documentation // v1.0
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Privacy <br />
            <span className="text-zinc-200">Protocol.</span>
          </h1>
          <p className="mt-8 text-sm text-zinc-500 font-medium max-w-xl leading-relaxed">
            Last Updated: December 28, 2025. This document outlines the data integrity 
            and privacy standards maintained by VIWEB SYNC.
          </p>
        </motion.div>
      </header>

      {/* 2. Content Sections - No Boxes, Pure Lines */}
      <div className="max-w-4xl mx-auto px-8 space-y-20">
        
        {/* Section 01 */}
        <section className="grid md:grid-cols-4 gap-8 border-t border-zinc-100 pt-12">
          <div className="md:col-span-1">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">// 01_DATA_COLLECTION</span>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-black uppercase tracking-tight">Information Acquisition</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We collect information that you provide directly to us through our "Launch Solutions" forms 
              and contact portals. This typically includes your name, corporate email address, 
              and technical project requirements.
            </p>
          </div>
        </section>

        {/* Section 02 */}
        <section className="grid md:grid-cols-4 gap-8 border-t border-zinc-100 pt-12">
          <div className="md:col-span-1">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">// 02_USAGE</span>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-black uppercase tracking-tight">System Utilization</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Data is utilized strictly for engineering consultation and project delivery. We do not 
              utilize tracking cookies for marketing purposes. Your information is processed to ensure 
              the deterministic delivery of our LabVIEW and hardware services.
            </p>
          </div>
        </section>

        {/* Section 03 */}
        <section className="grid md:grid-cols-4 gap-8 border-t border-zinc-100 pt-12">
          <div className="md:col-span-1">
            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">// 03_PROTECTION</span>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-black uppercase tracking-tight">Security Standards</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              VIWEB SYNC implements industry-standard encryption for all data transmissions. 
              As an aerospace-aligned entity, we treat your technical specifications as 
              highly confidential mission-critical assets.
            </p>
          </div>
        </section>

        {/* 3. Footer Link - Returns to Main */}
        <footer className="pt-20 border-t border-zinc-100 flex justify-between items-center">
          <Link 
            href="/" 
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-orange-500 transition-colors"
          >
            <span className="w-8 h-[1px] bg-zinc-200 group-hover:w-12 group-hover:bg-orange-500 transition-all" />
            Return to Hub
          </Link>
          <p className="text-[9px] font-mono text-zinc-300 uppercase">
            © 2025 VIWEB SYNC // All Rights Reserved
          </p>
        </footer>
      </div>

    </main>
  );
}