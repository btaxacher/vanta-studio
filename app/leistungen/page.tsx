"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, Cloud } from "lucide-react";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const services = [
  {
    icon: Bot,
    title: "AI & Automatisierung",
    subtitle: "Unser Kerngeschäft",
    description: "Wir bauen AI Agents und automatisieren Ihre wiederkehrenden Aufgaben — von der Kundenanfrage bis zur Rechnungsstellung. Kein Prozess ist zu komplex.",
    features: [
      "AI Agents für Kundenservice, Sales und interne Abläufe",
      "Prozessautomatisierung (Rechnungen, E-Mails, Workflows)",
      "Tool-Integrationen (CRM, ERP, APIs)",
      "Individuelle Automationslösungen nach Maß",
    ],
    color: "#3ca2fa",
    href: "/leistungen/automate",
  },
  {
    icon: Code,
    title: "Individuelle Software",
    subtitle: "Maßgeschneidert für Ihre Prozesse",
    description: "Interne Tools, Dashboards und Web-Apps — exakt auf Ihre Anforderungen zugeschnitten. Keine Kompromisse mit Standard-Software.",
    features: [
      "Interne Tools und Admin-Panels",
      "Web-Applikationen und Portale",
      "Echtzeit-Dashboards und Reporting",
      "Systeme zur Prozessoptimierung",
    ],
    color: "#9333EA",
    href: "/leistungen/scale",
  },
  {
    icon: Cloud,
    title: "Cloud & Consulting",
    subtitle: "Für komplexe Anforderungen",
    description: "Skalierbare Infrastruktur und strategische technische Beratung. Für Unternehmen, die mehr brauchen als eine einfache Automatisierung.",
    features: [
      "Cloud-Architektur (AWS, Azure)",
      "Skalierung und Performance-Optimierung",
      "DevOps und Infrastruktur-Setup",
      "Technische Beratung und Strategie",
    ],
    color: "#06B6D4",
    href: "/leistungen/enterprise",
  },
];

export default function LeistungenPage() {
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
            <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-blue block mb-4">
              UNSERE LEISTUNGEN
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6">
              Was wir für Sie tun
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Von der ersten Automatisierung bis zum komplexen Enterprise-System — wir finden die richtige Lösung für Ihr Unternehmen.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group rounded-2xl border border-white/[0.08] p-8 md:p-10 hover:border-white/[0.15] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  <div className="flex-1">
                    <span className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-1">
                      {service.subtitle}
                    </span>
                    <h2 className="font-display text-3xl font-light text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-white/60">
                          <span style={{ color: service.color }} className="mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-mono-dm tracking-wider group-hover:gap-3 transition-all"
                      style={{ color: service.color }}
                    >
                      MEHR ERFAHREN <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
