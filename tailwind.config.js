/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fungreen: "#036041",
        pampas: "#F4F2EF",
        burnorange: "#FF6A39",
        concrete: "#F3F3F3",
        alabaster: "#F8F8F8",
        mineshaft: "#222222",
        shuttlegray: "#595F69",
      },
    },
    screens: {
      mobile: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
