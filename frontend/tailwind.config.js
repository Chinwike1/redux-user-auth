/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          dark: '#0a1628',
          medium: '#1a2744',
          light: '#2a3a5c',
        },
        accent: {
          blue: '#16b8f3',
          hover: '#12a8df',
        }
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      }
    },
  },
  plugins: [],
}
