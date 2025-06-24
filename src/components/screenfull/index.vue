<template>
  <i class="el-icon-full-screen" title="全屏"></i>
</template>

<script>
import screenfull from 'screenfull'
export default {
  name: 'ScreenFull',
  props: {
    width: {
      type: Number,
      default: 22,
    },
    height: {
      type: Number,
      default: 22,
    },
    fill: {
      type: String,
      default: '#48576a',
    },
  },
  data() {
    return {
      isFullscreen: false,
    }
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning',
        })
        return false
      }
      screenfull.toggle()
    },
  },
}
</script>

<style scoped lang="scss">
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #fff;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
