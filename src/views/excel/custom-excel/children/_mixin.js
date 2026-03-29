const themeArr = [1, 2, 3]

let mixin = {
  data() {
    return {
      // 可选的素材主题
      themeArr: [],
    }
  },
  methods: {
    getThemeArr() {
      return themeArr
    },
  },
  created() {
    this.getThemeArr()
  },
}

export { mixin }
