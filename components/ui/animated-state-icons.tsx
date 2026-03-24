"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  className?: string;
  color?: string;
  size?: number;
}

// Analyse — Lupe mit Scan-Effekt
export function AnalyseIcon({ color = "#3ca2fa", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="11" cy="11" r="7" stroke={color} strokeWidth="1" />
      <motion.line
        x1="16.5"
        y1="16.5"
        x2="21"
        y2="21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.line
        x1="7"
        y1="11"
        x2="15"
        y2="11"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ x1: 7, x2: 7 }}
        animate={{ x1: 7, x2: 15 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.circle
        cx="11"
        cy="11"
        r="7"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "11px 11px" }}
      />
    </motion.svg>
  );
}

// Konzept — Blueprint/Architektur-Raster
export function KonzeptIcon({ color = "#9333EA", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="1" />
      <motion.line
        x1="3"
        y1="9"
        x2="21"
        y2="9"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.line
        x1="3"
        y1="15"
        x2="21"
        y2="15"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.line
        x1="9"
        y1="3"
        x2="9"
        y2="21"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Entwicklung — Terminal/Code-Cursor
export function EntwicklungIcon({ color = "#06B6D4", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="1" />
      <motion.path
        d="M7 9l3 3-3 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.line
        x1="13"
        y1="15"
        x2="17"
        y2="15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Integration — Puzzle/Verbindung
export function IntegrationIcon({ color = "#3ca2fa", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.circle
        cx="7"
        cy="7"
        r="3"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.15"
      />
      <motion.circle
        cx="17"
        cy="7"
        r="3"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.15"
      />
      <motion.circle
        cx="7"
        cy="17"
        r="3"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.15"
      />
      <motion.circle
        cx="17"
        cy="17"
        r="3"
        stroke={color}
        strokeWidth="1"
        fill={color}
        fillOpacity="0.15"
      />
      <motion.line
        x1="10"
        y1="7"
        x2="14"
        y2="7"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      />
      <motion.line
        x1="10"
        y1="17"
        x2="14"
        y2="17"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      />
      <motion.line
        x1="7"
        y1="10"
        x2="7"
        y2="14"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      />
      <motion.line
        x1="17"
        y1="10"
        x2="17"
        y2="14"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      />
    </motion.svg>
  );
}

// Legacy exports for backwards compatibility
export { AnalyseIcon as DiscoverIcon };
export { KonzeptIcon as DesignIcon };
export { EntwicklungIcon as BuildIcon };
export { IntegrationIcon as LaunchIcon };
