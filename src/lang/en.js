export default {
  author: {
    name: 'yu'
  },
  login: {
    title: 'Content Manage System',
    account: 'Account',
    password: 'Pwd',
    remember: 'Remember',
    login: 'Login'
  },
  navbar: {
    title: 'vue-cms',
    screenfull: 'screenfull',
    profile: 'Profile',
    avatar: 'Avatar',
    github: 'GitHub',
    logOut: 'Log Out'
  },
  introduction: {
    item1: 'Sometimes we also need to access the original DOM event in an inline statement handler. You can pass it into a method using the special $event variable',
    item2: 'The only exception to this being the use of Object.freeze(), which prevents existing properties from being changed, which also means the reactivity system can’t track changes.',
    item3: 'Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a)',
    item4: {
      title: 'Dynamic Arguments',
      contents: [
        'Starting in version 2.6.0, it is also possible to use a JavaScript expression in a directive argument by wrapping it with square brackets',
        'Similarly, you can use dynamic arguments to bind a handler to a dynamic event name'
      ]
    },
    item5: 'Using v-if and v-for together is not recommended. See the style guide for further information.',
    item6: 'You can also use of as the delimiter instead of in, so that it is closer to JavaScript’s syntax for iterators'
  }
}
