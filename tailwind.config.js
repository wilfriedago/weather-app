/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Apercu', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
