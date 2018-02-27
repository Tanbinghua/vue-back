// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/main.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as filters from './filters/filter'
import store from '@/store'
import './permission'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
