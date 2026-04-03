"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { SubpageLayout } from "@/components/layout/SubpageLayout";

export default function KontaktPage() {
  return (
    <SubpageLayout>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-blue block mb-4">
              KONTAKT
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6">
              Kostenlose Erstberatung
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              Erzählen Sie uns von Ihrem Prozess. Wir sagen Ihnen ehrlich, ob und wie Automatisierung Ihnen helfen kann — unverbindlich und kostenlos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 text-sm focus:outline-none focus:border-vanta-blue/50 transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 text-sm focus:outline-none focus:border-vanta-blue/50 transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 text-sm focus:outline-none focus:border-vanta-blue/50 transition-colors"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div>
                  <label className="font-mono-dm text-xs uppercase tracking-wider text-white/40 block mb-2">
                    Beschreiben Sie Ihr Problem
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 text-sm focus:outline-none focus:border-vanta-blue/50 transition-colors resize-none"
                    placeholder="Welchen Prozess möchten Sie automatisieren? Was kostet Sie aktuell am meisten Zeit?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-vanta-blue text-white font-mono-dm text-sm tracking-wider hover:bg-vanta-blue/90 transition-colors"
                >
                  NACHRICHT SENDEN <ArrowRight size={16} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border border-white/[0.08] p-8">
                <h3 className="font-display text-xl text-white mb-6">So läuft es ab</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="font-mono-dm text-xs text-vanta-blue mt-1">01</span>
                    <div>
                      <p className="text-white/70 text-sm font-medium">Sie beschreiben Ihr Problem</p>
                      <p className="text-white/40 text-xs mt-1">Per Formular, E-Mail oder im Gespräch.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono-dm text-xs text-vanta-blue mt-1">02</span>
                    <div>
                      <p className="text-white/70 text-sm font-medium">Wir analysieren und beraten</p>
                      <p className="text-white/40 text-xs mt-1">Innerhalb von 24h melden wir uns mit einer ersten Einschätzung.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono-dm text-xs text-vanta-blue mt-1">03</span>
                    <div>
                      <p className="text-white/70 text-sm font-medium">Konkretes Angebot</p>
                      <p className="text-white/40 text-xs mt-1">Sie erhalten ein klares Angebot mit Umfang, Preis und Timeline.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <Mail size={18} className="text-vanta-blue" />
                  info@txc.systems
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <MapPin size={18} className="text-vanta-blue" />
                  Berlin, Deutschland
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <Clock size={18} className="text-vanta-blue" />
                  Antwort innerhalb von 24 Stunden
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}
