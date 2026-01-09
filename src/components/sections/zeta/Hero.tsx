"use client";
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HeroZeta() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [quoteIdx, setQuoteIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const protocols = [
    "DETERMINISTIC LOGIC",
    "PXI-SYSTEM INTEGRITY",
    "ULTRA-LOW LATENCY",
    "MISSION CRITICAL RT"
  ];

  // 1. Initial Mount & AOS Setup
  useEffect(() => {
    setMounted(true);
    // Only init AOS if we are in the browser
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 1200, once: true });
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      // Use window dimensions for normalized mapping
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      AOS.refresh(); // Clean up AOS on unmount
    };
  }, []);

  // 2. Typewriter Logic (Only runs after mount)
  useEffect(() => {
    if (!mounted) return;

    let timeout: NodeJS.Timeout;
    const current = protocols[quoteIdx];
    
    if (displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 60);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setQuoteIdx((prev) => (prev + 1) % protocols.length);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, quoteIdx, mounted]);

  // 3. NUCLEAR HYDRATION GUARD
  // If we haven't mounted, return a simple div with the same background color.
  // This prevents the server from creating IDs/Refs that the client might change.
  if (!mounted) {
    return <section className="min-h-[100dvh] bg-[#020202]" />;
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-[#020202] overflow-hidden cursor-none"
    >
      
      {/* 1. THE NEURAL MESH */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 transition-transform duration-700 ease-out"
          style={{ 
            transform: `scale(1.1) translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            backgroundImage: `radial-gradient(circle at 50% 50%, #1e293b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} 
        />
        <div 
          className="absolute w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full transition-all duration-1000"
          style={{ 
            left: `calc(50% + ${mousePos.x * 100}px)`, 
            top: `calc(50% + ${mousePos.y * 100}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* CUSTOM CURSOR */}
      <div 
        className="fixed w-8 h-8 border border-cyan-500 rounded-full z-[100] pointer-events-none transition-transform duration-100 mix-blend-difference hidden md:block"
        style={{ 
          left: `${(mousePos.x / 2 + 0.5) * 100}%`, 
          top: `${(mousePos.y / 2 + 0.5) * 100}%`,
          transform: 'translate(-50%, -50%) scale(1.5)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* TOP HUD */}
        <div className="mb-12 flex justify-center items-center gap-12" data-aos="fade-down">
          <div className="flex flex-col items-start font-mono text-[8px] tracking-[0.4em] text-cyan-500/50">
            <span>VELOCITY_X: {mousePos.x.toFixed(3)}</span>
            <span>VELOCITY_Y: {mousePos.y.toFixed(3)}</span>
          </div>
          <div className="h-10 w-[1px] bg-zinc-800" />
          <div className="flex flex-col items-end font-mono text-[8px] tracking-[0.4em] text-cyan-500/50">
            <span>CORE_TEMP: 32.4°C</span>
            <span>SYNC_STATUS: ACTIVE</span>
          </div>
        </div>

        {/* 3D LAYERED HEADLINE */}
        <div className="relative mb-12 select-none">
          <h1 
            className="absolute inset-0 text-[13vw] md:text-[10vw] font-black text-white/5 blur-sm uppercase italic transition-transform duration-500"
            style={{ transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)` }}
          >
            CRITICAL
          </h1>
          <h1 
            className="relative text-[13vw] md:text-[10vw] font-black text-white leading-[0.8] uppercase italic"
            data-aos="reveal-text"
          >
            CRITICAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-600">
              SYSTEMS
            </span>
          </h1>
        </div>

        {/* DYNAMIC VALUE PROPOSITION */}
        <div className="h-20 flex flex-col items-center">
          <p className="text-sm md:text-xl font-mono tracking-[0.8em] text-zinc-500 uppercase">
            {displayText}
            <span className="inline-block w-2 h-5 bg-cyan-500 ml-3 animate-pulse" />
          </p>
        </div>

        {/* HOLOGRAPHIC CTA HUB */}
        <div 
          className="mt-16 flex flex-col md:flex-row justify-center items-center gap-16"
          data-aos="fade-up" 
          data-aos-delay="600"
        >
          <Link 
            href="/initialize" 
            className="group relative px-20 py-8 overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 group-hover:bg-white transition-all duration-700" />
            <div className="absolute inset-0 w-full h-[2px] bg-cyan-400/50 top-0 group-hover:top-full transition-all duration-1000" />
            <span className="relative z-10 text-cyan-400 group-hover:text-black text-[10px] font-black uppercase tracking-[0.6em] transition-colors duration-700">
              Launch Protocol
            </span>
            <div className="absolute inset-0 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" />
          </Link>
          
          <Link href="/dossier" className="relative group overflow-hidden">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white transition-all group-hover:tracking-[1em]">
              View Dossier
            </span>
            <div className="h-[1px] w-full bg-cyan-900 mt-2">
               <div className="h-full bg-cyan-400 w-0 group-hover:w-full transition-all duration-1000" />
            </div>
          </Link>
        </div>
      </div>

      {/* FOOTER HUD */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center overflow-hidden">
        <div className="flex gap-4 items-center">
           <div className="h-12 w-[1px] bg-cyan-900" />
           <div className="flex flex-col gap-1">
              <p className="text-[8px] font-mono text-cyan-500/40 tracking-[0.3em]">ENCRYPTION_MODE: QUANTUM</p>
              <p className="text-[8px] font-mono text-cyan-500/40 tracking-[0.3em]">OS_KERNAL: ZETA-9</p>
           </div>
        </div>

        <div className="flex gap-[2px] h-8 items-end">
            {[...Array(20)].map((_, i) => (
             <div 
              key={i} 
              className="w-1 bg-cyan-500/20" 
              style={{ 
                height: `${Math.random() * 100}%`,
                animation: `visualize 2s infinite ease-in-out`,
                animationDelay: `${i * 0.1}s`
              }} 
             />
            ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes visualize {
          0%, 100% { height: 10%; opacity: 0.2; }
          50% { height: 100%; opacity: 0.8; }
        }
        [data-aos="reveal-text"] {
          clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
          transform: scale(0.9);
          filter: blur(10px);
          transition-property: clip-path, transform, filter;
        }
        [data-aos="reveal-text"].aos-animate {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          transform: scale(1);
          filter: blur(0px);
        }
      `}</style>

    </section>
  );
}