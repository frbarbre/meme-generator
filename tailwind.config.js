/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
        karla: '"Karla", sans-serif',
        impact: '"Impact", sans-serif'
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
}

