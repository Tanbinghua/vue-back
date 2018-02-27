import router from './router'
import store from './store'
import axios from 'axios'

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (sessionStorage.getItem('accesstoken')) {
      next('/')
    } else {
      next()
    }
  } else if (withList.indexOf(to.path) >= 0) {
    next()
  } else {
    if (store.state.user_info.loginname === '') {
      if (sessionStorage.getItem('accesstoken') === '') {
        next('/login')
      } else {
        let url = store.state.svrUrl + '/user/' + sessionStorage.getItem('loginname')
        axios.get(url).then((res) => {
          if (res.data) {
            store.commit({
              type: 'setUserInfo',
              info: JSON.stringify(res.data.data)
            })
          } else {
            console.log('permisson')
          }
        }).catch((res) => {
          console.log('permission: ', res)
        })
        next()
      }
    } else if (store.state.user_info.loginname !== '' && sessionStorage.getItem('accesstoken')) {
      next()
    } else {
      next('/login')
    }
  }
})

const withList = ['/error', '/login']
