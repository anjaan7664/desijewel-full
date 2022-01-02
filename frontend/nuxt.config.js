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
    title: 'Designing Jewel- The Showcase of Desi Indian and Rajasthani Jewellery',
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
        content: 'Photos of Indian , Desi , Rajasthani Gold jewellery Design with weight and category wise'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ',Indian,Desi,emboss,ehnic,jewellery,kundan,design,gold,Rajasthani,photos'
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
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.API_URL,
        cookie: {
          cookie: {
            name: 'token', // cookie name
          }
        },
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
        },
        withCredentials: true // Send cookies to allow the server to access session
      }
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
