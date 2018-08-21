import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import { State } from './interface'

// store 内默认 state 数据
const state: State = {
  global: 'demo'
}

export default {
  state,
  getters,
  actions,
  mutations
}
