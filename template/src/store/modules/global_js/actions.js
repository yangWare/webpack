import { mutationTypes as types } from './mutations'

const updateGlobal = (context, payload) => {
  context.commit(types['UPDATE_GLOBAL'], payload)
}

const actions = {
  updateGlobal
}

export default actions
