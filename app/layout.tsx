import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VANTA STUDIO | Digital Experience Studio",
  description: "We build experiences that leave marks. Crafting immersive digital worlds for brands that dare to be remembered.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
