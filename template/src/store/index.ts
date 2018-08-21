import Vue from 'vue'
import Vuex from 'vuex'
import global from './modules/global_ts/index'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
// console.log(personal)
export default new Vuex.Store({
  modules: {
    global
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
