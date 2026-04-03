"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft, Star } from "lucide-react";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const features = [
  "AI Agents (Support / Sales / Intern)",
  "Multi-Tool-Workflows über mehrere Systeme",
  "Individuelle Lösungen nach Anforderung",
  "CRM / API-Integration",
  "Performance-Monitoring",
  "3 Monate Support und Optimierung",
  "Laufende Anpassungen inklusive",
];

const examples = [
  {
    title: "AI-Kundenservice-Agent",
    description: "Ein AI-Agent beantwortet häufige Kundenanfragen 24/7 in Ihrer Tonalität. Eskaliert komplexe Fälle automatisch an Ihr Team.",
  },
  {
    title: "Sales-Automatisierung",
    description: "Von der Lead-Erfassung über die Qualifizierung bis zum Follow-up — Ihr Vertriebsprozess läuft automatisch über CRM, E-Mail und Kalender.",
  },
  {
    title: "Prozess-Orchestrierung",
    description: "Mehrere Tools (Buchhaltung, Projektmanagement, CRM) werden zu einem nahtlosen Workflow verbunden. Keine manuellen Zwischenschritte.",
  },
];

export default function ScalePage() {
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
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-purple">
                PAKET
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-vanta-purple text-white text-xs font-mono-dm">
                <Star size={10} className="fill-current" /> BELIEBT
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light mb-4">
              Scale
            </h1>
            <p className="text-white/50 text-lg mb-2">
              Für Unternehmen, die ihre Prozesse systematisch automatisieren und skalieren wollen.
            </p>
            <p className="font-display text-3xl text-vanta-purple mb-12">
              ab €2.900 <span className="text-lg text-white/40">/ Projekt</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-vanta-purple/30 p-8 mb-12"
          >
            <h2 className="font-display text-2xl font-light text-white mb-6">Enthalten</h2>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check size={18} className="text-vanta-purple flex-shrink-0" />
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
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-vanta-purple text-white font-mono-dm text-sm tracking-wider hover:bg-vanta-purple/90 transition-colors"
            >
              KOSTENLOSE ERSTBERATUNG
            </Link>
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
}
