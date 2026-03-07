"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export function DiscoverIcon({ color = "#3ca2fa", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="12" cy="12" r="4" fill={color} fillOpacity="0.3" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </motion.svg>
  );
}

export function DesignIcon({ color = "#9333EA", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        d="M12 2L2 7l10 5 10-5-10-5z"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.path
        d="M2 17l10 5 10-5"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <motion.path
        d="M2 12l10 5 10-5"
        stroke={color}
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

export function BuildIcon({ color = "#06B6D4", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.rect
        x="3"
        y="14"
        width="6"
        height="8"
        rx="1"
        stroke={color}
        strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        style={{ transformOrigin: "bottom" }}
      />
      <motion.rect
        x="9"
        y="8"
        width="6"
        height="14"
        rx="1"
        stroke={color}
        strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        style={{ transformOrigin: "bottom" }}
      />
      <motion.rect
        x="15"
        y="2"
        width="6"
        height="20"
        rx="1"
        stroke={color}
        strokeWidth="1"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
        style={{ transformOrigin: "bottom" }}
      />
    </motion.svg>
  );
}

export function LaunchIcon({ color = "#3ca2fa", size = 24 }: AnimatedIconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <motion.path
        d="M12 19V5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <motion.path
        d="M5 12l7-7 7 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.g
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: -8, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      >
        <circle cx="8" cy="20" r="1" fill={color} fillOpacity="0.5" />
        <circle cx="12" cy="22" r="1.5" fill={color} fillOpacity="0.3" />
        <circle cx="16" cy="20" r="1" fill={color} fillOpacity="0.5" />
      </motion.g>
    </motion.svg>
  );
}
