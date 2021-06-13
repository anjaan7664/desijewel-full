import Vue from 'vue';
import {
  library,
  config
} from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

// import { } from '@fortawesome/free-regular-svg-icons'
config.autoAddCss = false
import {
  faAddressBook,
  faSignOutAlt,
  faLanguage,
  faEnvelope,
  faPhoneSquareAlt,
  faMapMarkerAlt,
  faUserCircle,
  faSearch,
  faCaretDown,
  faAngleRight,
  faChevronRight,
  faArrowRight,
  faBars,
  faChevronUp

} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faFacebookSquare,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

library.add(faMapMarkerAlt, faPhoneSquareAlt, faEnvelope, faAddressBook, faArrowRight,
  faSignOutAlt, faBars, faLanguage, faUserCircle, faSearch, faCaretDown, faAngleRight, faChevronRight,
  faInstagram, faTwitter, faFacebookSquare, faYoutube, faChevronUp
)

Vue.component('Fa', FontAwesomeIcon)
