import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono-dm",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TXC Systems | AI-Automatisierung & Software",
  description: "Wir automatisieren Geschäftsprozesse mit AI und Software. Weniger manuelle Arbeit, mehr Wachstum — für Unternehmen, die Zeit sparen wollen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${cormorant.variable} ${dmMono.variable} ${inter.variable} antialiased`}>
        {/* Grain overlay */}
        <div
          className="pointer-events-none fixed inset-0 z-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            opacity: 0.03,
            mixBlendMode: "overlay",
          }}
        />
        {children}
      </body>
    </html>
  );
}
