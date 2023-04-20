/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bvp: ['Be Vietnam Pro'],
      },
      colors: {
        primary: '#8718de',
        whatsapp: '#25D366',
      },
      screens: {
        'laptopL': '1440px',
      },
      animation: {
        'alir': 'alir 1s ease-in-out infinite',
        'aliran': 'aliran 1s ease-in-out infinite',
      },
      keyframes: {
        alir: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(50%)' },
        },
        aliran: {
          '0%, 100%': { transform: 'translateX(-30%)' },
          '50%': { transform: 'translateX(30%)' },
        }
      },
    },
  },
  plugins: [],
}