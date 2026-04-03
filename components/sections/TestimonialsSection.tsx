"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "@/components/ui/sparkles";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TXC hat unsere Angebotserstellung komplett automatisiert. Was vorher 3 Stunden dauerte, läuft jetzt in Sekunden.",
    name: "M. Weber",
    role: "Geschäftsführer",
    company: "Weber Consulting",
  },
  {
    quote: "Die Zusammenarbeit war professionell und effizient. Vom Konzept bis zur Umsetzung in unter 2 Wochen.",
    name: "S. Hartmann",
    role: "COO",
    company: "DataFlow GmbH",
  },
  {
    quote: "Endlich ein Partner der AI nicht nur verspricht, sondern auch liefert. Unser Kundenservice läuft jetzt 24/7.",
    name: "L. Fischer",
    role: "Head of Operations",
    company: "NovaTech",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono-dm text-xs uppercase tracking-label text-vanta-purple block mb-4">
            KUNDENSTIMMEN
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col"
            >
              <Quote size={24} className="text-vanta-purple/40 mb-5" />

              <blockquote className="font-display text-lg italic text-white/80 leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="border-t border-white/[0.06] pt-5">
                <p className="font-mono-dm text-sm text-white/70">
                  {testimonial.name}
                </p>
                <p className="font-mono-dm text-xs text-white/40 mt-0.5">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sparkles background effect */}
      <div className="absolute inset-x-0 bottom-0 h-64 overflow-hidden [mask-image:radial-gradient(50%_80%,white,transparent)]">
        <Sparkles
          density={600}
          speed={0.5}
          size={1}
          color="#9333EA"
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Section divider glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-purple/20 to-transparent" />
    </section>
  );
}
