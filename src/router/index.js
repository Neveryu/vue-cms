import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'
import HomePage from '@/views/homepage/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      name: '首页',
      component: Layout,
      children: [
        { path: 'home', component: HomePage }
      ]
    }
  ]
})
