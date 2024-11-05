/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valorant-red': '#ff4655',
        'valorant-dark': '#0f1923',
        'valorant-gray': '#1f2937',
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'valorant': '0 4px 14px 0 rgba(255, 70, 85, 0.25)',
      },
    },
  },
  plugins: [],
}