import { State } from './interface'

export const mutationTypes = {
  UPDATE_GLOBAL: 'UPDATE_GLOBAL'
}

// mutations
const mutations = {
  [mutationTypes.UPDATE_GLOBAL] (state: State, payload: string) {
    state.global = payload
  }
}
export default mutations

