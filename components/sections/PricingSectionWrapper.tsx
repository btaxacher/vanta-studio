"use client";

import React from "react";
import { motion } from "framer-motion";
import { PricingSection } from "@/components/ui/pricing-section";

export function PricingSectionWrapper() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
            INVESTMENT
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light mb-4">
            Transparent Pricing
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Choose the model that fits your ambition. Every plan includes strategy, design, and development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <PricingSection />
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-vanta-purple/[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}
