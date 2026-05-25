import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F1E3C",
          orange: "#F5A623",
          white: "#FFFFFF",
          ink: "#101827",
          mist: "#F5F7FB"
        }
      },
      boxShadow: {
        premium: "0 24px 80px rgba(15, 30, 60, 0.16)",
        glow: "0 18px 70px rgba(245, 166, 35, 0.28)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        routePulse: {
          "0%, 100%": { opacity: "0.28" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        routePulse: "routePulse 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
