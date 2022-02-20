import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {
  nuxtServerInit (context) {
   
  },

  nuxtClientInit ({ commit, getters }) {
    // const token = Cookies.get('token')
    // if (token && !getters['auth/token']) {
    //   commit('auth/SET_TOKEN', token)
    // }

    // const locale = Cookies.get('locale')
    // if (locale && !getters['lang/locale']) {
    //   commit('lang/SET_LOCALE', { locale })
    // }
  }
}