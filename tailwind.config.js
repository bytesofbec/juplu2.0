/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        juplu: {
          cyan: '#00AAE7',
          cyanLight: '#83D8EE',
          mint: '#C9E4CA',
          mintLight: '#E8F5E9',
          mintDark: '#9BC29C',
          dark: '#1C1C1E',
          accent: '#FF7A59',
          warm: '#FBF9F5',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

