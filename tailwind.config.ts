import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        vanta: {
          bg: "#030305",
          blue: "#3ca2fa",
          purple: "#9333EA",
          cyan: "#06B6D4",
        },
      },
      fontSize: {
        "2xs": ["9px", { lineHeight: "1" }],
      },
      letterSpacing: {
        label: "0.3em",
        sublabel: "0.2em",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "serif"],
        "mono-dm": ["var(--font-mono-dm)", "DM Mono", "monospace"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 12s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
