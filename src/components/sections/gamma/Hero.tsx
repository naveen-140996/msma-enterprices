"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroGamma() {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const quotes = [
    { text: "DETERMINISTIC SYSTEMS", color: "from-cyan-400 to-blue-600" },
    { text: "MISSION CRITICAL DESIGN", color: "from-fuchsia-500 to-purple-600" },
    { text: "REAL-TIME ARCHITECTURE", color: "from-emerald-400 to-teal-600" }
  ];

  // 1. Initial Mount Safety
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1000, once: true });
    }
    return () => AOS.refresh();
  }, []);

  // 2. Typewriter Logic (Only runs after mount)
  useEffect(() => {
    if (!mounted) return;

    const currentQuote = quotes[quoteIdx].text;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentQuote.substring(0, displayText.length + 1));
        if (displayText === currentQuote) setTimeout(() => setIsDeleting(true), 2500);
      } else {
        setDisplayText(currentQuote.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setQuoteIdx((prev) => (prev + 1) % quotes.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, quoteIdx, mounted]);

  // 3. THE HYDRATION KILLER
  // By returning a placeholder with the exact same background color, 
  // we prevent the server from trying to hydrate complex AOS tags.
  if (!mounted) {
    return <section className="relative min-h-[100dvh] bg-[#020408]" />;
  }

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#020408] overflow-hidden">
      
      {/* 1. MESH GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-900/30 blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[130px] rounded-full opacity-40" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-900/15 blur-[100px] rounded-full opacity-30" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-4 mb-12 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl shadow-2xl" data-aos="fade-down">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/70">
            Gamma Protocol v4.0
          </span>
        </div>

        <h1 className="text-[11vw] md:text-[8.5vw] font-black tracking-tighter text-white leading-[0.8] mb-8 uppercase drop-shadow-2xl">
          Engineered<br />
          <span className="text-white/40 italic font-light tracking-widest">Precision.</span>
        </h1>

        {/* TYPEWRITER */}
        <div className="h-12 mb-20 flex justify-center items-center">
          <div className="bg-white/5 px-8 py-4 rounded-lg border border-white/5 backdrop-blur-sm">
            <p className={`font-mono text-sm md:text-2xl tracking-[0.4em] font-black uppercase bg-clip-text text-transparent bg-gradient-to-r ${quotes[quoteIdx].color}`}>
              {displayText}
              <span className="inline-block w-2 h-[1em] bg-white ml-2 animate-pulse" />
            </p>
          </div>
        </div>

        {/* PHOSPHOR BUTTON */}
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="500">
          <Link 
            href="/initialize" 
            className="group relative px-20 py-7 bg-white text-black overflow-hidden rounded-full transition-all duration-500 hover:bg-black hover:text-white"
          >
            <div className="absolute inset-0 border-[3px] border-white group-hover:scale-150 group-hover:opacity-0 transition-all duration-700 rounded-full" />
            <span className="relative z-10 text-[11px] font-black uppercase tracking-[0.5em] transition-all">
              Initialize Project
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* HUD OVERLAYS */}
      <div className="absolute bottom-12 left-12 hidden xl:flex flex-col gap-6">
        <div className="space-y-2">
            <div className="w-40 h-[1px] bg-white/20" />
            <p className="text-[9px] font-mono text-cyan-400 tracking-[0.4em] uppercase">Status: Core_Locked</p>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden xl:block">
        <div className="text-right space-y-4">
           <div className="flex gap-2 justify-end">
              {quotes.map((_, i) => (
                <div key={i} className={`h-1 w-8 transition-all duration-500 ${i === quoteIdx ? 'bg-white scale-x-110 shadow-[0_0_10px_white]' : 'bg-white/10'}`} />
              ))}
           </div>
           <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">
             Operational Layer
           </p>
        </div>
      </div>
    </section>
  );
}