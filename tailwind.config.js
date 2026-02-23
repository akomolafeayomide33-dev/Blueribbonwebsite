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
          DEFAULT: '#1A3A6B',
          light: '#2A4A7B',
          dark: '#0A2A5B',
        },
        secondary: {
          DEFAULT: '#D4A017',
          light: '#E4B027',
          dark: '#C49007',
        },
        accent: '#F9F7F2',
        background: '#FDF6EC',
        charcoal: '#1C1C1E',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['Nunito', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
