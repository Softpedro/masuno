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
        'pink': '#DB0FA8',
        'blue': '#003383',
        'red': '#D43E36',
        'gray': '#595959',
        'label': '#B7B1A9',
        'link': '#1A36A8'
      },
      borderColor: {
        'input': '#B7B1A9',
        'focus': '#1A36A8'
      },
      backgroundColor: {
        'blue': '#003383',
        'blueDark': '#1A36A8'
      },
    },
  },
  plugins: [],
}