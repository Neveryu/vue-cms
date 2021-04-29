/*
 * 全局权限检测
 * 包括1、路由的全局守卫
 */
import router from './router'
import store from './store'

import { Message } from 'element-ui'

import { loadFromSession } from '@/common/session-storage'
import { getToken } from '@/common/auth'
import getPageTitle from '@/utils/get-page-title'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false })

const whiteList = ['/login'] // 白名单

// 路由全局前置守卫
router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)

  NProgress.start() // start progress bar
  if (getToken()) {
    // 有token访问login页面，就跳到首页
    if (to.path === '/login') {
      console.log('1-1')
      if (loadFromSession('userRoutes', []).length < 1) {
        await store.dispatch('user/resetToken')
        next(`/login?redirect=${to.path}`)
        NProgress.done()
        return
      } else {
        next({ path: '/', replace: true })
        NProgress.done() // 这种情况不会触发router的后置钩子，所以这里需要单独处理
      }
    } else {
      console.log('1-2')
      // 有token，如果动态路由存在，则直接next
      if (store.getters.add_routes.length > 0) {
        next()
      } else {
        // 再次尝试动态生成路由
        if (loadFromSession('userRoutes', []).length < 1) {
          // 路由权限表不存在，退出登录
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
          return
        }
        try {
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', loadFromSession('userRoutes') || [])
          // dynamically add accessible routes
          router.addRoutes(accessRoutes)
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          // 退出登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    console.log(2)
    if (whiteList.includes(to.path)) {
      // 白名单，免密登录
      console.log('2-1')
      next()
    } else {
      console.log('2-2')
      // 否则就跳动登录页面
      next('/login')
      NProgress.done() // 这种情况不会触发router的后置钩子，所以这里需要单独处理
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
