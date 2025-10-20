/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          balticSea: "#131314",
          lightedBalticSea: "#1c1c1d",
          textPrimary: "#F7F7F7",
          textSecondary: "#D9D9D9",
          matisse: "#266eb7",
          darkMatisse: "#123f6c",
          danube: "#6ea0ce",
          steelBlue: "#4f87bd",
          red: "#F27070",
        },
      },
      backgroundImage: {
        "menu-bg": "url('/images/technology-bg-img.webp')",
        "stars-bg": "url('/images/stars-bg.webp')",
        "projects-bg": "url('/images/projects-bg.webp')",
      },
      fontFamily: {
        sans: ["Poppins", "Vazirmatn", "sans-serif"],
        heading: ["Syne", "Noto Sans Arabic", "sans-serif"],
      },
      fontSize: {
        welcomeMessage: "clamp(0.9rem, 2.5vw, 1rem)",
        h1: "clamp(2rem, 0.9706rem + 4.7059vw, 4.2rem)",
        h2Typing: "clamp(1.2rem, 2.5vw, 1.8rem)",
        h2: "clamp(1.4rem, 3vw, 2.5rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1.2rem, 2vw, 1.2rem)",
        aboutDescription: "clamp(0.85rem, 2vw, 1.2rem)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
