import Vue from 'vue'
import Router from 'vue-router'

import Login from '../view/Login'
import Four from '../view/Error'
import Home from '../view/Home'
import Forum from '../view/Forum'
import User from '../view/User'
import Content from '../view/Content'
import NewContent from '../view/newContent'
import Editor from '../view/Editor'
import Form from '../view/Form'
import About from '../view/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/forum',
      component: Home,
      children: [
        { path: '/', name: 'Forum', component: Forum },
        { path: '/user', name: 'User', component: User },
        { path: '/content', name: 'Content', component: Content },
        { path: '/newContent', name: 'NewContent', component: NewContent },
        { path: '/editor', name: 'Editor', component: Editor },
        { path: '/form', name: 'Form', component: Form },
        { path: '/about', name: 'About', component: About }
      ]
    },
    { path: '/', name: 'Login', component: Login },
    { path: '*', redirect: '/error' },
    { path: '/error', name: Four, component: Four }
  ]
})
