/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        custom1: '#feda75',
        custom2: '#fa7e1e',
        custom3: '#d62976',
        custom4: '#962fbf',
        custom5: '#4f5bd5 '
      },
    },
  },
  plugins: [],
}

