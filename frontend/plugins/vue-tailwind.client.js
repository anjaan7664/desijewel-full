import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import {
  AtomSpinner,
  HalfCircleSpinner
} from "epic-spinners";
import {
  TInput,
  TPagination,
} from 'vue-tailwind/dist/components'

const settings = {
  't-pagination': {
    component: TPagination,
    props: {
      classes: {
        wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
        element: 'w-8 h-8 border border-gray-200 table-cell hover:border-pink-100',
        activeElement: 'w-8 h-8 border border-gray-200 border-pink-500 table-cell hover:border-pink-600',
        disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
        ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
        activeButton: 'bg-pink-500 w-full h-full text-white hover:bg-pink-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-pink-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'hover:bg-pink-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-pink-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: ''
      }
    }
  },
  't-input': {
    component: TInput,
    props: {
      classes: 'border-2 block w-full rounded text-gray-800'
      // ...More settings
    }
  },
  'atom-spinner': {
    component: AtomSpinner
  },
  'half-circle-spinner': {
    component: HalfCircleSpinner
  },

}
Vue.use(VueTailwind, settings);
