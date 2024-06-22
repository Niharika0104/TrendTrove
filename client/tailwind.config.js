/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Components/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'darkblue': '#112D4E', 
        'lightblue': '#3F72AF', 
        'subtleblue':'#DBE2EF',
        'whitish':'#F9F7F7'
      }
    },
  },
  plugins: [],
}