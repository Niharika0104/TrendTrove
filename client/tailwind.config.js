/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/**/**.{js,jsx,ts,tsx}",
    "./src/Components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#112D4E",
        lightblue: "#3F72AF",
        subtleblue: "#DBE2EF",
        whitish: "#F9F7F7",
        "section-primary": "#B04B3C",
      },
    },
  },
  plugins: [],
});
