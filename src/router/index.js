import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'
import HomePage from '@/views/homepage/homepage'
import Introduction from '@/views/introduction/index'

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
      name: '',
      component: Layout,
      redirect: '/home',
      children: [
        { path: 'home', component: HomePage, name: '首页' }
      ]
    },
    {
      path: '/introduction',
      name: '',
      component: Layout,
      redirect: '/introduction/index',
      children: [
        { path: 'index', component: Introduction, name: '简述' }
      ]
    }
  ]
})
