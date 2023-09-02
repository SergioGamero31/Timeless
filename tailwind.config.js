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
        'onyx': '#454545',
        'linen': '#F5EFE7',
        'dun': '#D8C4B6',
        'tan': '#E5C18C',
        'coyote': '#7F5529',
        'khaki': {
          400: '#C0A48F',
          500: '#A98166',
          600: '#9B705B'
        },
        'payne-gray': {
          400: '#788E98',
          500: '#596E79',
          600: '#4F5F6B'
        },
        'brick-red': {
          300: '#F4ADB1',
          700: '#AD233B'
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
  plugins: [
    require('tailwindcss-animated')
  ]
}

