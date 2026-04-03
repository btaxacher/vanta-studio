"use client";

import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const features = [
  "Cloud-Architektur (AWS / Azure)",
  "Systemdesign & Skalierung",
  "Dediziertes Projektteam",
  "Individuelle AI-Modelle",
  "24/7 Priority Support",
  "Quartals-Reviews & Strategie",
  "SLA-Garantie",
  "Langfristige Partnerschaft",
];

const examples = [
  {
    title: "Enterprise AI-Plattform",
    description: "Eine zentrale AI-Plattform, die mehrere Geschäftsbereiche bedient — von Kundenservice über Logistik bis Controlling.",
  },
  {
    title: "Cloud-Migration & Modernisierung",
    description: "Migration bestehender Systeme in die Cloud mit Zero-Downtime-Strategie, Microservices-Architektur und automatisiertem Deployment.",
  },
  {
    title: "Dateninfrastruktur & Analytics",
    description: "Aufbau einer skalierbaren Datenplattform mit Echtzeit-Analytics, Data Warehousing und automatisierten Reporting-Pipelines.",
  },
];

export default function EnterprisePage() {
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
            <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-cyan block mb-4">
              PAKET
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-light mb-4">
              Enterprise
            </h1>
            <p className="text-white/50 text-lg mb-2">
              Komplexe Systeme, strategische Beratung und langfristige Partnerschaft — individuell auf Ihr Unternehmen zugeschnitten.
            </p>
            <p className="font-display text-3xl text-vanta-cyan mb-12">
              Auf Anfrage <span className="text-lg text-white/40">/ individuell</span>
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
                  <Check size={18} className="text-vanta-cyan flex-shrink-0" />
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
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-vanta-cyan text-vanta-cyan font-mono-dm text-sm tracking-wider hover:bg-vanta-cyan/10 transition-colors"
            >
              GESPRÄCH VEREINBAREN
            </Link>
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
}
