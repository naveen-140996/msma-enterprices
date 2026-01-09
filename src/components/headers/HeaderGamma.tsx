"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faRocket, 
  faShieldAlt, 
  faCrown,
  faBars,
  faMicrochip,
  faSatellite,
  faBrain
} from '@fortawesome/free-solid-svg-icons';

export default function HeaderGamma({ activeTier, setTier }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navData = {
    services: [
      { name: 'Aerospace Tech', icon: faSatellite, path: '/aerospace-tech' },
      { name: 'Aerospace and Defense', icon: faShieldAlt, path: '/aerospace-defense' },
      { name: 'Automotive', icon: faRocket, path: '/automotive' },
      { name: 'Semiconductor', icon: faMicrochip, path: '/semiconductor' },
      { name: 'Deep Learning', icon: faBrain, path: '/labview/deep-learning' },
    ],
    solutions: [
      { name: 'Radar Echo Simulator', path: '/radarecho' },
      { name: 'Checkout Systems', path: '/checkoutsystems' },
      { name: 'Telemetry Systems', path: '/telemetry' },
      { name: 'Hardware Design', path: '/hardwaredesign' },
      { name: 'Pyro Firing Tool', path: '/products/pyro-firing-setup-tool' },
    ]
  };

  return (
    <>
      <header className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-500
        ${scrolled ? 'bg-zinc-950/95 border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}
      `}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 flex items-center justify-between">
          
          {/* Logo - Industrial Aesthetic */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 border border-white/20 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xs">VS</div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black tracking-[.25em] text-lg leading-none">VIWEBSYNC</span>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-1">Industrial Intelligence</span>
            </div>
          </Link>

          {/* Nav - Architectural Mega Menu */}
          <nav className="hidden xl:flex items-center gap-2">
            
            {/* Services Mega Dropdown */}
            <div className="relative group">
              <button className="px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all flex items-center gap-2 group-hover:bg-white/5 rounded-full">
                Engineering
                <FontAwesomeIcon icon={faChevronDown} className="text-[8px] group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.7)] overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="p-8 bg-black/40">
                      <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">Core Sectors</h4>
                      <div className="space-y-4">
                        {navData.services.map((item) => (
                          <Link key={item.path} href={item.path} className="flex items-center gap-4 group/item">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 group-hover/item:text-cyan-400 group-hover/item:bg-cyan-400/10 transition-all">
                              <FontAwesomeIcon icon={item.icon} />
                            </div>
                            <span className="text-xs font-bold text-zinc-400 group-hover/item:text-white transition-colors">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="p-8 border-l border-white/5 bg-zinc-900 flex flex-col justify-between">
                      <div>
                        <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-6">Capabilities</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed font-medium">Providing high-reliability validation systems for Mission Critical environments.</p>
                      </div>
                      <Link href="/services" className="text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">View All Disciplines →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Links */}
            <Link href="/solutions" className="px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Solutions</Link>
            <Link href="/blog" className="px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-all">Insights</Link>
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-8">
            {/* Tier Switcher - Dark Minimalist Dock */}
            <div className="hidden lg:flex items-center bg-black border border-white/10 p-1 rounded-xl">
              {[
                { id: 'alpha', icon: faRocket, color: 'text-orange-500' },
                { id: 'gamma', icon: faShieldAlt, color: 'text-cyan-400' },
                { id: 'zeta', icon: faCrown, color: 'text-purple-500' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    activeTier === t.id ? 'bg-white/10 text-white' : 'text-zinc-600 hover:text-zinc-400'
                  }`}
                  title={t.id}
                >
                  <FontAwesomeIcon icon={t.icon} className={activeTier === t.id ? t.color : ''} />
                </button>
              ))}
            </div>

            <Link
              href="/start-now"
              className="relative px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.25em] rounded-sm overflow-hidden group/btn"
            >
              <span className="relative z-10">Initialize Project</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
            </Link>

            <button className="xl:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile - Industrial Side Panel */}
      <div className={`fixed inset-0 z-[2000] transition-all duration-700 ${mobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-700 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-zinc-950 border-l border-white/10 p-12 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="space-y-12">
            <h2 className="text-[10px] font-black text-zinc-600 uppercase tracking-[.5em]">Navigation</h2>
            <nav className="flex flex-col gap-8">
              {['Services', 'Solutions', 'Insights', 'Contact'].map((link) => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="text-5xl font-black text-white/20 hover:text-white transition-all tracking-tighter uppercase" onClick={() => setMobileMenuOpen(false)}>
                  {link}
                </Link>
              ))}
            </nav>
            <div className="pt-12 border-t border-white/5 space-y-4">
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest italic">Request Technical Dossier</p>
              <p className="text-white text-sm font-medium">engineering@viwebsync.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}