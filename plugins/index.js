const plugin = require('tailwindcss/plugin')
const commonStyles = require('./common-styles')

const ytgComponents = plugin(({ addBase, addComponents, theme }) => {
  addComponents(commonStyles)
}, {
  // 主题拓展
  theme: {
    // 拓展颜色：bg|text|...-c-select-hover
    // colors: {
    //   'c-select-hover': 'var(--co-bgcolor)'
    // }
    extend: {}
  }
})

module.exports = ytgComponents