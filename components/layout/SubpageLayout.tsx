"use client";

import { Briefcase, Layers, Code2, CreditCard } from "lucide-react";
import { TubelightNavbar } from "@/components/ui/tubelight-navbar";
import { FooterSection } from "@/components/sections/FooterSection";

const navItems = [
  { name: "Leistungen", url: "/#leistungen", icon: Layers },
  { name: "Prozess", url: "/#prozess", icon: Briefcase },
  { name: "Technologie", url: "/#technologie", icon: Code2 },
  { name: "Pakete", url: "/#pakete", icon: CreditCard },
];

interface SubpageLayoutProps {
  children: React.ReactNode;
}

export function SubpageLayout({ children }: SubpageLayoutProps) {
  return (
    <main className="bg-[#030305] min-h-screen">
      <TubelightNavbar
        items={navItems}
        logo={
          <a href="/" className="flex flex-col leading-none">
            <span className="font-display text-xl text-white tracking-wide">TXC</span>
            <span className="font-mono-dm text-[9px] text-white/40 tracking-[0.3em]">SYSTEMS</span>
          </a>
        }
        ctaButton={
          <a
            href="/kontakt"
            className="hidden md:inline-flex px-5 py-2 text-sm border border-white/[0.12] rounded-full text-white/70 hover:text-white hover:border-white/25 backdrop-blur-sm transition-all"
          >
            Erstberatung sichern
          </a>
        }
      />
      <div className="pt-24">
        {children}
      </div>
      <FooterSection />
    </main>
  );
}
