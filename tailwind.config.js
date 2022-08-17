/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Cabin', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
