"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown, faBars, faXmark, faRocket,
  faDroplet, faVial, faBolt, faStethoscope, faIndustry,
  faLaptopCode, faRobot,
  faArrowRight, faMicrochip as faPcb
} from '@fortawesome/free-solid-svg-icons';

export default function HeaderAlpha() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added for Mobile
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Helper to create URL slugs from titles
  const formatSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ & /g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const industryData = [
    { title: "Aerospace & Defence", icon: faRocket, subs: ["Missile & Ballistic Checkout", "Rocket Motor Test Systems", "Radar & RF Systems", "Satellite & SATCOM", "Simulation & Emulation", "Data Acquisition & Control"] },
    { title: "Oil & Gas", icon: faDroplet, subs: ["pipeline-monitoring-control",
"drilling-exploration-systems",
"refinery-automation",
"condition-monitoring-systems"
] },
    { title: "Chemical Industry", icon: faVial, subs: ["process-control-automation",
"safety-compliance-testing",
"lab-instrumentation-automation",
"pilot-plant-simulation-validation"
] },
    { title: "Power & Energy", icon: faBolt, subs: ["power-generation-systems",
"smart-grid-distribution-systems",
"renewable-energy-systems"
] },
    { title: "Medical & Health", icon: faStethoscope, subs: ["medical-device-development-testing",
"biomedical-signal-processing",
"medical-imaging-analysis",
"patient-monitoring-systems",
"hospital-lab-automation",
"rehabilitation-prosthetics-systems",
"medical-research-systems"] },
    { title: "Industry 4.0", icon: faIndustry, subs: ["smart-manufacturing",
"digital-twin-systems",
"industrial-iot",
"predictive-maintenance-systems",
"robotics-cobot-systems",
"smart-energy-systems",
"digital-quality-inspection",
"supply-chain-automation",
"smart-energy-systems-"
] },
  ];

 const productsData = [
  { name: "Automated Test Equipment (ATE)", desc: "High-Speed Functional Testing" },
  { name: "SAR Environment Simulator", desc: "RF Exposure Simulation" },
  { name: "Actuator Test Systems", desc: "Precision Motion Validation" },
  { name: "Antenna & RCS Measurement Suite", desc: "Radar Signature Analysis" },
  { name: "Missile Checkout Systems", desc: "Pre-Launch Validation Suite" },
  { name: "Acoustic Emission Acquisition & Analysis System", desc: "Structural Health Monitoring" },
  { name: "Cable & Harness Testers", desc: "Continuity & Isolation Testing" },
  { name: "Multi-Emitter Scenario Simulator", desc: "Complex RF Simulation" },
  { name: "Radar Waveform Generator", desc: "Custom Waveform Synthesis" },
  { name: "Pyro Firing Control & Measurement Suite", desc: "Safe Pyro Activation System" },
];

const softwareServices = [
  " Web Applications",
  "ERP & Enterprise Systems",
  "E-Commerce Platforms",
  "Cloud-Based Solutions",
  "Industrial & IoT Software",
  "AI Agents & Workflow Automation (n8n)",
  "SEO & Digital Marketing",
  "System Integration & APIs"
];


  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 
      ${scrolled 
        ? 'bg-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-1 border-b-2 border-orange-500' 
        : 'bg-transparent py-2 border-b border-white/10'}`}>
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between static">

        {/* LOGO: Left End & Big Size */}
        <Link href="/" className="relative z-[110] flex items-center shrink-0">
         <Image 
  src="/logo1.svg" 
  alt="VIWEB SYNC" 
  // Use the actual internal dimensions of your SVG here
  width={600} 
  height={150} 
  className="
    /* 1. Mobile: Clearly visible */
    h-20 w-auto 
    
    /* 2. Tablet: Professional weight */
    md:h-28 
    
    /* 3. Desktop: Bold Aerospace presence */
    lg:h-36 
    
    /* 4. Extra: Prevention */
    object-contain object-left flex-none
  " 
  priority 
/>
        </Link>

        <nav className="hidden xl:flex items-center static" ref={navRef}>
          <div className="relative flex items-center gap-1 px-4 py-2 rounded-full 
                          backdrop-blur-2xl border border-orange-400/40 
                          bg-gradient-to-br from-white/80 via-orange-50/40 to-orange-500/20 
                          shadow-[0_10px_40px_rgba(234,88,12,0.2)]">
            
            <button onClick={() => setActiveMenu(activeMenu === 'ind' ? null : 'ind')} className="px-5 py-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-orange-700 transition-colors">
              Industries <FontAwesomeIcon icon={faChevronDown} className={`text-[8px] transition-transform ${activeMenu === 'ind' ? 'rotate-180 text-orange-600' : 'opacity-40'}`} />
            </button>

            <button onClick={() => setActiveMenu(activeMenu === 'prod' ? null : 'prod')} className="px-5 py-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-orange-700 transition-colors">
              Products <FontAwesomeIcon icon={faChevronDown} className={`text-[8px] transition-transform ${activeMenu === 'prod' ? 'rotate-180 text-orange-600' : 'opacity-40'}`} />
            </button>

            <button onClick={() => setActiveMenu(activeMenu === 'soft' ? null : 'soft')} className="px-5 py-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-orange-700 transition-colors">
              Software & AI <FontAwesomeIcon icon={faChevronDown} className={`text-[8px] transition-transform ${activeMenu === 'soft' ? 'rotate-180 text-orange-600' : 'opacity-40'}`} />
            </button>

            <Link href="/about" className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-orange-700 transition-colors">
              About
            </Link>

            <Link href="/blogs" className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-black hover:text-orange-700 transition-colors">
              Blog
            </Link>

            {/* DROPDOWN CONTAINER */}
            <div className={`absolute top-[calc(100%+25px)] left-1/2 -translate-x-1/2 w-[1000px] transition-all duration-300 ${activeMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
              {activeMenu === 'ind' && (
                <div className="bg-white border border-zinc-200 shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-[2rem] p-10 grid grid-cols-3 gap-x-8 gap-y-10 text-left">
                  {industryData.map((ind, i) => (
                    <div key={i} className="group">
                      <Link href={`/industries/${formatSlug(ind.title)}`} onClick={() => setActiveMenu(null)} className="flex items-center gap-3 text-orange-600 border-b border-orange-50 pb-3 mb-4 hover:border-orange-500 transition-all">
                        <FontAwesomeIcon icon={ind.icon} />
                        <h4 className="text-[10px] font-black text-black uppercase tracking-widest group-hover:text-orange-600 transition-colors">{ind.title}</h4>
                      </Link>
                      <ul className="space-y-2">
                        {ind.subs.map((sub, si) => (
                          <li key={si}>
                            <Link href={`/services/${formatSlug(sub)}`} onClick={() => setActiveMenu(null)} className="text-[9px] font-bold text-zinc-500 hover:text-orange-600 uppercase transition-colors block">{sub}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {activeMenu === 'prod' && (
                <div className="bg-zinc-950 border border-zinc-800 shadow-[0_40px_80px_rgba(0,0,0,0.3)] rounded-[2rem] p-8 grid grid-cols-2 gap-4 text-left">
                  {productsData.map((p, i) => (
                    <Link key={i} href={`/products/${formatSlug(p.name)}`} onClick={() => setActiveMenu(null)} className="p-5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-orange-500 transition-all block group">
                      <p className="text-[11px] font-black text-white uppercase tracking-widest group-hover:text-orange-500">{p.name}</p>
                      <p className="text-[9px] text-zinc-400 mt-1">{p.desc}</p>
                    </Link>
                  ))}
                </div>
              )}
             {activeMenu === 'soft' && (
  <div className="bg-white border border-zinc-200 shadow-[0_40px_80px_rgba(0,0,0,0.15)] rounded-[2rem] p-8 grid grid-cols-2 gap-6 text-left">
    {softwareServices.map((service, i) => (
      <Link
        key={i}
        href={`/solutions/${formatSlug(service)}`}
        onClick={() => setActiveMenu(null)}
        className="p-6 border border-zinc-100 rounded-xl hover:bg-zinc-900 transition-all group"
      >
        <p className="text-[11px] font-black uppercase text-black group-hover:text-white tracking-wide">
          {service}
        </p>
        <p className="text-[9px] text-zinc-500 group-hover:text-zinc-400 mt-1">
          Software Solutions
        </p>
      </Link>
    ))}
  </div>
)}

            </div>
          </div>
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 relative z-[110]">
          <Link href="/contact" className="hidden sm:flex px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] bg-orange-600 text-white shadow-xl hover:scale-105 transition-all items-center gap-3">
            Ready to Sync <FontAwesomeIcon icon={faArrowRight} />
          </Link>

          {/* Hamburger / Cancel */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-orange-600 transition-all"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="text-xl" />
          </button>
        </div>

        {/* MOBILE DRAWER MENU */}
        <div className={`fixed inset-0 bg-white z-[105] flex flex-col p-8 transition-transform duration-500 ease-in-out xl:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           <div className="mt-24 flex flex-col gap-6">
              <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Industries</Link>
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Products</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter">About</Link>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter">Blog</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black uppercase tracking-tighter text-orange-600">Contact</Link>
           </div>
        </div>

      </div>
    </header>
  );
}