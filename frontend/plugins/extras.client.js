import Vue from 'vue';
import AOS from 'aos';
import BackToTop from 'vue-backtotop';
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
require('aos/dist/aos.css');
Vue.use(AOS.init())
Vue.use(BackToTop)
