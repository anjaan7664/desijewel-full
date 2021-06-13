export default function ({
    $axios,
    redirect,
    store
  }) {
    $axios.defaults.baseURL = 'http://localhost:8000/'
  }
  