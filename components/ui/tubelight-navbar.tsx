"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface TubelightNavbarProps {
  items: NavItem[];
  logo?: React.ReactNode;
  ctaButton?: React.ReactNode;
}

export function TubelightNavbar({ items, logo, ctaButton }: TubelightNavbarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] backdrop-blur-xl bg-[#030305]/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        {logo && <div className="flex-shrink-0">{logo}</div>}

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-1 relative">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;
            return (
              <Link
                key={item.name}
                href={item.url}
                className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {isActive && (
                  <motion.div
                    layoutId="tubelight"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(60,162,250,0.15) 0%, transparent 70%)",
                      boxShadow: "0 -2px 12px rgba(60,162,250,0.3), 0 -1px 4px rgba(60,162,250,0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        {ctaButton && <div className="flex-shrink-0">{ctaButton}</div>}
      </div>
    </nav>
  );
}
