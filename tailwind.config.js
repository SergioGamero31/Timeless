/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'linen': '#F5EFE7',
        'dun': '#D8C4B6',
        'khaki': '#C0A48F',
        'tiffany-blue': '#A3D2CA',
        'verdigris': '#5EAAA8',
        'caribbean': '#056676'
      }
    },
  },
  plugins: [],
}

