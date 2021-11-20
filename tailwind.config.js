module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        '_bubble': {
          '0%': { transform: 'translateY(100%)' },
          '25%': { transform: 'translateY(75%)' },
          '50%': { transform: 'translateY(50%)' },
          '75%': { transform: 'translateY(25%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bubble: {
          '0%': { marginTop: '100%', opacity: 0.3 },
          '10%': { marginTop: '90%', opacity: 0.3 },
          '20%': { marginTop: '80%', opacity: 0.5 },
          '30%': { marginTop: '70%', opacity: 0.7 },
          '40%': { marginTop: '60%', opacity: 0.7 },
          '50%': { marginTop: '50%', opacity: 0.8 },
          '60%': { marginTop: '40%', opacity: 0.8 },
          '70%': { marginTop: '30%', opacity: 0.7 },
          '80%': { marginTop: '20%', opacity: 0.6 },
          '90%': { marginTop: '10%', opacity: 0.3 },
          '100%': { marginTop: '0', opacity: 0 },
        }
      },
      animation: {
        'bubble': 'bubble 3s linear forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
