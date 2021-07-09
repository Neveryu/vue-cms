// 自定义组件
import Layout from '@/layout/layout'

const custom = {
  path: '/custom-component',
  component: Layout,
  meta: {
    icon: 'question',
    title: '自定义组件'
  },
  children: [
    {
      path: 'index',
      name: 'CustomComponent',
      meta: {icon: 'guide', title: '自定义组件'},
      component: () => import('@/views/custom-component/index')
    }
  ],
  redirect: '/custom-component/index'
}

export default custom
