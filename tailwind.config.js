/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ["Great Vibes", "cursive"],
        oranienbaum: ["Oranienbaum, serif"],
      },
    },
    transitionDuration: {
      3000: "3000ms",
      5000: "5000ms",
    },
    textShadow: {
      "custom-outline": "2px 2px 0px rgba(0, 0, 0, 0.8)",
      "custom-outline-white": "2px 2px 0px rgba(255, 255, 255, 0.8)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-custom-outline": {
          textShadow: "2px 2px 0px rgba(0, 0, 0, 0.8)",
        },
        ".text-shadow-custom-outline-white": {
          textShadow: "2px 2px 0px rgba(255, 255, 255, 0.8)",
        },
      });
    },
  ],
};
