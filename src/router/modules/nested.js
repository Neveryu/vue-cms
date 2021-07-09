// 路由嵌套菜单
// import Layout from '@/layout/layout'

// const nested = {
//   path: '/nested',
//   hidden: true,
//   meta: {
//     icon: 'svg-layers',
//     title: '路由嵌套'
//   },
//   component: Layout,
//   children: [
//     {
//       path: 'menu1',
//       name: 'Menu1',
//       meta: { icon: 'share', title: '嵌套路由1' },
//       component: () => import('@/views/nested/menu1/index'),
//       children: [
//         {
//           path: 'menu1-1',
//           name: 'Menu1-1',
//           meta: {icon: 'success', title: '嵌套路由1-1'},
//           component: () => import('@/views/introduction/index')
//         },
//         {
//           path: 'menu1-2',
//           name: 'Menu1-2',
//           alwaysShow: true,
//           meta: {icon: 'error', title: '嵌套路由1-2'},
//           component: () => import('@/views/nested/menu1/menu1-2/index'),
//           children: [
//             {
//               path: 'menu1-2-1',
//               name: 'Menu1-2-1',
//               meta: {icon: 'warning', title: '嵌套路由1-2-1'},
//               component: () => import('@/views/introduction/index')
//             }
//           ]
//         }
//       ]
//     },
//     {
//       path: 'menu2',
//       name: 'Menu2',
//       meta: {icon: 'star-on', title: '嵌套路由2'},
//       component: () => import('@/views/user/add')
//     }
//   ]
// }

// export default nested
