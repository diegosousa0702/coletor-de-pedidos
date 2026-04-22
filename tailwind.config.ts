import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        sidebar: "#0a0a0a",
        primary: {
          DEFAULT: "#dc2626",
          hover: "#ef4444",
        },
        surface: {
          card: "rgba(24, 24, 27, 0.5)", // zinc-900/50
          dark: "#050505",
        },
        border: "#27272a", // zinc-800
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        headline: ["var(--font-space)", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
