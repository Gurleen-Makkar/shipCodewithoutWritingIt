/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          1: '#7dd3fc', // sky-300
          2: '#a78bfa', // violet-400
          3: '#f472b6', // pink-400
          4: '#fbbf24', // amber-400
          5: '#34d399', // emerald-400
        }
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite alternate',
        'spin-slower': 'spin 35s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      width: {
        '17rem': '17rem',
      }
    },
  },
  plugins: [],
}
