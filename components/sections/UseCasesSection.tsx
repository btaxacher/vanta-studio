"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Database, Workflow, Code } from "lucide-react";

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
    icon: Code,
    title: "AI-gestützte Entwicklung",
    description: "Claude Code automatisiert Code-Reviews, generiert Dokumentation und beschleunigt Ihre Softwareentwicklung. Anthropic AI als fester Bestandteil Ihres Teams.",
    metric: "3x schnellere Entwicklung",
    color: "#D4A27F",
  },
];

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
          <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
            KONKRETE ERGEBNISSE
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Was wir
            <br />
            automatisieren
          </h2>
        </motion.div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:border-white/[0.15] hover:bg-white/[0.04] transition-all"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${useCase.color}15` }}
              >
                <useCase.icon size={20} style={{ color: useCase.color }} />
              </div>

              {/* Title */}
              <h3 className="font-display text-lg text-white mb-3">
                {useCase.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {useCase.description}
              </p>

              {/* Metric Badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-mono-dm uppercase tracking-wider border"
                style={{ color: useCase.color, borderColor: `${useCase.color}30` }}
              >
                {useCase.metric}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section divider glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-blue/20 to-transparent" />
    </section>
  );
}
