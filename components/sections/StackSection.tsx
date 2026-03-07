"use client";

import React from "react";
import { motion } from "framer-motion";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";

const features = [
  {
    title: "Next.js & React",
    text: "Server-side rendering, edge functions, and the latest React patterns. We build for speed and SEO without compromise.",
  },
  {
    title: "Motion & WebGL",
    text: "From Framer Motion micro-interactions to full Three.js experiences — we make interfaces that feel alive.",
  },
  {
    title: "Design Systems",
    text: "Figma-to-code pipelines with Tailwind CSS. Every component is reusable, responsive, and pixel-perfect.",
  },
];

export function StackSection() {
  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Orbiting Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <OrbitingSkills />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
              OUR TOOLKIT
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-10">Our Craft</h2>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={feature.title}>
                  <h3 className="font-display text-xl text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.text}</p>
                  {i < features.length - 1 && (
                    <div className="mt-8 h-[1px] bg-gradient-to-r from-white/[0.06] to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-cyan/20 to-transparent" />
    </section>
  );
}
