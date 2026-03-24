"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";

const features = [
  {
    title: "Claude Code & AI-Integration",
    text: "Claude Code, Anthropic API und AI-gestützte Entwicklung direkt in Ihrem Unternehmen. Wir integrieren AI in bestehende Prozesse — von der Code-Automatisierung bis zur intelligenten Entscheidungsfindung.",
  },
  {
    title: "AI & Machine Learning",
    text: "Anthropic Claude, LangChain und spezialisierte Modelle. Wir wählen die richtige AI für Ihr Problem — Text, Analyse, Agents oder individuelle Lösungen.",
  },
  {
    title: "Automatisierung & Integration",
    text: "n8n, Make, Custom APIs — wir verbinden Ihre bestehenden Tools zu nahtlosen Workflows. Kein manueller Schritt bleibt übrig.",
  },
  {
    title: "Cloud & Infrastruktur",
    text: "Azure, Supabase, Docker, Git — skalierbare Architektur mit modernem Stack. Von der ersten Automatisierung bis zum Enterprise-System.",
  },
];

export function StackSection() {
  return (
    <section id="technologie" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Orbiting Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <OrbitingSkills />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
              UNSERE TECHNOLOGIE
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-10">Unser Stack</h2>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={feature.title}>
                  <h3 className="font-display text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.text}</p>
                  {i < features.length - 1 && (
                    <div className="mt-8 h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-cyan/20 to-transparent" />
    </section>
  );
}
