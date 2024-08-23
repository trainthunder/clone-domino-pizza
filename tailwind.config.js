/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { md2: "816px" },
      fontFamily: { prompt: ["Prompt", "sans-serif"] },
    },
  },
  plugins: [],
};
