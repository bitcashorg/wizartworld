/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    '/ui/_legacy/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif'],
    },
    extend: {
      screens: {
        xs: '341px',
      },
      dropShadow: {
        'wz-purple': '0 0px 50px rgb(172 47 164 / 55%)',
      },
      colors: {
        'wz-green': '#1ED761',
        'wz-white': '#D9D9D9',
        'wz-purple': {
          50: '#f5f2ff',
          100: '#ece8ff',
          200: '#ddd4ff',
          300: '#c3b1ff',
          400: '#a685ff',
          500: '#854bfe', // 'wz-purple': '#854bfe',
          600: '#7e31f6',
          700: '#6f1fe2',
          800: '#5c19be',
          900: '#4d179b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
