/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ' system-ui', 'sans-serif']
      },
      colors: {
        'gray-300': '#EEEEEE',
        'gray-400': '#808080',
        'gray-500': '#3C3C3C',
        'gray-600': '#111111',
        'blue-600': '#2D9AFF'
      },
      boxShadow: {
        md: '0 10px 10px -5px rgba(0, 0, 0, 0.05)',
        lg: '0 25px 30px 0 rgba(0, 0, 0, 0.035)'
      },
      perspective: {
        1000: '1000px'
      },
      transitionProperty: {
        shadow: 'box-shadow',
        opacity: 'opacity',
        visibility: 'visibility'
      }
    },
    container: {
      padding: { DEFAULT: '1rem' },
      screens: {
        // sm: '600px',
        // md: '728px',
        lg: '1024px'
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden'
        }
      })
    }
  ]
}
