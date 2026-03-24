"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const features = [
  "Einzelne Prozessautomatisierung",
  "Einfache AI-Workflows",
  "Tool-Anbindung (1 System)",
  "Datenverarbeitung und -zuordnung",
  "2 Revisionsrunden",
  "1 Monat Support nach Go-Live",
];

const examples = [
  {
    title: "Automatische Rechnungsverarbeitung",
    description: "Eingehende Rechnungen werden automatisch erkannt, kategorisiert und in Ihr Buchhaltungssystem übertragen.",
  },
  {
    title: "E-Mail-Triage mit AI",
    description: "Eingehende E-Mails werden automatisch klassifiziert, priorisiert und an die richtige Abteilung weitergeleitet.",
  },
  {
    title: "Daten-Import Automation",
    description: "CSV, Excel oder API-Daten werden automatisch validiert, transformiert und in Ihr System importiert.",
  },
];

export default function AutomatePage() {
  return (
    <SubpageLayout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Zurück zu Leistungen
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
              PAKET
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light mb-4">
              Automate
            </h1>
            <p className="text-white/50 text-lg mb-2">
              Der schnelle Einstieg in die Automatisierung. Ideal für einzelne Prozesse und erste AI-Workflows.
            </p>
            <p className="font-display text-3xl text-vanta-blue mb-12">
              ab €990 <span className="text-lg text-white/40">/ Projekt</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.08] p-8 mb-12"
          >
            <h2 className="font-display text-2xl font-light text-white mb-6">Enthalten</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={18} className="text-vanta-blue flex-shrink-0" />
                  <span className="text-white/60 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-2xl font-light text-white mb-6">Beispiele</h2>
            <div className="space-y-4">
              {examples.map((example) => (
                <div key={example.title} className="rounded-xl border border-white/[0.06] p-6">
                  <h3 className="font-display text-lg text-white mb-2">{example.title}</h3>
                  <p className="text-white/40 text-sm">{example.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-vanta-blue text-white font-mono-dm text-sm tracking-wider hover:bg-vanta-blue/90 transition-colors"
            >
              KOSTENLOSE ERSTBERATUNG
            </Link>
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
}
