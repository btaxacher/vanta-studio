"use client";

import React from "react";
import { motion } from "framer-motion";
import { PulseBeams } from "@/components/ui/pulse-beams";
import { AnalyseIcon, KonzeptIcon, EntwicklungIcon, IntegrationIcon } from "@/components/ui/animated-state-icons";

const steps = [
  { num: "01", label: "Analyse", position: "top-8 left-8 md:top-12 md:left-12", Icon: AnalyseIcon, color: "#3ca2fa" },
  { num: "02", label: "Konzept", position: "top-8 right-8 md:top-12 md:right-12", Icon: KonzeptIcon, color: "#9333EA" },
  { num: "03", label: "Entwicklung", position: "bottom-8 left-8 md:bottom-12 md:left-12", Icon: EntwicklungIcon, color: "#06B6D4" },
  { num: "04", label: "Integration", position: "bottom-8 right-8 md:bottom-12 md:right-12", Icon: IntegrationIcon, color: "#3ca2fa" },
];

export function ProcessSection() {
  return (
    <section id="prozess" className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
          SO ARBEITEN WIR
        </span>
        <h2 className="font-display text-5xl md:text-7xl font-light">Unser Prozess</h2>
      </motion.div>

      <div className="max-w-5xl mx-auto relative" style={{ minHeight: "500px" }}>
        {/* PulseBeams Background */}
        <PulseBeams className="w-full h-[500px]">
          <div className="px-6 py-4 rounded-xl border border-white/[0.08] bg-[#030305]/80 backdrop-blur-sm">
            <span className="font-display text-xl text-white">TXC</span>
          </div>
        </PulseBeams>

        {/* Step Labels */}
        {steps.map((step) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: parseInt(step.num) * 0.15 }}
            className={`absolute ${step.position} flex items-center gap-3`}
          >
            <step.Icon color={step.color} size={28} />
            <div>
              <div className="font-mono-dm text-xs text-white/40">{step.num}</div>
              <div className="font-mono-dm text-sm" style={{ color: step.color }}>
                {step.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-purple/20 to-transparent" />
    </section>
  );
}
