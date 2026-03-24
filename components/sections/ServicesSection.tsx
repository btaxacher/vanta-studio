"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlipCard } from "@/components/ui/flip-card";
import { GlowCard } from "@/components/ui/spotlight-card";

const services = [
  {
    title: "AI & Automatisierung",
    subtitle: "Intelligente Prozesse",
    description: "Wir bauen AI Agents und automatisieren Ihre wiederkehrenden Aufgaben — von der Kundenanfrage bis zur Rechnungsstellung.",
    features: ["AI Agents", "Prozessautomatisierung", "Tool-Integrationen", "Individuelle Lösungen"],
    color: "#3ca2fa",
  },
  {
    title: "Individuelle Software",
    subtitle: "Maßgeschneiderte Lösungen",
    description: "Interne Tools, Dashboards und Web-Apps — exakt auf Ihre Prozesse zugeschnitten, nicht von der Stange.",
    features: ["Interne Tools", "Web-Applikationen", "Dashboards", "Prozessoptimierung"],
    color: "#9333EA",
  },
  {
    title: "Cloud & Consulting",
    subtitle: "Architektur & Strategie",
    description: "Skalierbare Infrastruktur und technische Beratung für Unternehmen mit komplexen Anforderungen.",
    features: ["AWS / Azure", "Skalierung", "DevOps", "Technische Beratung"],
    color: "#06B6D4",
  },
];

const stats = [
  { value: "72h", label: "bis zum ersten Prototyp", color: "#3ca2fa" },
  { value: "3x", label: "schnellere Prozesse", color: "#9333EA" },
  { value: "85%", label: "Zeitersparnis bei Routineaufgaben", color: "#06B6D4" },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
            WAS WIR TUN
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Leistungen mit
            <br />
            Wirkung
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Flip Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {services.map((service) => (
              <FlipCard key={service.title} {...service} />
            ))}
          </motion.div>

          {/* Glow Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {stats.map((stat) => (
              <GlowCard key={stat.label} glowColor={stat.color === "#3ca2fa" ? "blue" : stat.color === "#9333EA" ? "purple" : "green"}>
                <div className="p-8">
                  <div className="font-display text-6xl font-light mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="font-mono-dm text-xs uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section divider glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-blue/20 to-transparent" />
    </section>
  );
}
