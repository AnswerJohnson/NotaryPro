/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
        },
        darkBlue: '#0f172a',
      },
      boxShadow: {
        soft: '0 10px 20px rgba(0, 0, 0, 0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};


