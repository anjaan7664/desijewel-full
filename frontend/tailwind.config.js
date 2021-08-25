module.exports = {
  mode:'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      screens: {
        xsm: '340px'
      },
      colors: {
        primary: '#DE2F4F',
        secondary: '#FEB564',
        accent: '#CE3896',
        red: '#FF0000',
        'black-light': '#171717',
        'black-medium': '#111111',
        'nav-color': '#141E30',
        'p-green': '#00A693',
        'black-button': '#395174',
        'footer-gray': '#1A1818'
      },
      spacing: {
        '1/1': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%'
      },
      fontFamily: {
        'Samarkan': ['Samarkan'],
        'Cormorant': ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        lg2: '0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        card: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
        neumorph: '12px 12px 16px 0 rgba(0, 0, 0, 0.25),-6px -6px 25px 0 rgba(222, 47, 69, 0.3)'
      }
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('autoprefixer'),
    require('postcss-nested')
  ]
}
