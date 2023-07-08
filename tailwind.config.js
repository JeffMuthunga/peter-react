/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}