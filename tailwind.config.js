module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {

        '90': '90%',
        '95': '95%',
        '12.5': '12.5%',
        '16': '16%',
        '11': '11%',
        '89': '89%',
        '84': '84%'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
