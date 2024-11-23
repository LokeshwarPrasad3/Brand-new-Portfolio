/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bree: ['bree serif'],
        overpass: ['Overpass'],
        karla: ['Karla'],
      },
    },
  },
  plugins: [],
};
