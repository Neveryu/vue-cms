import Layout from '@/layout/layout'

const userRouter = {
  path: '/user',
  component: Layout,
  hidden: true,
  meta: {
    icon: 'tickets',
    title: '个人中心'
  },
  children: [
    {
      path: '/user/profile',
      name: 'Profile',
      component: () => import('@/views/user/profile'),
      meta: {icon: 'warning', title: '个人中心'}
    }
  ]
}

export default userRouter
