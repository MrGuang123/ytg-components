const typography = require('@tailwindcss/typography')

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [typography, require('./plugins')],
}
