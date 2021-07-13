// echarts、图表、可视化
import Layout from '@/layout/layout'

const echarts = {
  path: '/echarts',
  component: Layout,
  redirect: 'index',
  alwaysShow: true,
  meta: {
    title: '可视化',
    icon: 'svg-droplet'
  },
  children: [
    {
      path: '/echarts/index',
      name: '数量统计',
      component: () => import('@/views/echarts'),
      meta: {title: '数量统计', icon: 'svg-heart'}
    }
  ]
}

export default echarts
