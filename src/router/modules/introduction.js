import Layout from '@/layout/layout'

const introductionRouter = {
  path: '/introduction',
  component: Layout,
  meta: {
    icon: 'svg-aperture',
    title: '简述'
  },
  children: [
    {
      path: '/introduction/index',
      name: 'Introduction',
      component: () => import('@/views/introduction/index'),
      meta: { icon: 'svg-aperture', title: '简述' }
    }
  ]
}

export default introductionRouter
