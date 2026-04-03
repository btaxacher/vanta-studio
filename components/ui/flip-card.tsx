"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
}

export function FlipCard({ title, subtitle, description, features, color }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer perspective-[1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/[0.08] p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            background: `linear-gradient(135deg, ${color}10 0%, #030305 50%, ${color}05 100%)`,
          }}
        >
          <div>
            <div
              className="font-mono-dm text-xs uppercase tracking-label mb-4"
              style={{ color }}
            >
              {subtitle}
            </div>
            <h3 className="font-display text-4xl font-light text-white">{title}</h3>
          </div>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center border"
            style={{ borderColor: `${color}40` }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke={color} strokeWidth="1.5" />
            </svg>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-white/[0.08] p-8 flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(135deg, ${color}15 0%, #030305 60%)`,
          }}
        >
          <div>
            <h3
              className="font-display text-2xl font-light mb-4"
              style={{ color }}
            >
              {title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>
          </div>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
