"use client";

import { motion } from "framer-motion";
import HeaderAlpha from "@/components/headers/HeaderAlpha";
import FooterAlpha from "@/components/footers/FooterAlpha";

export default function PortfolioDashboardSection() {
  return (
    <>
    <HeaderAlpha />
    <main className="min-h-screen">

            {/* ================= HERO SECTION ================= */}
<section className="relative bg-[#0b0d10] text-white overflow-hidden flex items-center pt-40 pb-10">

  {/* GLASS LIGHT MOVEMENT */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <motion.div
      animate={{ x: ["-30%", "30%", "-30%"] }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 left-0 w-[60%] h-full bg-white/10 blur-3xl"
    />
    <motion.div
      animate={{ x: ["30%", "-30%", "30%"] }}
      transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 right-0 w-[60%] h-full bg-white/5 blur-3xl"
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm font-semibold"
      >
        Portfolio • Growth Analytics
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-black leading-tight"
      >
        We Optimize Business
        <br />
        Metrics That Matter
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg text-zinc-300 max-w-xl"
      >
        Our approach combines market analysis, product intelligence,
        competitor benchmarking, and performance analytics to help
        businesses scale sustainably.
      </motion.p>

      {/* KEY POINTS */}
      <ul className="mt-8 space-y-3 text-zinc-200 font-medium">
        <li>✔ Channel & Marketing Performance Analysis</li>
        <li>✔ Product Usage & Conversion Optimization</li>
        <li>✔ Competitor & Market Intelligence</li>
        <li>✔ Revenue Growth & Cost Optimization</li>
      </ul>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-6">
        <button className="px-8 py-4 rounded-full bg-orange-500 text-black font-semibold shadow-lg hover:scale-105 transition">
          View Portfolio
        </button>
        <button className="px-8 py-4 rounded-full border border-white/30 font-semibold hover:bg-white/10 transition">
          Talk to Experts
        </button>
      </div>
    </div>

   {/* RIGHT – FULL IMAGE WITH ANALYTICS OVERLAY */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="relative h-[520px] md:h-[620px] lg:h-[680px] rounded-3xl overflow-hidden"
>
  {/* HUMAN IMAGE */}
  <img
    src="/assets/images/human-thinking.avif"
    alt="Business Analytics Expert"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK GRADIENT FOR READABILITY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

  {/* ANALYTICS CONTENT OVER IMAGE */}
  <div className="relative z-10 h-full flex flex-col justify-end p-6">

    <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-6">

      <h3 className="font-semibold mb-4 text-white">
        Channel Analytics Overview
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-lg font-black text-orange-400">76K</p>
          <p className="text-xs text-zinc-300">Reach</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-lg font-black text-orange-400">1.5M</p>
          <p className="text-xs text-zinc-300">Traffic</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-lg font-black text-orange-400">$3.6K</p>
          <p className="text-xs text-zinc-300">Revenue</p>
        </div>
      </div>

      {/* MINI BAR GRAPH */}
      <div className="h-24 flex items-end gap-2">
        {[35, 55, 45, 70, 90].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="w-4 rounded bg-orange-400"
          />
        ))}
      </div>
    </div>

  </div>
</motion.div>


  </div>
</section>

    <section className="py-32 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#000]"
          >
            Portfolio Performance Dashboard
          </motion.h2>

          <p className="mt-4 text-zinc-400 max-w-2xl">
            A snapshot of how we analyze channels, optimize products,
            and improve key business metrics for our clients.
          </p>
        </div>

        {/* DASHBOARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#12151c] border border-white/10 shadow-2xl p-8"
        >

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">

            {/* LEFT – MAIN METRIC */}
            <div className="col-span-1 bg-[#1a1e26] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Optimize Your Metrics
              </h3>
              <p className="text-sm text-zinc-400 mb-6">
                Business & marketing performance overview
              </p>

              <div className="space-y-4">
                <Metric label="Total Reach" value="76K" />
                <Metric label="Monthly Traffic" value="1.5M" />
                <Metric label="Revenue Impact" value="$3.6K" highlight />
                <Metric label="Active Campaigns" value="47" />
              </div>
            </div>

            {/* CENTER – LINE CHART */}
            <div className="col-span-1 bg-[#1a1e26] rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-white">Active Users Growth</h4>

              <svg viewBox="0 0 300 120" className="w-full h-auto">
                <polyline
                  points="0,90 40,70 80,75 120,45 160,55 200,30 260,20"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-xs text-zinc-400 mt-4">
                User engagement trend over time
              </p>
            </div>

            {/* RIGHT – KPI CARD */}
            <div className="col-span-1 bg-[#1a1e26] rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-white">Latest Conversion</h4>

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black text-green-400">
                  $586
                </span>
                <span className="text-xs text-zinc-400">
                  +18.4%
                </span>
              </div>

              <div className="h-24 flex items-end gap-2">
                {[40, 65, 50, 80, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="w-4 rounded bg-orange-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM TABLE */}
          <div className="bg-[#1a1e26] rounded-2xl p-6">
            <h4 className="font-semibold mb-6 text-white">
              Optimization Activities
            </h4>

            <div className="space-y-4 text-sm">
              {[
                ["SEO Optimization", "+32% Traffic", "Active"],
                ["Paid Campaign Scaling", "+41% ROI", "Completed"],
                ["UX Improvements", "+28% Conversion", "Active"],
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-[#12151c] rounded-xl px-4 py-3 text-white text-[10px] md:text-[14px]"
                >
                  <span>{row[0]}</span>
                  <span className="text-green-400">{row[1]}</span>
                  <span className="text-xs text-zinc-400">{row[2]}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>

    </main>

    <FooterAlpha />
     </>
  );
}

/* ------------------ METRIC COMPONENT ------------------ */

function Metric({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-zinc-400">{label}</span>
      <span
        className={`font-bold ${
          highlight ? "text-orange-400" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
