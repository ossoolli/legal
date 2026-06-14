import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#4A1528",
          hover: "#6B2340",
          light: "#6B2340",
        },
        charcoal: "#1C1C1C",
        cream: "#F5EFE6",
        roseGray: "#C4A8B0",
        divider: "#E8E0DA",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        libre: ["var(--font-libre)", "serif"],
      },
      fontSize: {
        h1: ["64px", { lineHeight: "1.2", fontWeight: "900" }],
        h2: ["40px", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.8", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "1.5", fontWeight: "300" }],
      },
    },
  },
  plugins: [],
};
export default config;
