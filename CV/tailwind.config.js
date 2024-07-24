/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-bg': '#f0fff4',
        'dark-bg': '#1a202c',
        'light-text': '#2d3748',
        'dark-text': '#e2e8f0',
      }
    },
  },
  plugins: [],
}
