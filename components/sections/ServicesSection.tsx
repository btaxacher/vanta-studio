"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlipCard } from "@/components/ui/flip-card";
import { GlowCard } from "@/components/ui/spotlight-card";

const services = [
  {
    title: "Web Design",
    subtitle: "Pixel-perfect interfaces",
    description: "We craft bespoke digital identities that turn visitors into loyal customers.",
    features: ["UX Research", "Brand Systems", "Motion Design", "Responsive Build"],
    color: "#3ca2fa",
  },
  {
    title: "Development",
    subtitle: "Code that scales",
    description: "Full-stack development with Next.js, TypeScript, and cutting-edge animations.",
    features: ["Next.js / React", "API Architecture", "Performance First", "CI/CD Deploy"],
    color: "#9333EA",
  },
  {
    title: "Strategy",
    subtitle: "Direction with data",
    description: "From positioning to conversion funnels — we align design with business outcomes.",
    features: ["Brand Positioning", "Conversion Audit", "Content Strategy", "Analytics Setup"],
    color: "#06B6D4",
  },
];

const stats = [
  { value: "12", label: "avg. weeks to launch", color: "#3ca2fa" },
  { value: "98%", label: "client satisfaction", color: "#9333EA" },
  { value: "3x", label: "avg. conversion uplift", color: "#06B6D4" },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
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
            WHAT WE DO
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light">
            Services Built
            <br />
            for Impact
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Flip Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {services.map((service) => (
              <FlipCard key={service.title} {...service} />
            ))}
          </motion.div>

          {/* Glow Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {stats.map((stat) => (
              <GlowCard key={stat.label} glowColor={stat.color === "#3ca2fa" ? "blue" : stat.color === "#9333EA" ? "purple" : "green"}>
                <div className="p-8">
                  <div className="font-display text-6xl font-light mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="font-mono-dm text-xs uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section divider glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-vanta-blue/20 to-transparent" />
    </section>
  );
}
