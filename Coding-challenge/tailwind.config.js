/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Didot: ['GFS Didot', 'serif'],
        Lato: ['Lato', 'sans-serif'],
       },
    },
  },
  plugins: [],
}

