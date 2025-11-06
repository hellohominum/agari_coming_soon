/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      colors: {
        'agari-green': '#348f41',
        'agari-green-dark': '#204727',
        'agari-green-hover': '#1a5632',
        'agari-red': '#9f2241',
        'agari-red-dark': '#440d1c',
        'agari-gold': '#b4a269',
        'agari-gold-50': '#f7f6ef',
      },
      fontSize: {
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        '3xl': '30px',
        '6xl': '60px',
      },
      lineHeight: {
        '6': '24px',
        '9': '36px',
      },
    },
  },
  plugins: [],
}

