import Layout from '@/layout/layout'

const userRouter = {
  path: '/user',
  hidden: true,
  meta: {
    icon: 'tickets',
    title: '个人中心'
  },
  component: Layout,
  children: [
    {
      path: '/user/profile',
      name: 'Profile',
      meta: {icon: 'warning', title: '个人中心'},
      component: () => import('@/views/user/profile')
    }
  ]
}

export default userRouter
