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
  serverMiddleware: [
    '~/middleware/redirect',
  ],
  env: {
    serverUrl: process.env.API_URL
  },

  ssr: true,
  head: {
    title: 'Designing Jewel- The Showcase of Indian and Rajasthani Jewellery',
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
        content: 'Designing Jewel features high-quality wide range of affordable Designs online. Designing Jewel offers High Quality, Certified Hallmarked Premium Jewellery for you and your family.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'emboss,ethnic,gold price,22ct,women,buy,jewellery,kundan,emboss,design,gold,jodhpur,pali,barmer,nagaur,bikaner '
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
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
    '~/plugins/vform.client.js',
    '~/plugins/fontawesome.js',
    '~/plugins/vue-tailwind.client.js',
    '~/plugins/upload.client.js',
    '~/plugins/photoswipe.client.js'
  ],
  components: true,

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/svg',
    '@nuxtjs/google-analytics'
  ],

  modules: [
    'nuxt-i18n',
    // 'nuxt-lazy-load',
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '@nuxt/image',
  ],

  auth: {
    strategies: {


      local: {
        token: {
          property: 'token',
          type: 'Bearer',
          global:false,
          maxAge: 60 * 60 * 24 * 60, // 60 days
        },
        user: {
          property: false, // <--- Default "user"
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/logout',
            method: 'post'
          },
          user: {
            url: '/user',
            method: 'get',
            propertyName: false
          }
        }

      },



    },
    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      callback: '/auth/login',
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
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },
  axios: {
    credentials: true,
    baseURL: process.env.API_URL, // Used as fallback if no runtime config is provided
  },
  vue: {
    config: {
      productionTip: false
    }
  },
  i18n: {
    baseUrl: process.env.API_URL,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'localelang'
    },
    defaultLocale: 'en',
    seo: true,
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
    vueI18n: i18n
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },
  'google-adsense': {
    id: process.env.GOOGLE_ADSENSE_ID,
    onPageLoad: true
  },
  sitemap: {
    hostname: 'https://desijewel.in',
    gzip: true,
    exclude: [
      '/setting/**',
      '/auth/**',
      '/hi/auth/**',

    ],
    routes: [
      '/gold/aad',
      '/gold/mangalsutra',
      {
        url: '/gold/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
}
