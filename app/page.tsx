"use client";

import { Briefcase, Layers, Code2, CreditCard } from "lucide-react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StackSection } from "@/components/sections/StackSection";
import { PricingSectionWrapper } from "@/components/sections/PricingSectionWrapper";
import { FooterSection } from "@/components/sections/FooterSection";

const navItems = [
  { name: "Work", url: "#services", icon: Briefcase },
  { name: "Services", url: "#services", icon: Layers },
  { name: "Stack", url: "#stack", icon: Code2 },
  { name: "Pricing", url: "#pricing", icon: CreditCard },
];

export default function Home() {
  return (
    <main className="bg-[#030305] min-h-screen">
      {/* Navigation */}
      <TubelightNavbar
        items={navItems}
        logo={
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl text-white tracking-wide">VANTA</span>
            <span className="font-mono-dm text-[9px] text-white/40 tracking-[0.3em]">STUDIO</span>
          </div>
        }
        ctaButton={
          <a
            href="#pricing"
            className="hidden md:inline-flex px-5 py-2 text-sm border border-white/[0.12] rounded-full text-white/70 hover:text-white hover:border-white/25 backdrop-blur-sm transition-all"
          >
            Get in touch
          </a>
        }
      />

      {/* Sections */}
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <StackSection />
      <PricingSectionWrapper />
      <FooterSection />
    </main>
  );
}
