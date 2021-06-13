require('dotenv').config()
import i18n from './plugins/i18n';
export default {
  target: 'static',

  head: {
    title: 'Designing Jewel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  css: [
    '~/assets/css/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  plugins: [
    '~/plugins/axios.js',
    '~plugins/i18n',
    '~/plugins/extras.client.js',
    '~/plugins/extras.js',
    '~/plugins/vform.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-tailwind.client.js'
  ],
  components: true,

  buildModules: [

    '@nuxtjs/tailwindcss'
  ],

  modules: [
    ['nuxt-i18n', {
      locales: [{
          name: 'English',
          code: 'en',
          iso: 'en-US'
        },
        {
          name: 'Hindi',
          code: 'hi',
          iso: 'hi-IN'
        }

      ],
      defaultLocale: 'en',
      vueI18n: i18n
    }],
    '@nuxtjs/auth-next',
    '@nuxtjs/axios'
  ],
  axios: {

    proxy: true,
    credentials: true
  },
  proxy: {
    '/laravel': {
      target: 'http://localhost:8000',
      pathRewrite: {
        '^/laravel': '/'
      }
    }
  },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/login',
          }
        }
      },
      cookie: {
        cookie: {
          // (optional) If set we check this cookie exsistence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }
      }
    },
    redirect: {
      login: '/Auth/login',
      logout: '/Auth/login',
      callback: '/Auth/login',
      home: '/'
    }
  },
  build: {},
  configureWebpack: {
    devtool: 'source-map'
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
}
