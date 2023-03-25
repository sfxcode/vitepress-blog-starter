/* eslint-disable quote-props */
const icons = require('@jcamp/tailwindcss-plugin-icons')

module.exports = {
  content: ['./docs/.vitepress/**/*.{js,ts,vue}', './docs/**/*.md'],
  darkMode: 'class',
  plugins: [
    icons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        width: '1.2em',
        height: '1.2em',
      },
    }),
  ],
}
