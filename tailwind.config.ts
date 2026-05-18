import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        "3xl": "1800px",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        green: {
          300: "#BDF7E6",
          400: "#6AE3BE",
          500: "#24BC8E",
          600: "#25A47D",
          700: "#1E745A",
        },
        fireOragne: {
          300: "#FEDEDA",
          400: "#FCBEB5",
          500: "#E8260C",
          600: "#C52611",
          700: "#7B0F00",
        },
        black: {
          "00": "#E3E3EA",
          50: "#C0C0C8",
          100: "#94949D",
          200: "#7A7A87",
          300: "#52525C",
          400: "#3F3F48",
          500: "#080808",
        },
        white: {
          "00": "#9E9EAC",
          50: "#B9B9C6",
          100: "#D1D1D9",
          200: "#ECECF1",
          300: "#F6F6F8",
          400: "#FDFDFD",
          500: "#ffffff",
        },
        primary: {
          white: "#fff",
          black: "#080808",
          green: "#24BC8E",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
