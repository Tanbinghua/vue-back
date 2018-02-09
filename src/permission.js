router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) {
        store.dispath('GetInfo').then((res) => {
          const role = res.data.role
          store.pispatch('GenerateRoutes', {role}).then(() => {
            router.addRoutes(store.getters.addRoutes)
            next({...to, replace: true})
          })
        }).catch((res) => {
          console.log(res)
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})