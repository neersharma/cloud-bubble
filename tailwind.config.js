module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'opensans': ['"Open Sans"']
      },
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
        },
        blinker2: {
          "50%": { opacity: "0.0" }
        },
        phade: {
          '0%': {
            opacity: 0,
            transform: `translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg)`,
            filter: 'blur(10px)'
          },
          '25%': {
            opacity: 1,
            transform: `translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg)`,
            filter: 'blur(0px)'
          },
          '75%': {
            opacity: 1,
            transform: `translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg)`,
            filter: 'blur(0px)'
          },
          '100%': {
            opacity: 0,
            transform: `translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg)`,
            filter: 'blur(10px)'
          }

        }
      },
      animation: {
        'bubble': 'bubble 5s linear forwards',
        "phade": 'phade 2s infinite forwards',
        "blinker2": 'blinker2 3s infinite forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
