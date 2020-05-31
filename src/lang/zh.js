export default {
  author: {
    name: '喻'
  },
  login: {
    title: '后台管理系统',
    account: '账号',
    password: '密码',
    remember: '记住密码',
    login: '登录'
  },
  navbar: {
    title: '后台管理系统',
    screenfull: '全屏',
    profile: '个人中心',
    avatar: '修改头像',
    github: '项目仓库',
    logOut: '退出登录'
  },
  introduction: {
    item1: '有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入方法',
    item2: '这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化',
    item3: '不要在选项 property 或回调上使用箭头函数，比如 created: () => console.log(this.a)',
    item4: {
      title: '动态参数',
      contents: [
        '从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数',
        '同样地，你可以使用动态参数为一个动态的事件名绑定处理函数'
      ]
    },
    item5: '不推荐同时使用 v-if 和 v-for。请查阅风格指南以获取更多信息',
    item6: '你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法'
  }
}