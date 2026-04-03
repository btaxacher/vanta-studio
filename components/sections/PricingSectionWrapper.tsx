"use client";

import React from "react";
import { motion } from "framer-motion";
import { Pricing } from "@/components/ui/pricing-section";

const txcPlans = [
  {
    name: "AUTOMATE",
    price: "990",
    yearlyPrice: "190",
    period: "Projekt",
    features: [
      "Einzelne Prozessautomatisierung",
      "Einfache AI-Workflows",
      "Tool-Anbindung (1 System)",
      "Datenverarbeitung",
      "2 Revisionsrunden",
      "1 Monat Support",
    ],
    description: "Der schnelle Einstieg in die Automatisierung. Ideal für einzelne Prozesse und erste AI-Workflows.",
    buttonText: "JETZT STARTEN",
    href: "#kontakt",
    isPopular: false,
  },
  {
    name: "SCALE",
    price: "2900",
    yearlyPrice: "490",
    period: "Projekt",
    features: [
      "AI Agents (Support / Sales)",
      "Multi-Tool-Workflows",
      "Individuelle Lösungen",
      "CRM / API-Integration",
      "Performance-Monitoring",
      "3 Monate Support",
      "Laufende Optimierung",
    ],
    description: "Für Unternehmen, die ihre Prozesse systematisch automatisieren und skalieren wollen.",
    buttonText: "JETZT STARTEN",
    href: "#kontakt",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "0",
    yearlyPrice: "0",
    period: "Projekt",
    features: [
      "Cloud-Architektur (AWS / Azure)",
      "Systemdesign & Skalierung",
      "Dediziertes Projektteam",
      "Individuelle AI-Modelle",
      "24/7 Priority Support",
      "Quartals-Reviews & Strategie",
      "SLA-Garantie",
      "Langfristige Partnerschaft",
    ],
    description: "Komplexe Systeme, strategische Beratung und langfristige Partnerschaft — individuell auf Ihr Unternehmen zugeschnitten.",
    buttonText: "KONTAKT",
    href: "#kontakt",
    isPopular: false,
  },
];

export function PricingSectionWrapper() {
  return (
    <section id="pakete" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-blue block mb-4">
            UNSERE PAKETE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Pricing plans={txcPlans} />
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-vanta-purple/[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}
