/*
 * 全局权限检测
 * 包括1、路由的全局守卫
 */
import router from './router'
import store from './store'

import { Message } from 'element-ui'

import { loadFromSession } from '@/common/session-storage'
import { getToken } from '@/common/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false })

// 白名单
const whiteList = ['/login', '/auth-redirect', '/singleLogion', '/files'] // no redirect whitelist

// 路由全局前置守卫
router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title)
  NProgress.start() // start progress bar

  // determine whether the user has logged in
  let hasToken = getToken()

  if (hasToken) {
    console.log('1-有token，处于登录态')
    if (to.path === '/login') {
      // if is logged in, redirect to the home page     // 有token访问login页面，就跳到首页
      next({ path: '/', replace: true })
    } else {
      // 如果动态路由不存在
      if (store.getters.addRoutes.length === 0) {
        // 再次尝试加载动态路由
        if (loadFromSession('userRoutes', []).length < 1) {
          // session中存储的路由权限表不存在，可能有问题，退出登录，让用户重新登录
          await store.dispatch('user/resetToken')
          next(`/login?redirect=${to.path}`)
          return
        }
        try {
          console.log(loadFromSession('userRoutes', []), 1111)

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', loadFromSession('userRoutes', []))

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
      } else {
        console.log(2222)
        next()
      }
    }
  } else {
    console.log('2 - has no token')
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      console.log('2 - 跳转到登录页面重新登录')
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${encodeURIComponent(to.fullPath)}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
  // 路由完成后的钩子函数
})
