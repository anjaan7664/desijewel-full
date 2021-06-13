import Vue from 'vue';
import AOS from 'aos';
import VueImg from 'v-img';
import BackToTop from 'vue-backtotop';
require('aos/dist/aos.css');

Vue.use(AOS.init())
const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: false,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: false,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: false
}
Vue.use(VueImg, vueImgConfig);

Vue.use(BackToTop)
