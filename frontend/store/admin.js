export const state = () => ({

  designs: [],
  design: {},
  errors: [],

})

export const getters = {

  DesignsList(state) {
    return state.designs;
  },



}
export const actions = {

  async getDesigns({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('adminUploaded', {
          params: payload
        })
        .then((response) => {
          console.log(response.data);
          commit('SET_DESIGNS', response.data)
          resolve()
        })
        .catch((error) => {
          console.log(error);
          reject(error)
        });
    })



  },



}
export const mutations = {
  SET_DESIGNS(state, designs) {
    state.designs = designs
  },

}
