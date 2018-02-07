import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  svrUrl: 'https://www.vue-js.com/api/v1/',
  user_info: {
    loginname: '',
    avatar_url: '',
    create_at: '',
    score: 0
  }
}

export default new Vuex.Store({
  state,
  mutations
})
