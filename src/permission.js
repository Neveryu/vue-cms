/*
 * 全局权限检测
 * 包括1、路由的全局守卫
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/common/auth'

NProgress.configure({ showSpinner: false })

// 路由全局前置守卫
const whiteList = ['/login']  // 白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) {
    // 有token访问login页面，就跳到首页
    if (to.path === '/login') {
      next('/')
      NProgress.done() // 这种情况不会触发router的后置钩子，所以这里需要单独处理
    } else {
      // 有token，没有permissions
      if (store.getters.permissions.length === 0) {
        store.dispatch('pullUserInfo').then(resp => {
          const permissions = resp.permissions
          store.dispatch('GenerateRoutes', { permissions }).then(() => {
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRouters)
            // console.log(to)
            // console.log({...to})
            // hack方法 确保addRoutes已完成，set the replace: true so the navigation will not leave a history record
            // 这样我们就可以简单的通过 `next(to)` 巧妙的避开之前的那个问题了。这行代码重新进入 `router.beforeEach` 这个钩子，这时候再通过 `next()` 来释放钩子，就能确保所有的路由都已经挂载完成了。
            next({
              ...to,
              replace: true
            })
          })
        }).catch(() => {
          store.dispatch('logout').then(() => {
            next('/login')
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) { // 白名单，免密登录
      next()
    } else { // 否则就跳动登录页面
      next('/login')
      NProgress.done() // 这种情况不会触发router的后置钩子，所以这里需要单独处理
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
