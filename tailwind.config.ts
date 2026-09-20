import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
        maroon: {
          deep: "#500b14",
          royal: "#6b111e",
          accent: "#7a1322",
          light: "#f7eef0",
          glow: "rgba(107, 17, 30, 0.25)",
        },
        obsidian: "#0a0a0c",
        carmate: {
          red: "#ea1c24",
          redDark: "#b91219",
          black: "#05070a",
          dark: "#0a0d14",
          card: "#0f131a",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
