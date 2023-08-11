/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coini-purple': '#5345EB',
      },
      borderColor: {
        'input': '#DADADA',
      },
      backgroundColor: {
        'input-otp': '#292929',
      }
    },
  },
  plugins: [],
}