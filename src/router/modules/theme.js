// 主题
import Layout from '@/layout/layout'

const theme = {
	path: '/theme',
  meta: {
    icon: 'document',
    title: 'theme'
  },
  component: Layout,
  children: [
    {
      path: '/theme/index',
      name: 'Theme',
      meta: { title: '主题', icon: 'svg-pifu' },
      component: () => import('@/views/theme/index')
    }
  ]
}

export default theme
