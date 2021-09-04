import Category from "~/assets/json/category.json";

export const state = () => ({

  designs: [],
  design:{},
  isDirect: false,
  isLoaded: false,
  isLoading: true,
  category:Category.categories

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
  isLoading(state) {
    return state.isLoading;
  },
  category(state){
    return state.category;
  }

}
export const actions = {

  async getDesigns({
    commit
  }, payload) {
    commit('SET_LOADING', true);

    await this.$axios.$get('designs', {
        params: payload.filters
      }).then((response) => {
        commit('SET_DESIGNS', response)
        console.log(response);
        commit('SET_LOADING', false)
      })
      .catch((error) => {
        console.log(error)
        commit('SET_LOADING', false)
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
  SET_LOADING(state, data) {
    state.isLoading = data
  }
}
