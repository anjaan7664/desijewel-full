export default function ({
  $axios,
  store,
  redirect
}) {
  $axios.onError(error => {
  console.log(error);
  })
  $axios.interceptors.response.use(
    response => {
      if (response.status === 200) {
        if (response.request.responseURL && response.request.responseURL.includes('login')) {
          store.dispatch("setUser", response);
        }
      }
      return response
    }
  )
}
