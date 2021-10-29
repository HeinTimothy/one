const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "rgba(0, 0, 0, 0)",
      light: "#F8FAFC",
      gray: "#404040",
      night: "#121219",
      moon: "#FAFAFA",
      fuchsia: colors.fuchsia,
      amber: colors.amber,
      'amber-ghost': "rgba(251, 191, 36, .2)",
      purple: colors.purple

    },
    fontFamily: {
      'sans': ["Nunito", "sans-serif"],
      'serif': ['"Belgrano"', "serif"],
      'sharp': ['"Cormorant Garamond"', "serif"],
      'mono': ['"JetBrains Mono"', "monospace"],
    },
    minWidth: {
      ...defaultTheme.spacing
    },
    extend: {
      spacing: {
        '2/3': '66%',
        '2/5': '40%',
        '1/3': '33%',
        '2/7': '28%',
        '1/4': '25%',
        '1/5': '20%',
        '1/7': "14.28%",
        '1/9': '11.11%',
        '1/12': '8.33%',
        'left-pad': '60px',
      },
      borderWidth: {
        '16': '16px',
        '20': '20px',
      },
      width: {
        'content': '800px',
        'navbar': '300px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
