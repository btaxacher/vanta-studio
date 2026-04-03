"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

const values = [
  {
    title: "Ergebnis vor Technik",
    description: "Wir reden nicht über Python, Docker oder Kubernetes — wir reden über Ihr Problem und die Lösung. Die Technologie ist Mittel zum Zweck.",
  },
  {
    title: "Partnerschaft statt Projekt",
    description: "Wir sind kein Freelancer, der Code abliefert und verschwindet. Wir sind der Partner, der Ihre Prozesse versteht und langfristig optimiert.",
  },
  {
    title: "Schnell und pragmatisch",
    description: "Erster Prototyp in 72 Stunden. Kein monatelanges Pflichtenheft. Wir liefern schnell, iterieren oft und messen den Erfolg an echten Zahlen.",
  },
  {
    title: "Transparent und direkt",
    description: "Klare Kommunikation, ehrliche Einschätzungen, keine versteckten Kosten. Wenn etwas nicht sinnvoll ist, sagen wir das.",
  },
];

export default function UeberUnsPage() {
  return (
    <SubpageLayout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-blue block mb-4">
              ÜBER UNS
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6">
              TXC Systems
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              Wir automatisieren Geschäftsprozesse mit AI und Software. Kein Buzzword-Bingo — sondern echte Lösungen, die messbar Zeit sparen.
            </p>
          </motion.div>

          {/* Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-red-500/20 p-8">
                <h3 className="font-mono-dm text-xs uppercase tracking-wider text-red-400 mb-4">
                  TXC Systems ist NICHT
                </h3>
                <ul className="space-y-3 text-white/50 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✕</span> Ein Freelancer, der Code abliefert
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✕</span> Ein Generalist mit &quot;Ich kann alles&quot;
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✕</span> Eine Agentur mit Overhead und Meetings
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-vanta-blue/30 p-8">
                <h3 className="font-mono-dm text-xs uppercase tracking-wider text-vanta-blue mb-4">
                  TXC Systems IST
                </h3>
                <ul className="space-y-3 text-white/50 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-vanta-blue">✓</span> Der Partner, der Prozesse automatisiert
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-vanta-blue">✓</span> Spezialisiert auf AI und Automatisierung
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-vanta-blue">✓</span> Schnell, pragmatisch, ergebnisorientiert
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-light text-white mb-8">Unsere Werte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="rounded-xl border border-white/[0.06] p-6"
                >
                  <h3 className="font-display text-lg text-white mb-2">{value.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-vanta-blue text-white font-mono-dm text-sm tracking-wider hover:bg-vanta-blue/90 transition-colors"
            >
              LASSEN SIE UNS SPRECHEN
            </Link>
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
}
