import { getToken } from '@/common/auth'

/**
 * 用户列表list
 * sex: 1-男；2-女
 * @type {Object}
 */
const userMap = {
  // 键名和token保持一致
  // permissions 是用户的权限
  // 相比于用role来做权限，permissions这样可以定制每一个用户的权限
  // permissions不能为空，最少
  admin: {
    account: 'admin',
    token: 'admin',
    userInfo: {
      name: 'Admin',
      age: 10,
      sex: 1,
      // 绝对地址
      avatar: './static/image/avatar/0.jpg',
      type: ['Vue', '小程序'],
      desc: '我是admin账号'
    },
    permissions: [
      {
        type: 2,
        address: '/excel'
      },
      {
        type: 2,
        address: '/theme'
      },
      {
        type: 1,
        address: '/introduction'
      },
      {
        type: 2,
        address: '/introduction/index'
      },
      {
        type: 1,
        address: '/user'
      },
      {
        type: 2,
        address: '/user/profile'
      }
    ]
  },
  lucy: {
    account: 'lucy',
    token: 'lucy',
    userInfo: {
      name: 'Lucy',
      age: 12,
      sex: 2,
      // 绝对地址
      avatar: './static/image/avatar/1.jpg',
      type: ['Vue', 'React'],
      desc: '我是lucy'
    },
    permissions: '/excel,/theme'
  }
}

export { userMap }

export default {
  pullUserInfo: {
    state: true,
    url: '/user/getInfo',
    method: 'post',
    result: () => {
      return userMap[getToken()]
    }
  }
}
