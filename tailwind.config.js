/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['CormorantGaramondRegular', 'serif'],
        cormorantItalic: ['CormorantGaramondItalic', 'serif'],
        montserrat: ['MontserratRegular', 'sans-serif'],
        halimun: ['HalimunRegular', 'cursive'],
        zeyn: ['ZeynRegular', 'serif'],
      },
      colors: {
        primary: '#fff',
        secondary: '#505946',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
