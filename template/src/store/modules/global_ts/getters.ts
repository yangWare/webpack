import { GetterTree, Getter } from 'vuex'
import { State } from './interface'

const getGlobal: Getter<State, any> = (state: State) => {
  return state.global
}
const getterTree: GetterTree<State, any> = {
  getGlobal
}

export default getterTree
