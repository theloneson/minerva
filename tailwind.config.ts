import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#F3274C",
          redAlt: "#F5274C",
          redBanner: "#ED274B",
          yellow: "#FFF200",
          yellowAccent: "#FFD40D",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#222222",
          softer: "#212121",
        },
        body: {
          gray: "#555555",
          gray2: "#5C5C5B",
        },
        footer: {
          gray: "#B5B5B5",
          divider: "#BD9675",
        },
        line: {
          card: "#E5E7EB",
          input: "#DEDEDE",
          inputThick: "#E4E4E4",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        fredoka: ["'Fredoka One'", "cursive"],
        lexend: ["Lexend", "sans-serif"],
        dmsans: ["'DM Sans'", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
        josefin: ["'Josefin Sans'", "sans-serif"],
        fugaz: ["'Fugaz One'", "cursive"],
      },
      borderRadius: {
        card: "18px",
        pastry: "30px",
        pill: "170px",
        faq: "50px",
      },
      boxShadow: {
        card: "inset 0 0 0 1px #E5E7EB, 10px 11px 20px rgba(0,0,0,0.15)",
        pastry: "0 0 20px rgba(0,0,0,0.1)",
      },
    },
  },
} satisfies Config;