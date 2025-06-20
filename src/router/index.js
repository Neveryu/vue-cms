import Vue from 'vue'
import Router from 'vue-router'

// 系统主要内容页面布局Layout（支持布局结构调整）
import MainLayout from '@/layout/index'

/**
 * 路由表组成结构Main：
 * 【[基础路由]+[动态路由]+[末尾路由]】
 */

Vue.use(Router)

/**
 * 关于 route 的配置属性说明：
 * 不管是父路由，还是子路由，path字段必须是完整的路径
 *
 * alwaysShow: true       // if set true, will always show the root menu, whatever its child routes length
 *                        // if not set alwaysShow, only more than ont route under the children
 *                        // it will becomes nested mode, otherwise not show the root menu
 *                        // 如果设置为true,它将总是出现在根目录。如果不设置的话，当它只有1个子路由的时候，会把
 *                        // 它的唯一子路由放到跟目录上来，而不显示它自己本身。
 *
 * hidden: true           // 如果设置为true, 将不会出现在左侧菜单栏中（如：401，403，login等页面）
 *
 * isKeepAlive            // 是否缓存组件状态
 * isKeepAlive            // 是否缓存组件状态
 * isIframe               // 是否内嵌窗口，开启条件，`1、isIframe:true 2、isLink：链接地址不为空`
 *
 * meta: {
 *   noCache: true        // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
 *   icon: '',            // 设置该路由的图标，如果hidden设置为false，那么这个路由的meta中的icon可以不填（因为不会在菜单中展示）
 *   title: ''            // 设置该路由在侧边栏和面包屑中展示的名字
 * }
 *
 */

/**
 * 基础路由
 * 任何角色都可以访问的路由（无需权限）
 * @type {Array}
 */
export const constantRoutes = [
  {
    path: '/',
    component: MainLayout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/homepage'),
        meta: { icon: 's-home', title: '首页' },
      },
    ],
  },
  {
    path: '/redirect',
    component: MainLayout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/redirect'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/index'),
    meta: { title: '登录' },
  },
]

/**
 * 末尾路由：总是需要在VueRouter最末尾的路由；添加到动态路由的后面
 */
export const endBasicRoutes = [
  // 404页面
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '404',
    },
  },
  // 无权限页面
  {
    path: '/no-permission',
    name: 'NoPermission',
    hidden: true,
    component: () => import('@/views/error-page/no-permission'),
    meta: {
      title: '访问无权限',
    },
  },
  // 没有匹配到路由的其他页面
  {
    path: '*',
    name: 'NotFound',
    hidden: true,
    component: () => import('@/views/error-page/404'),
    meta: {
      title: '页面走丢了',
    },
  },
]

/**
 * 动态路由： 根据用户角色
 * @type {Array}
 */

export const asyncRoutes = [
  // 自定义组件菜单
  {
    path: '/custom-component',
    name: 'custom-component',
    component: MainLayout,
    meta: { icon: 'question', title: '自定义组件' },
    redirect: 'index',
    children: [
      {
        path: '/custom-component/index',
        name: 'CustomComponent',
        meta: { icon: 'guide', title: '自定义组件' },
        component: () => import('@/views/custom-component/index'),
      },
    ],
  },
  // echarts、图表、可视化
  {
    path: '/echarts',
    component: MainLayout,
    redirect: 'index',
    alwaysShow: true,
    meta: { title: '可视化', icon: 'svg-droplet' },
    children: [
      {
        path: '/echarts/index',
        name: '数量统计',
        component: () => import('@/views/echarts'),
        meta: { title: '数量统计', icon: 'svg-heart' },
      },
    ],
  },
  // 表格菜单
  {
    path: '/excel',
    component: MainLayout,
    redirect: 'export-excel',
    alwaysShow: true,
    meta: { title: '表格', icon: 'date' },
    children: [
      {
        path: '/excel/dynamic-table',
        name: 'DynamicTable',
        component: () => import('@/views/excel/dynamic-table/index'),
        meta: { icon: 'set-up', title: '动态表格' },
      },
      {
        path: '/excel/export-excel',
        name: '导出表格',
        component: () => import('@/views/excel/export-excel'),
        meta: { icon: 'download', title: '导出表格' },
      },
      {
        path: '/excel/upload-excel',
        name: '上传表格',
        component: () => import('@/views/excel/upload-excel'),
        meta: { icon: 'upload', title: '上传表格' },
      },
      {
        path: '/excel/merge-count',
        name: '合并&统计',
        component: () => import('@/views/excel/merge-count'),
        meta: { icon: 'upload', title: '合并&统计' },
      },
      {
        path: '/excel/custom-design',
        name: '自定义表格',
        component: () => import('@/views/excel/custom-excel'),
        meta: { icon: 's-promotion', title: '自定义表格' },
      },
    ],
  },
  // 更多功能
  {
    path: '/futures',
    component: MainLayout,
    alwaysShow: true,
    meta: { icon: 's-grid', title: '更多功能' },
    children: [
      {
        path: '/futures/draggable',
        name: 'draggable',
        meta: { icon: 'thumb', title: '拖拽' },
        component: () => import('@/views/futures/draggable'),
      },
      {
        path: '/futures/clipboard',
        name: 'clipBoard',
        meta: { title: '剪切板示例', icon: 'document' },
        component: () => import('@/views/clipboard'),
      },
    ],
  },
  // 简述
  {
    path: '/introduction',
    component: MainLayout,
    meta: { icon: 'svg-aperture', title: '简述' },
    children: [
      {
        path: '/introduction/index',
        name: 'Introduction',
        component: () => import('@/views/introduction/index'),
        meta: { icon: 'svg-aperture', title: '简述' },
      },
    ],
  },
  // 路由嵌套菜单
  {
    path: '/nested',
    meta: { icon: 'svg-layers', title: '路由嵌套' },
    component: MainLayout,
    children: [
      {
        path: '/nested/menu1',
        name: 'Menu1',
        meta: { icon: 'share', title: '嵌套路由1' },
        component: () => import('@/views/nested/menu1/index'),
        children: [
          {
            path: '/nested/menu1/menu1-1',
            name: 'Menu1-1',
            meta: { icon: 'success', title: '嵌套路由1-1' },
            component: () => import('@/views/introduction/index'),
          },
          {
            path: '/nested/menu1/menu1-2',
            name: 'Menu1-2',
            alwaysShow: true,
            meta: { icon: 'error', title: '嵌套路由1-2' },
            component: () => import('@/views/nested/menu1/menu1-2/index'),
            children: [
              {
                path: '/nested/menu1/menu1-2/menu1-2-1',
                name: 'Menu1-2-1',
                meta: { icon: 'warning', title: '嵌套路由1-2-1' },
                component: () => import('@/views/introduction/index'),
              },
            ],
          },
        ],
      },
      {
        path: '/nested/menu2',
        name: 'Menu2',
        meta: { icon: 'star-on', title: '嵌套路由2' },
        component: () => import('@/views/user/add'),
      },
    ],
  },
  // 富文本
  {
    path: '/rich-editor',
    component: MainLayout,
    alwaysShow: true,
    meta: { icon: 's-order', title: '富文本' },
    redirect: 'quill',
    children: [
      {
        path: '/rich-editor/quill',
        name: 'QuillEditor',
        meta: { icon: 's-order', title: 'quill' },
        component: () => import('@/views/rich-editor/quill'),
      },
      {
        path: '/rich-editor/tinymce',
        name: 'TinyMCE',
        meta: { icon: 'svg-type', title: 'tinymce' },
        component: () => import('@/views/rich-editor/tinymce'),
      },
    ],
  },
  // 改变主题
  {
    path: '/theme',
    meta: { icon: 'document', title: 'theme' },
    component: MainLayout,
    children: [
      {
        path: '/theme/index',
        name: 'Theme',
        meta: { title: '主题', icon: 'svg-pifu' },
        component: () => import('@/views/theme/index'),
      },
    ],
  },
  // 用户-个人中心
  {
    path: '/user',
    hidden: true,
    meta: { icon: 'tickets', title: '个人中心' },
    component: MainLayout,
    children: [
      {
        path: '/user/profile',
        name: 'Profile',
        meta: { icon: 'warning', title: '个人中心' },
        component: () => import('@/views/user/profile'),
      },
    ],
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support（去掉url中的#）
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router

  // 3. 重新添加全局守卫（重要！）
  router.beforeEach((to, from, next) => {
    // 你的守卫逻辑
  })
}

export default router
