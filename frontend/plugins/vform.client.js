import Vue from 'vue';
import axios from 'axios'
import {
  Button,
  HasError,
  AlertError,
  AlertSuccess
} from 'vform/src/components/tailwind';
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
Vue.component(Button.name, Button)