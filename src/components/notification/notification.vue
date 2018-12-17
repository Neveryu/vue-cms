<template>
  <transition>
    <div class="notification">
      <span class="content">{{content}}</span>
      <a href="javascript:;" class="btn">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  }
}
</script>

<style scoped lang="stylus">
.notification
  display flex
  background-color #303030
  color rgba(255, 255, 255, 1)
  align-items center
  padding 20px
  position fixed
  min-width 280px
  border-radius 4px
  box-shadow 0 3px 5px -1px rgba(0, 0, 0, 0.2)
  flex-wrap wrap
  transition all .3s
  .content
    padding 0
  .btn
    color #ff4081
    padding-left 24px
    margin-left auto
    cursor pointer
</style>