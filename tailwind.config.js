/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
      },
      borderColor: {
        'input': '#DADADA',
      },
      backgroundColor: {
        'blue': '#003383',
      }
    },
  },
  plugins: [],
}