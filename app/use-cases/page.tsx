"use client";

import { motion } from "framer-motion";
import { FileText, MessageCircle, Database, Workflow, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const useCases = [
  {
    icon: FileText,
    title: "Automatische Angebotserstellung",
    problem: "Ihr Team verbringt Stunden damit, Angebote manuell zu erstellen und anzupassen.",
    solution: "Ein AI-System erstellt passgenaue Angebote auf Basis Ihrer Vorlagen, Preislisten und Kundenanfragen — in Sekunden.",
    results: ["~8 Stunden / Woche eingespart", "Angebote in unter 2 Minuten", "Konsistente Qualität und Formatierung"],
    color: "#3ca2fa",
  },
  {
    icon: MessageCircle,
    title: "AI-Kundenservice",
    problem: "Wiederkehrende Anfragen blockieren Ihr Support-Team. Kunden warten, Mitarbeiter frustrieren.",
    solution: "Ein AI-Agent beantwortet häufige Fragen 24/7 in Ihrer Tonalität. Komplexe Fälle werden automatisch eskaliert.",
    results: ["24/7 Erreichbarkeit", "70% der Anfragen automatisch gelöst", "Schnellere Reaktionszeiten"],
    color: "#9333EA",
  },
  {
    icon: Database,
    title: "Datenverarbeitung & Import",
    problem: "Mitarbeiter tippen Daten manuell von einem System ins andere. Fehler sind unvermeidlich.",
    solution: "Rechnungen, Reports und Imports werden automatisch erkannt, validiert und in die richtigen Systeme übertragen.",
    results: ["95% weniger Eingabefehler", "~6 Stunden / Woche eingespart", "Lückenlose Dokumentation"],
    color: "#06B6D4",
  },
  {
    icon: Workflow,
    title: "Workflow-Automatisierung",
    problem: "Informationen gehen zwischen Tools verloren. Doppelarbeit und Medienbrüche bremsen Ihr Team.",
    solution: "CRM, E-Mail, Buchhaltung und Projektmanagement werden verbunden. Daten fließen automatisch zwischen Ihren Tools.",
    results: ["~12 Stunden / Woche eingespart", "Keine Datenbrüche mehr", "Echtzeit-Synchronisation"],
    color: "#3ca2fa",
  },
];

export default function UseCasesPage() {
  return (
    <SubpageLayout>
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
              USE CASES
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6">
              Konkrete Ergebnisse
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Keine Theorie — echte Anwendungsfälle, die messbar Zeit sparen und Fehler reduzieren.
            </p>
          </motion.div>

          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border border-white/[0.08] p-8 md:p-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${useCase.color}15` }}
                  >
                    <useCase.icon size={24} style={{ color: useCase.color }} />
                  </div>
                  <h2 className="font-display text-3xl font-light text-white">
                    {useCase.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={16} className="text-red-400" />
                      <span className="font-mono-dm text-xs uppercase tracking-wider text-red-400">Problem</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{useCase.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} style={{ color: useCase.color }} />
                      <span className="font-mono-dm text-xs uppercase tracking-wider" style={{ color: useCase.color }}>Lösung</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{useCase.solution}</p>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-6">
                  <span className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-3">Ergebnisse</span>
                  <div className="flex flex-wrap gap-3">
                    {useCase.results.map((result) => (
                      <span
                        key={result}
                        className="px-4 py-2 rounded-full border text-sm"
                        style={{ borderColor: `${useCase.color}30`, color: useCase.color }}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <p className="text-white/40 text-sm mb-6">
              Ihr Anwendungsfall ist nicht dabei? Wir finden trotzdem die richtige Lösung.
            </p>
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
