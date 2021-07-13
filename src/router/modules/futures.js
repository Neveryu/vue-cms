// 更多功能
import Layout from '@/layout/layout'

const futures = {
  path: '/futures',
  alwaysShow: true,
  meta: {
    icon: 's-grid',
    title: '更多功能'
  },
  component: Layout,
  children: [
    {
      path: '/futures/draggable',
      name: 'draggable',
      meta: {icon: 'thumb', title: '拖拽'},
      component: () => import('@/views/futures/draggable')
    },
    {
      path: '/clipboard',
      name: 'clipBoard',
      meta: {title: '剪切板示例', icon: 'document'},
      component: () => import('@/views/clipboard')
    }
  ]
}

export default futures
