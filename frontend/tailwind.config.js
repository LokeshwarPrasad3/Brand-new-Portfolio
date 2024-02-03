/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'signika': ['signika negative'],
        'bree': ['bree serif'],
        'overpass': ['Overpass'],
      }
    },
  },
  plugins: [],
};