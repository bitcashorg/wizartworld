/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    '/ui/_legacy/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors
    },
    fontFamily: {
      inter: ['Urbanist'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
