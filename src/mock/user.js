import { getToken } from '@/common/auth'

const userMap = {
  // 键名和token保持一致
  // permissions 是用户的权限
  // 相比于用role来做权限，permissions这样可以定制每一个用户的权限
  // permissions不能为空，最少
  admin: {
    token: 'admin',
    name: 'Admin',
    age: 10,
    permissions: '/excel,/clipboard',
    avatar: './static/image/avatar/0.jpg'
  },
  lucy: {
    token: 'lucy',
    name: 'Lucy',
    age: 12,
    permissions: '/excel',
    avatar: './static/image/avatar/1.jpg'
  }
}

function pullUserInfo() {
  return userMap[getToken()]
}

export { userMap, pullUserInfo }
