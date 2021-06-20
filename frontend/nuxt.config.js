require('dotenv').config();
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
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt'
  ],
  axios: {

    proxy: true,
    credentials: true
  },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        endpoints: {
          login: {
            url: '/api/login',
          },
          logout: {
            url: '/api/logout',
            method: 'post'
          },
          user: {
            url: '/api/user',
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
  build: {},
  configureWebpack: {
    devtool: 'source-map'
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
}
