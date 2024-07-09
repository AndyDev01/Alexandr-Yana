/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatvibes: ["Great Vibes", "cursive"],
      },
    },
    transitionDuration: {
      3000: "3000ms",
      5000: "5000ms",
    },
  },
  plugins: [],
};
