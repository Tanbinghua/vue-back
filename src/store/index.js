import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  svrUrl: 'https://www.vue-js.com/api/v1/'
}

export default new Vuex.Store({
  state
})
