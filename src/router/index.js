import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'
import HomePage from '@/views/homepage/homepage'
import Introduction from '@/views/introduction/index'
import ExportExcel from '@/views/excel/export-excel'
import UploadExcel from '@/views/excel/upload-excel'
import ClipBoard from '@/views/clipboard'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 * alwaysShow: true           如果设置为true,它将总是现在在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                            它的唯一子路由放到跟目录上来，而不显示它自己本身。
 */

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: HomePage, name: 'home', meta: { title: '首页' } }
    ]
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: Layout,
    redirect: '/introduction/index',
    meta: {
      icon: 'question',
      title: '简述'
    },
    children: [
      { path: 'index', component: Introduction, meta: { title: '简述' } }
    ]
  },
  {
    path: '/nested',
    name: 'nested',
    component: Layout,
    meta: {
      icon: 'question',
      title: '路由嵌套'
    },
    children: [
      {
        path: 'menu1',
        name: 'menu1',
        component: Introduction,
        meta: { title: 'menu1' },
        children: [
          {
            path: 'menu1-1',
            name: 'menu1-1',
            component: Introduction,
            meta: { title: 'menu1-1' }
          },
          {
            path: 'menu1-2',
            name: 'menu1-2',
            component: Introduction,
            meta: { title: 'menu1-2' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'menu2',
        meta: { title: 'menu2' },
        component: Introduction
      }
    ]
  }
]

export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/excel',
    name: 'excel',
    component: Layout,
    redirect: '/excel/export-excel',
    alwaysShow: true,
    meta: {
      title: '表格',
      icon: 'edit'
    },
    children: [
      { path: 'export-excel', component: ExportExcel, name: '导出表格', meta: { title: 'exportExcel' } },
      { path: 'upload-excel', component: UploadExcel, name: '上传表格', meta: { title: 'uploadExcel' } }
    ]
  },
  {
    path: '/clipboard',
    component: Layout,
    redirect: 'index',
    meta: {
      icon: 'document',
      title: '剪切板'
    },
    children: [
      { path: 'index', component: ClipBoard, name: 'clipBoard', meta: { title: '剪切板示例', icon: 'document' } }
    ]
  }
]