import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// store 内默认 state 数据
const state = {
  global: 'demo'
}

export default {
  state,
  getters,
  actions,
  mutations
}
