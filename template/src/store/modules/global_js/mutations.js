export const mutationTypes = {
  UPDATE_GLOBAL: 'UPDATE_GLOBAL'
}

// mutations
const mutations = {
  [mutationTypes.UPDATE_GLOBAL] (state, payload) {
    state.global = payload
  }
}
export default mutations

