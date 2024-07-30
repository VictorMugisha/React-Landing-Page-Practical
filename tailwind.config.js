/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(0, 0, 0, 0.16)', // Custom color name and RGBA value
      },
    },
  },
  plugins: [],
}

