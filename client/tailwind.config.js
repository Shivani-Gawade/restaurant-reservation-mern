/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#a77979',
          600: '#975a5a',
          700: '#844d4d',
          800: '#6c3a3a',
          900: '#552b2b',
        }
      }
    },
  },
  plugins: [],
}
