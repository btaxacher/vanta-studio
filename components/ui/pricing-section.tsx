"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  projectPrice: string;
  retainerPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const plans: PricingPlan[] = [
  {
    name: "Launch",
    projectPrice: "2.400",
    retainerPrice: "490",
    description: "Perfect for startups and small brands looking to make their first digital impression.",
    features: [
      "1 Design Sprint (5 days)",
      "Up to 5 pages",
      "Responsive Build",
      "2 Revision Rounds",
      "Basic SEO Setup",
      "1 Month Support",
    ],
    color: "#3ca2fa",
  },
  {
    name: "Scale",
    projectPrice: "6.800",
    retainerPrice: "1.290",
    description: "For growing brands that need a full digital experience with custom interactions.",
    features: [
      "2 Design Sprints",
      "Up to 15 pages",
      "Custom Animations",
      "CMS Integration",
      "Performance Monitoring",
      "3 Months Support",
      "A/B Testing Setup",
    ],
    popular: true,
    color: "#9333EA",
  },
  {
    name: "Enterprise",
    projectPrice: "14.000+",
    retainerPrice: "2.490",
    description: "Full-scale digital transformation for established brands demanding excellence.",
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
    color: "#06B6D4",
  },
];

export function PricingSection() {
  const [isRetainer, setIsRetainer] = useState(false);

  return (
    <div className="w-full">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <span
          className={`font-mono-dm text-sm transition-colors ${!isRetainer ? "text-white" : "text-white/40"}`}
        >
          Projekt
        </span>
        <button
          onClick={() => setIsRetainer(!isRetainer)}
          className="relative w-14 h-7 rounded-full border border-white/[0.08] bg-white/5 transition-colors"
        >
          <motion.div
            className="absolute top-0.5 w-6 h-6 rounded-full bg-vanta-blue"
            animate={{ left: isRetainer ? "calc(100% - 1.625rem)" : "0.125rem" }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
        <span
          className={`font-mono-dm text-sm transition-colors ${isRetainer ? "text-white" : "text-white/40"}`}
        >
          Retainer
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              plan.popular
                ? "border-vanta-purple/40 bg-vanta-purple/[0.03]"
                : "border-white/[0.08] bg-white/[0.02]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-vanta-purple text-white text-xs font-mono-dm tracking-wider">
                POPULAR
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-display text-2xl font-light text-white mb-2">{plan.name}</h3>
              <p className="text-white/40 text-sm">{plan.description}</p>
            </div>

            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isRetainer ? "retainer" : "project"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-display text-5xl font-light" style={{ color: plan.color }}>
                    &euro;{isRetainer ? plan.retainerPrice : plan.projectPrice}
                  </span>
                  <span className="text-white/40 text-sm ml-2">
                    {isRetainer ? "/mo" : "/Projekt"}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <ul className="space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                  <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className="mt-8 w-full py-3 rounded-full border text-sm font-mono-dm tracking-wider transition-all hover:bg-white/5"
              style={{ borderColor: `${plan.color}40`, color: plan.color }}
            >
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
