/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5C339E',    
          blue: '#1EA1F2',      
          green: '#97CC04',     
          orange: '#FF7A00',    
          pink: '#D81E5B',      
          yellow: '#FFD500',    
          text: '#222222',      
          light: '#F5F7FA'      
        }
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        fun: ['Fredoka', 'Quicksand', 'sans-serif']
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
