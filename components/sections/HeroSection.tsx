"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SearchComponent } from "@/components/ui/animated-glowing-search-bar";

const GLSLHills = dynamic(
  () => import("@/components/ui/glsl-hills").then((mod) => ({ default: mod.GLSLHills })),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* GLSL Background */}
      <div className="absolute inset-0 z-0">
        <GLSLHills />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030305]/80 via-transparent to-[#030305]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue mb-8"
        >
          DIGITAL EXPERIENCE STUDIO ✦ EST. 2019
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-[96px] font-light leading-[1.05] mb-6"
        >
          We Build Digital
          <br />
          <span className="italic bg-gradient-to-r from-vanta-blue to-vanta-purple bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-lg max-w-xl mx-auto mb-10"
        >
          Crafting immersive digital worlds for brands that dare to be remembered.
        </motion.p>

        {/* Search Bar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl mx-auto mb-12"
        >
          <SearchComponent />
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="px-5 py-2.5 rounded-full border border-white/[0.08] backdrop-blur-sm bg-white/[0.03] text-sm text-white/70">
            50+ Projects Delivered
          </div>
          <div className="px-5 py-2.5 rounded-full border border-white/[0.08] backdrop-blur-sm bg-white/[0.03] text-sm text-white/70">
            4.9★ Client Rating
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div>
    </section>
  );
}
