import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes, LoginRoute } from './routes'
import { REDIRECT_NAME } from './constant'

const WHITE_NAME_LIST = [REDIRECT_NAME]
// const WHITE_NAME_LIST = [LoginRoute.name, REDIRECT_NAME]

// app router
const router = createRouter({
  /**
   * import.meta.env是vite的加载配置文件变量的方式
   * 官方说明：https://cn.vitejs.dev/guide/env-and-mode.html
   */
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

// config router
export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
