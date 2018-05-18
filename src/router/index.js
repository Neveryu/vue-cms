import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/login'
import Layout from '@/views/layout/layout'
import HomePage from '@/views/homepage/homepage'
import Introduction from '@/views/introduction/index'
import ExportExcel from '@/views/excel/export-excel'
import UploadExcel from '@/views/excel/upload-excel'

Vue.use(Router)

/**
 * alwaysShow: true           if set true, will always show the root menu, whatever its child routes length
 *                            if not set alwaysShow, only more than ont route under the children
 *                            it will becomes nested mode, otherwise not show the root menu
 */

export const constantRouterMap = [
  {
    path: '/login',
    name: '登录',
    hidden: true,
    component: Login
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      { path: 'home', component: HomePage, name: '首页' }
    ]
  },
  {
    path: '/introduction',
    name: '简述',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'question',
    children: [
      { path: 'index', component: Introduction, name: '简述' }
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
    name: '表格',
    component: Layout,
    redirect: '/excel/export-excel',
    title: 'excel',
    icon: 'edit',
    alwaysShow: true,
    children: [
      { path: 'export-excel', component: ExportExcel, name: '导出表格', meta: { title: 'exportExcel' } },
      // { path: 'export-selected-excel', component: _import('excel/selectExcel'), name: 'selectExcel', meta: { title: 'selectExcel' }},
      { path: 'upload-excel', component: UploadExcel, name: '上传表格', meta: { title: 'uploadExcel' } }
    ]
  }
  // {
  //   path: '/upload',
  //   name: '上传',
  //   component: Upload
  // }
]