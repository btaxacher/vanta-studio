"use client";

import React from "react";
import { motion } from "framer-motion";
import { Pricing } from "@/components/ui/pricing-section";

const vantaPlans = [
  {
    name: "LAUNCH",
    price: "2400",
    yearlyPrice: "490",
    period: "Projekt",
    features: [
      "1 Design Sprint (5 days)",
      "Up to 5 pages",
      "Responsive Build",
      "2 Revision Rounds",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    description: "Perfect for startups and small brands making their first digital impression.",
    buttonText: "GET STARTED",
    href: "#",
    isPopular: false,
  },
  {
    name: "SCALE",
    price: "6800",
    yearlyPrice: "1290",
    period: "Projekt",
    features: [
      "2 Design Sprints",
      "Up to 15 pages",
      "Custom Animations",
      "CMS Integration",
      "Performance Monitoring",
      "3 Months Support",
      "A/B Testing Setup",
    ],
    description: "For growing brands that need a full digital experience with custom interactions.",
    buttonText: "GET STARTED",
    href: "#",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "14000",
    yearlyPrice: "2490",
    period: "Projekt",
    features: [
      "Unlimited Design Sprints",
      "Unlimited Pages",
      "3D / WebGL Experiences",
      "Headless CMS",
      "CI/CD Pipeline",
      "Dedicated Team",
      "24/7 Priority Support",
      "Quarterly Strategy Reviews",
    ],
    description: "Full-scale digital transformation for established brands demanding excellence.",
    buttonText: "CONTACT SALES",
    href: "#",
    isPopular: false,
  },
];

export function PricingSectionWrapper() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <span className="font-mono-dm text-xs uppercase tracking-[0.3em] text-vanta-blue block mb-4">
            INVESTMENT
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Pricing plans={vantaPlans} />
        </motion.div>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-vanta-purple/[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}
