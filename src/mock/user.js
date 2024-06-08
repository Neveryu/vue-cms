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
    name: 'Admin',
    age: 10,
    sex: 1,
    avatar: './static/image/avatar/0.jpg',
    permissions: '/excel,/clipboard,/theme,/test',
    type: ['Vue', '小程序'],
    desc: '我是admin账号'
  },
  lucy: {
    account: 'lucy',
    token: 'lucy',
    name: 'Lucy',
    age: 12,
    sex: 2,
    avatar: './static/image/avatar/1.jpg',
    permissions: '/excel,/theme',
    type: ['Vue'],
    desc: ''
  }
}

function pullUserInfo() {
  return userMap[getToken()]
}

export { userMap, pullUserInfo }
