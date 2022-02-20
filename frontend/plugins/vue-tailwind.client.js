import Vue from 'vue';
import VueTailwind from 'vue-tailwind';
import {
  AtomSpinner,
  HalfCircleSpinner
} from "epic-spinners";
import {
  TInput,
  TPagination,
  TSelect,
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
  't-select': {
    component: TSelect,
    props: {
      fixedClasses: 'block w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
      }
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
