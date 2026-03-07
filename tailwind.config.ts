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
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        "mono-dm": ["DM Mono", "monospace"],
        body: ["Inter", "sans-serif"],
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
