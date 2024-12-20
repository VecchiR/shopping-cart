/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', 'sans-serif'],
        lime: ['Limelight', 'Roboto', 'sans-serif'],
        hill: ['Linden Hill', 'Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        'custom-layout': '2fr 1fr 2fr',
        'header-grid': '1fr 1fr 1fr',
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}

