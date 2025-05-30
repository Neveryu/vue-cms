import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 * 关于 route 的配置属性说明：
 *
 * alwaysShow: true       // if set true, will always show the root menu, whatever its child routes length
 *                        // if not set alwaysShow, only more than ont route under the children
 *                        // it will becomes nested mode, otherwise not show the root menu
 *                        // 如果设置为true,它将总是出现在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                        // 它的唯一子路由放到跟目录上来，而不显示它自己本身。
 *
 * hidden: true           // 如果设置为true, 将不会出现在左侧菜单栏中（如：401，403，login等页面）
 */

/**
 * 基础路由
 * 任何角色都可以访问的路由（无需权限）
 * @type {Array}
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: (resolve) => require(['@/views/redirect'], resolve),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录',
    },
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
