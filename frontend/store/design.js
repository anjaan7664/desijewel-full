export const state = () => ({

  designs: [],
  isDirect: false,
  isLoaded: false,
  isLoading: true

})

export const getters = {
  singleDesigns(state) {
    // return (state.designs != null ? state.designs.find(design => design.image === image) : state.design);
    return state.designs;
    // return state.designs;
  },
  DesignsList(state) {
    return state.designs;
  },
  ComingFromDirect(state) {
    return state.isDirect;
  },
  isLoading(state) {
    return state.isLoading;
  }

}
export const actions = {

  getDesigns({
    commit
  }, payload) {
    commit('SET_LOADING', true)
    setTimeout(() => {
      this.$axios.get('api/designs', {
          params: payload.filters
        }).then(function (response) {
          commit('SET_DESIGNS', response.data)
          commit('SET_LOADING', false)
        })
        .catch(function (error) {
          console.log(error)
          commit('SET_LOADING', false)
        })
    }, 0)
  },
  getSingleDesign({
    commit
  }, payload) {
    this.$axios.get('api/DisplayDesign', {
        params: {
          image: payload
        }
      }).then(function (response) {
        commit('SET_SINGLE_DESIGNS', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

}
export const mutations = {
  SET_DESIGNS(state, designs) {
    state.designs = designs
  },
  SET_SINGLE_DESIGNS(state, singleDesign) {
    state.designs = singleDesign
  },
  SET_COMING_DIRECT(state, boolean) {
    state.isDirect = boolean
  },
  setCurrentPage(state, data) {
    state.designs.current_page = data
  },
  SET_LOADING(state, data) {
    state.isLoading = data
  }
}
