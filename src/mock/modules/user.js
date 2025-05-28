import { getToken } from '@/common/auth'

/**
 * 用户列表list
 * sex: 1-男；2-女
 * @type {Object}
 */
const userMap = {
  // 键名和token保持一致
  // permissions 是用户的权限，包括菜单、页面、按钮权限，3类
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
      desc: '我是admin账号',
    },
    // address里面请填写完整的路径
    permissions: [
      {
        type: 1,
        address: '/introduction',
      },
      {
        type: 2,
        address: '/introduction/index',
      },
      {
        type: 1,
        address: '/user',
      },
      {
        type: 2,
        address: '/user/profile',
      },
      {
        type: 1,
        address: '/custom-component',
      },
      {
        type: 2,
        address: '/custom-component/index',
      },
      {
        type: 1,
        address: '/echarts',
      },
      {
        type: 2,
        address: '/echarts/index',
      },
      {
        type: 1,
        address: '/excel',
      },
      {
        type: 2,
        address: '/excel/dynamic-table',
      },
      {
        type: 2,
        address: '/excel/export-excel',
      },
      {
        type: 2,
        address: '/excel/upload-excel',
      },
      {
        type: 2,
        address: '/excel/merge-count',
      },
      {
        type: 2,
        address: '/excel/custom-design',
      },
      {
        type: 1,
        address: '/futures',
      },
      {
        type: 2,
        address: '/futures/draggable',
      },
      {
        type: 2,
        address: '/clipboard',
      },
      {
        type: 1,
        address: '/nested',
      },
      {
        type: 2,
        address: '/nested/menu1',
      },
      {
        type: 2,
        address: '/nested/menu1/menu1-1',
      },
      {
        type: 2,
        address: '/nested/menu1/menu1-2',
      },
      {
        type: 2,
        address: '/nested/menu1/menu1-2/menu1-2-1',
      },
      {
        type: 2,
        address: '/nested/menu2',
      },
      {
        type: 1,
        address: '/rich-editor',
      },
      {
        type: 2,
        address: '/rich-editor/quill',
      },
      {
        type: 2,
        address: '/rich-editor/tinymce',
      },
      {
        type: 1,
        address: '/theme',
      },
      {
        type: 2,
        address: '/theme/index',
      },
    ],
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
      desc: '我是lucy',
    },
    permissions: '/excel,/theme',
  },
}

export { userMap }

export default {
  pullUserInfo: {
    state: true,
    url: '/user/getInfo',
    method: 'post',
    result: () => {
      return userMap[getToken()]
    },
  },
}
