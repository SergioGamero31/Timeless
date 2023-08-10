/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eerie-black': '#252525',
        'linen': '#F5EFE7',
        'dun': '#D8C4B6',
        'khaki': {
          400: '#c0a48f',
          500: '#a98166',
          600: '#9b705b'
        },
        'verdigris': {
          400: '#5aa7a5',
          500: '#408c8c',
          600: '#316f70'
        }
      }
    },
    screens :{
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

