/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      dropShadow: {
          'gray-xl': '0 10px 8px rgba(128, 128, 128, 0.5)',
      },
  },
  },
  plugins: [],
}

