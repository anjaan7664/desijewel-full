require('dotenv').config();
import i18n from './plugins/i18n';
export default {
  target: 'server',
  components: true,
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
    serverUrl: process.env.API_URL
  },

  env: {
    serverUrl: process.env.API_URL
  },

  ssr: true,
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
    },{
      rel: 'stylesheet',
      href: "https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat&family=Poppins:wght@400;800&family=Teko&display=swap"
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
    '~/plugins/vform.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-tailwind.client.js',
    '~/plugins/upload.client.js'
  ],
  components: true,

  buildModules: [

    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',

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
    ['nuxt-lazy-load'],
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt'
  ],

  axios: {
    credentials: true,
    baseURL: 'http://localhost:8000',
  },

  auth: {
    strategies: {
      cookie: {
        cookie: {
          name: 'XSRF-TOKEN',
        }
      },
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/login',
          },
          logout: {
            url: '/logout',
            method: 'post'
          },
          user: {
            url: '/user',
            method: 'get'
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
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', {
          loose: true
        }]
      ]
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
  vue: {
    config: {
      productionTip: false
    }
  }
}
