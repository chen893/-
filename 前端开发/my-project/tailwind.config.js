const { plugin } = require("postcss");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active','group-focus'],
      scale: ['focus-within'],
      opacity:['disabled']
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      const newUtilities = {
        '.filter-none': {
          filter: 'none',
        },
        '.filter-grayscale': {
          filter: 'grayscale(100%)',
        }
      }
      addUtilities(newUtilities,['responsive','hover'])
    })
  ],


}
