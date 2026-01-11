"use client";

import { motion } from "framer-motion";
import HeaderAlpha from "@/components/headers/HeaderAlpha";
import FooterAlpha from "@/components/footers/FooterAlpha";

export default function ContactPage() {
  return (
    <>
      <HeaderAlpha />

      <main className="bg-white text-zinc-900">

        {/* ================= HERO ================= */}
        <section className="relative bg-[#0b0d10] text-white pt-36 pb-24 overflow-hidden">
          {/* Glass movement */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <motion.div
              animate={{ x: ["-30%", "30%", "-30%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-[60%] h-full bg-white/10 blur-3xl"
            />
            <motion.div
              animate={{ x: ["30%", "-30%", "30%"] }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-[60%] h-full bg-white/5 blur-3xl"
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black"
            >
              Let’s Build Something Impactful
            </motion.h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-zinc-300">
              Whether you’re planning a new product, scaling an existing platform,
              or optimizing growth — our team is ready to help.
            </p>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="md:py-32 py-10 bg-[#f7f7f7]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT – CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black mb-6">
                Talk With Our Experts
              </h2>

              <p className="text-zinc-600 max-w-xl leading-relaxed">
                We collaborate with startups, enterprises, and growing businesses
                to design, develop, and scale digital products.
                Share your goals — we’ll guide you with clarity.
              </p>

              {/* INFO BLOCKS */}
              <div className="mt-10 space-y-6">
                <InfoItem
                  title="Email Us"
                  value="contact@yourcompany.com"
                />
                <InfoItem
                  title="Call Us"
                  value="+91 98765 43210"
                />
                <InfoItem
                  title="Location"
                  value="India • Remote Worldwide"
                />
              </div>

              {/* TRUST POINTS */}
              <ul className="mt-10 space-y-3 text-zinc-700 font-medium">
                <li>✔ Clear project roadmap & timelines</li>
                <li>✔ Transparent pricing & communication</li>
                <li>✔ Enterprise-grade security & scalability</li>
              </ul>
            </motion.div>

            {/* RIGHT – CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl border p-8"
            >
              <h3 className="text-2xl font-bold mb-6">
                Start a Conversation
              </h3>

              <form className="space-y-6">
                <div>
                  <label className="text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Project Type
                  </label>
                  <select className="mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>E-Commerce Website</option>
                    <option>Web Application</option>
                    <option>Marketing & Growth</option>
                    <option>AI Automation</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-orange-500 text-white font-bold shadow-lg hover:scale-[1.02] transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-[#0b0d10] text-white text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black">
            We Respond Within 24 Hours
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-zinc-300">
            No sales pressure. Just clear insights and honest guidance.
          </p>
        </section>

      </main>

      <FooterAlpha />
    </>
  );
}

/* ------------------ INFO ITEM ------------------ */

function InfoItem({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  );
}
