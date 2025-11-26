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
        "brand-primary": "var(--primary-blue)",
        "brand-secondary": "var(--secondary-blue)",
        "brand-accent": "var(--accent-gold)",
        "brand-sand": "var(--background-light)",
        "brand-white": "var(--text-white)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

