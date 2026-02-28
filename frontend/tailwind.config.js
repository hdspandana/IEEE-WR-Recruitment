/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'ieee-blue': '#00629B',
        'ieee-dark': '#06111c',
        'ieee-card': '#0d1b2a',
      },
    },
  },
  plugins: [],
}