import { Commit, Action, ActionTree } from 'vuex'
import { mutationTypes as types } from './mutations'
import { State } from './interface'

const updateGlobal: Action<State, any> = (context: { commit: Commit }, payload: string) => {
  context.commit(types['UPDATE_GLOBAL'], payload)
}

const actions: ActionTree<State, any> = {
  updateGlobal
}

export default actions
