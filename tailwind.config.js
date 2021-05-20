const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  variants: {},
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      fastic: {
        boost2: '#FF9933',
        glide1: '#29AB87',
        light4: '#FAFAFA',
        light2: '#f0f0f0',
        dark2: '#1F3455',
        dark5: '#95a4b5',
      },
    },
  },
  plugins: [],
}
