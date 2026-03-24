"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/hover-footer";
import { Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = [
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Leistungen", href: "#leistungen" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Impressum", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "GitHub" },
];

export function FooterSection() {
  return (
    <footer className="relative pt-32 pb-8 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-vanta-blue/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TextHoverEffect */}
        <div className="h-[20rem] flex items-center justify-center mb-16">
          <TextHoverEffect text="VANTA" />
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl text-white">VANTA</span>
              <span className="font-mono-dm text-[10px] text-white/40 ml-2 tracking-wider">SYSTEMS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Wir automatisieren Geschäftsprozesse mit AI und Software. Weniger manuelle Arbeit. Mehr Wachstum.
            </p>
            <div className="space-y-2 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-vanta-blue" />
                hello@vanta.systems
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-vanta-blue" />
                Berlin, Deutschland
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono-dm text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-white/30">
            &copy; 2025 VANTA SYSTEMS. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
