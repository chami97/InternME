// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content:[
        './app/**/*.{js,jsx}',
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
  theme: {
    extend: {
      colors:{
        'bluecolor':'#2a68ff',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textColor': "#252b36",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  //...
}