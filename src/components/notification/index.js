import Vue from 'vue'
import Notification from './notification.vue'

const NotificationConstructor = Vue.extend({
  extends: Notification,
  data() {
    return {
      // 距离底部的距离
      verticalOffset: 0,
      // 自动关闭时间
      autoClose: 3000,
      height: 0,
      visible: false
    }
  },
  computed: {
    style() {
      return {
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    createTimer() {
      if(this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer() {
      if(this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter() {
      this.height = this.$el.offsetHeight
    }
  },
  mounted() {
    this.createTimer()
  },
  beforeDestroy() {
    this.clearTimer()
  }
})

const instances = []
let seed = 1
/**
 * 删除一个item
 * @param  {[type]} instance [description]
 * @return {[type]}          [description]
 */
const removeInstance = (instance) => {
  if(!instance) {
    return false
  }
  const len = instances.length
  const index = instances.findIndex(item => {
    return instance.id === item.id
  })
  instances.splice(index, 1)
  if(len <= 1) {
    return
  }
  const removeHeight = instance.vm.height
  for(let i = index; i < (len - 1); i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const notify = (options) => {
  // 如果是服务端渲染，就算了
  if(Vue.prototype.$isServer) {
    return false
  }
  const { autoClose, ...rest } = options
  const instance = new NotificationConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })
  const id = `notification_${seed++}`
  instance.id = id
  // $mount()里面不写dom节点的话，就是生成一个dom节点，但是不挂载在某个元素下
  // 创建 Profile 实例
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  // 点击关闭
  instance.vm.$on('close', () => {
    instance.vm.visible = false
  })
  instances.push(instance)
  // return instance.vm
}

export default Vue => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$my_notify = notify
}
