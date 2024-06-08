<template>
  <transition
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
    @after-leave="afterLeave"
    @after-enter="afterEnter"
  >
    <div class="notification" :style="style" v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="createTimer"
    >
      <span class="content" v-html="content"></span>
      <a href="javascript:;" class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    },
    enterAnimated: {
      type: String,
      default: ''
    },
    leaveAnimated: {
      type: String,
      default: ''
    }
  },
  computed: {
    style() {
      return {}
    },
    enterActiveClass() {
      return `animated ${this.enterAnimated}`
    },
    leaveActiveClass() {
      return `animated ${this.leaveAnimated}`
    }
  },
  methods: {
    handleClose(e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave() {
      this.$emit('closed')
    },
    afterEnter() {},
    clearTimer() {},
    createTimer() {}
  }
}
</script>

<style scoped lang="stylus">
.notification
  display flex
  background-color #303030
  color rgba(255, 255, 255, 1)
  align-items center
  padding 18px 14px
  position fixed
  min-width 280px
  max-width 350px
  border-radius 4px
  box-shadow 0 3px 5px -1px rgba(0, 0, 0, 0.2)
  flex-wrap wrap
  // transition all .5s
  .content
    padding 0
    &:hover
      color #42b983
  .btn
    color #ff4081
    padding-left 24px
    margin-left auto
    cursor pointer
</style>