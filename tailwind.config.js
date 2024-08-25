/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      screens: { md2: "816px" },
      fontFamily: { prompt: ["Prompt", "sans-serif"] },
    },
  },
  plugins: [flowbite.plugin()],
};
