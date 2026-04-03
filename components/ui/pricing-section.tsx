"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Klare Pakete",
  description = "Wählen Sie das Modell, das zu Ihrem Vorhaben passt.\nJedes Paket beinhaltet Beratung, Konzept und Umsetzung.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#3ca2fa", "#9333EA", "#06B6D4", "#f5f5f7"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="text-center space-y-4 mb-12">
        <h2 className="font-display text-5xl md:text-7xl font-light tracking-tight text-white">
          {title}
        </h2>
        <p className="text-white/40 text-lg whitespace-pre-line max-w-xl mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center gap-3 mb-14">
        <span
          className={cn(
            "font-mono-dm text-sm transition-colors",
            isMonthly ? "text-white" : "text-white/40"
          )}
        >
          Projekt
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as React.Ref<HTMLButtonElement>}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="data-[state=checked]:bg-vanta-purple data-[state=unchecked]:bg-white/10 border-white/[0.08]"
            />
          </Label>
        </label>
        <span
          className={cn(
            "font-mono-dm text-sm transition-colors",
            !isMonthly ? "text-white" : "text-white/40"
          )}
        >
          Retainer{" "}
          <span className="text-vanta-purple text-xs">(20% sparen)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "rounded-2xl border p-8 text-center lg:flex lg:flex-col lg:justify-center relative",
              "bg-[#030305] flex flex-col",
              plan.isPopular
                ? "border-vanta-purple/60 border-2 bg-gradient-to-b from-vanta-purple/[0.08] via-transparent to-transparent"
                : "border-white/[0.08]",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2 ? "z-0" : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-vanta-purple py-0.5 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-3.5 w-3.5 fill-current" />
                <span className="text-white ml-1 font-mono-dm text-xs tracking-wider">
                  Beliebt
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="font-mono-dm text-xs uppercase tracking-sublabel text-white/50">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                {Number(plan.price) === 0 && isMonthly ? (
                  <span className="font-display text-4xl font-light tracking-tight bg-gradient-to-r from-vanta-blue to-vanta-purple bg-clip-text text-transparent">
                    Auf Anfrage
                  </span>
                ) : Number(plan.yearlyPrice) === 0 && !isMonthly ? (
                  <span className="font-display text-4xl font-light tracking-tight bg-gradient-to-r from-vanta-blue to-vanta-purple bg-clip-text text-transparent">
                    Auf Anfrage
                  </span>
                ) : (
                  <>
                    <span className="font-display text-5xl font-light tracking-tight text-white">
                      <NumberFlow
                        value={
                          isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                        }
                        format={{
                          style: "currency",
                          currency: "EUR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }}
                        transformTiming={{
                          duration: 500,
                          easing: "ease-out",
                        }}
                        willChange
                        className="font-variant-numeric: tabular-nums"
                      />
                    </span>
                    {plan.period !== "Next 3 months" && (
                      <span className="text-sm font-mono-dm leading-6 tracking-wide text-white/40">
                        / {plan.period}
                      </span>
                    )}
                  </>
                )}
              </div>

              <p className="text-xs leading-5 text-white/30 mt-1">
                {Number(plan.price) === 0 ? "individuelles Angebot" : isMonthly ? "pro Projekt" : "monatlich"}
              </p>

              <ul className="mt-6 gap-2.5 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check
                      className={cn(
                        "h-4 w-4 mt-0.5 flex-shrink-0",
                        plan.isPopular
                          ? "text-vanta-purple"
                          : index === 0
                          ? "text-vanta-blue"
                          : "text-vanta-cyan"
                      )}
                    />
                    <span className={cn("text-left text-sm", idx < 3 ? "text-white/70" : "text-white/50")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <hr className="w-full my-5 border-white/[0.06]" />

              <Link
                href={plan.href}
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-sm font-mono-dm tracking-wider",
                  "inline-flex items-center justify-center rounded-full h-11 px-6",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out",
                  "hover:ring-2 hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-vanta-purple text-white hover:ring-vanta-purple shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                    : "border border-white/[0.12] text-white/70 hover:text-white hover:bg-white/5 hover:ring-white/20"
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="mt-5 text-xs leading-5 text-white/30">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
