"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Database, Workflow, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: FileText,
    title: "Automatische Angebotserstellung",
    description: "Anfrage rein, Angebot raus — in Sekunden statt Stunden. Ihr AI-System erstellt passgenaue Angebote auf Basis Ihrer Vorlagen und Preislisten.",
    metric: "~8 Std. / Woche gespart",
    color: "#3ca2fa",
  },
  {
    icon: MessageCircle,
    title: "AI-Kundenservice",
    description: "Ihr AI-Agent beantwortet Kundenanfragen 24/7, in Ihrer Tonalität. Eskaliert nur, wenn es wirklich nötig ist.",
    metric: "24/7 erreichbar",
    color: "#9333EA",
  },
  {
    icon: Database,
    title: "Datenverarbeitung",
    description: "Rechnungen, Reports, Imports — automatisch verarbeitet, zugeordnet und in Ihre Systeme übertragen. Keine manuelle Eingabe mehr.",
    metric: "95% weniger Fehler",
    color: "#06B6D4",
  },
  {
    icon: Workflow,
    title: "Workflow-Automatisierung",
    description: "CRM, E-Mail, Buchhaltung, Projektmanagement — alles verbunden. Daten fließen automatisch zwischen Ihren Tools.",
    metric: "~12 Std. / Woche gespart",
    color: "#3ca2fa",
  },
  {
    icon: Sparkles,
    title: "Claude AI & individuelle Tools",
    description: "Claude als AI-Assistent in Ihrem Unternehmen — mit individuellen Skills und Plugins für Recherche, Analyse, Texterstellung und Entscheidungsfindung. Maßgeschneidert auf Ihre Prozesse für maximale Effizienz.",
    metric: "Unbegrenzte Einsatzmöglichkeiten",
    color: "#D4A27F",
  },
];

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[number]; index: number }) {
  return (
    <motion.div
      key={useCase.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 hover:border-white/[0.15] hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(60,162,250,0.04)] transition-all duration-500 relative overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[1px]"
        style={{ background: `linear-gradient(90deg, transparent, ${useCase.color}40, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ backgroundColor: `${useCase.color}10`, borderColor: `${useCase.color}20` }}
      >
        <useCase.icon size={22} style={{ color: useCase.color }} />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-normal text-white mb-3">
        {useCase.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-5">
        {useCase.description}
      </p>

      {/* Metric Badge */}
      <span
        className="inline-block px-3 py-1.5 rounded-full text-xs font-mono-dm uppercase tracking-wider border"
        style={{
          color: useCase.color,
          borderColor: `${useCase.color}30`,
          backgroundColor: `${useCase.color}08`,
        }}
      >
        {useCase.metric}
      </span>
    </motion.div>
  );
}

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-blue block mb-4">
            KONKRETE ERGEBNISSE
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Was wir
            <br />
            automatisieren
          </h2>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.slice(0, 3).map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>

        {/* Second row: 2 cards, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-[calc(66.666%+0.75rem)] mx-auto mt-6">
          {useCases.slice(3).map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index + 3} />
          ))}
        </div>
      </div>

      {/* Section divider glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-blue/20 to-transparent" />
    </section>
  );
}
