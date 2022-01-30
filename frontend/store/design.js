import Category from "~/assets/json/category.json";

export const state = () => ({

  designs: [],
  design: {},
  errors: [],
  isDirect: false,
  isErrors: false,
  category: Category.categories,

})

export const getters = {
  singleDesigns(state) {
    // return (state.designs != null ? state.designs.find(design => design.image === image) : state.design);
    return state.design;
    // return state.designs;
  },
  DesignsList(state) {
    return state.designs;
  },
  ComingFromDirect(state) {
    return state.isDirect;
  },
  isErrors(state) {
    return state.isErrors;
  },
  category(state) {
    return state.category;
  },
  categoryObject: (state) => (url) => {
    return state.category.find(i => i.url === url);
  },


}
export const actions = {

  async getDesigns({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {

       this.$axios.$get('designs', {
          params: payload.filters
        }).then((response) => {
          commit('SET_DESIGNS', response)
          resolve()
        })
        .catch((e) => {
          console.log(e);
          reject(e)
        })
    })



  },
  async getSingleDesign({
    commit
  }, payload) {
    await this.$axios.$get('DisplayDesign', {
        params: {
          image: payload
        }
      }).then(function (response) {

        commit('SET_SINGLE_DESIGNS', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  async getSingle({
    commit
  }, payload) {
    await this.$axios.$get('DisplayDesign', {
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
  SET_ERRORS(state, data) {
    state.isErrors = data
  }
}
