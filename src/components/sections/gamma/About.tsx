"use client";
import React, { useState, useEffect } from "react";

export default function AboutGamma() {
  const [index, setIndex] = useState(0);
  const images = ["/AboutViweb1.png", "/AboutViweb2.png"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % images.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-32 bg-[#0B0F1A]  text-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Clean Text Content */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-blue-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Technical Architecture
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
                HARDWARE <br />
                <span className="text-blue-500">ORCHESTRATION.</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-300 text-base lg:text-lg">
              <p className="font-semibold text-white border-l-2 border-blue-600 pl-6">
                We bridge the gap between complex NI hardware and mission-critical software execution.
              </p>
              <p className="text-slate-400 pl-6">
                By leveraging NI LabVIEW, PXI, and FPGA platforms, we build deterministic systems that capture data with zero-tolerance for error. This is engineering for those who cannot afford to fail.
              </p>
            </div>

            {/* Minimal Tech Specs Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">Standard</p>
                <p className="text-sm font-semibold">IEEE 488.2 / PXI Express</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500">Reliability</p>
                <p className="text-sm font-semibold">99.99% Determinism</p>
              </div>
            </div>
          </div>

          {/* Right: Small, Clean Image Slider */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <img
                key={index}
                src={images[index]}
                alt="System Architecture"
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
              {/* Optional subtle hover zoom */}
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}