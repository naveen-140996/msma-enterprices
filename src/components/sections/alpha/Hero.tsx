"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CORE_PILLARS = ["E-Commerce Solutions",
  "Web Development",
  "No Code Development",
  "Digital Marketing",
  "AI Automation",];

export default function HeroAlpha() {
  const [mounted, setMounted] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const springX = useSpring(xTransform, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleType = () => {
      const i = loopNum % CORE_PILLARS.length;
      const fullText = CORE_PILLARS[i];
      setDisplayText(isDeleting ? fullText.substring(0, displayText.length - 1) : fullText.substring(0, displayText.length + 1));
      setTypingSpeed(isDeleting ? 40 : 80);
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, mounted]);

  if (!mounted) return <div className="h-screen bg-[#fcfcfc]" />;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#fcfcfc] overflow-hidden pt-10 pb-12 md:pt-20 md:pb-0"
    >
      
      {/* 1. WATERMARK - Hidden on small screens for performance */}
      <motion.div 
        style={{ x: springX }}
        className="absolute -bottom-10 left-0 whitespace-nowrap select-none pointer-events-none opacity-[0.03] md:opacity-[0.04] font-black text-[30vw] md:text-[22vw] uppercase leading-none text-[#4c4c4c] z-0"
      >
        E-Commerce • Web • App Development
      </motion.div>

      {/* 2. SCANNING LINE */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ y: ["-10vh", "110vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
          <div className="w-full h-20 md:h-32 bg-gradient-to-b from-orange-100/5 to-transparent" />
        </motion.div>
      </div>

      {/* 3. CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div className="lg:col-span-8 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <span className="w-8 md:w-12 h-[1px] bg-orange-500" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#383838]">
              Enterprise IT & Product Engineering
            </span>
          </motion.div>

          {/* FLUID TYPOGRAPHY: Scales from text-5xl to text-[10rem] */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black uppercase leading-[0.9] md:leading-[0.8] tracking-tighter text-zinc-900"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-zinc-500">
              Digital
            </span>
          </motion.h1>

          <div className="mt-4 md:mt-8 flex items-center gap-3">
             <span className="text-xl md:text-4xl font-mono font-bold text-zinc-800 min-h-[1.5em] flex items-center">
               {displayText}
               <motion.span
                 animate={{ opacity: [1, 0] }}
                 transition={{ repeat: Infinity, duration: 0.8 }}
                 className="inline-block w-1 h-6 md:w-1.5 md:h-10 bg-orange-500 ml-2"
               />
             </span>
          </div>
        </div>

        {/* 4. STATS & BUTTON - Vertical stack on mobile */}
        <div className="lg:col-span-4 flex flex-col gap-4 w-full sm:max-w-xs lg:max-w-none">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-zinc-100 rounded-2xl shadow-xl shadow-orange-500/5"
          >
            <p className="text-3xl md:text-4xl font-black text-orange-600 italic mb-1">99.9%</p>
            <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#383838]">Trusted Authority</p>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button className="group relative w-full py-5 md:py-6 bg-[#383838] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] rounded-xl overflow-hidden shadow-2xl transition-all active:scale-95">
              <span className="relative z-10">Launch Solutions</span>
              <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* 5. FOOTER DECOR - Hidden on small mobile */}
      <div className="absolute bottom-10 left-6 md:left-10 hidden sm:flex items-center gap-4">
        <div className="h-[1px] w-12 md:w-20 bg-zinc-200" />
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#383838]">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}