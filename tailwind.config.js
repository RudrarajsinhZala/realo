/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A237E',    // Midnight Navy
        accent: '#D4AF37',     // Metallic Gold
        'brand-bg': '#F5F5F5', // Pearl White
        'brand-text': '#262626', // Dark Chocolate
      },
    },
  },
  plugins: [],
}