<template>
  <div class="wrapper">
    <el-alert
      title="自定义的通知(notify)组件"
      type="success"
      description="自定义的通知组件支持在全局使用 <notification /> 以及使用 api 的形式来调用">
    </el-alert>
    <el-row class="animate-wrapper">
      进入动画：
      <el-select v-model="enterAnimated" filterable placeholder="请选择(可搜索)">
        <el-option
          v-for="item of options"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      离开动画：
      <el-select v-model="leaveAnimated" filterable placeholder="请选择(可搜索)">
        <el-option
          v-for="item of options"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-button type="danger" plain @click="emitNotify(enterAnimated, leaveAnimated)">触发</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  data() {
    return {
      enterAnimated: '',
      leaveAnimated: '',
      options: [
        'bounce',
        'flash',
        'pulse',
        'rubberBand',
        'shake',
        'swing',
        'tada',
        'wobble',
        'jello',
        'bounceIn',
        'bounceInDown',
        'bounceInLeft',
        'bounceInRight',
        'bounceInUp',
        'bounceOut',
        'bounceOutDown',
        'bounceOutLeft',
        'bounceOutRight',
        'bounceOutUp',
        'fadeIn',
        'fadeInDown',
        'fadeInDownBig',
        'fadeInLeft',
        'fadeInLeftBig',
        'fadeInRight',
        'fadeInRightBig',
        'fadeInUp',
        'fadeInUpBig',
        'fadeOut',
        'fadeOutDown',
        'fadeOutDownBig',
        'fadeOutLeft',
        'fadeOutLeftBig',
        'fadeOutRight',
        'fadeOutRightBig',
        'fadeOutUp',
        'fadeOutUpBig',
        'flip',
        'flipInX',
        'flipInY',
        'flipOutX',
        'flipOutY',
        'lightSpeedIn',
        'lightSpeedOut',
        'rotateIn',
        'rotateInDownLeft',
        'rotateInDownRight',
        'rotateInUpLeft',
        'rotateInUpRight',
        'rotateOut',
        'rotateOutDownLeft',
        'rotateOutDownRight',
        'rotateOutUpLeft',
        'rotateOutUpRight',
        'slideInUp',
        'slideInDown',
        'slideInLeft',
        'slideInRight',
        'slideOutUp',
        'slideOutDown',
        'slideOutLeft',
        'slideOutRight',
        'zoomIn',
        'zoomInDown',
        'zoomInLeft',
        'zoomInRight',
        'zoomInUp',
        'zoomOut',
        'zoomOutDown',
        'zoomOutLeft',
        'zoomOutRight',
        'zoomOutUp',
        'hinge',
        'jackInTheBox',
        'rollIn',
        'rollOut'
      ]
    }
  },
  methods: {
    emitNotify(enterAnimated, leaveAnimated) {
      this.$notify({
        autoClose: 3000,
        content: '请先说你好',
        enterAnimated,
        leaveAnimated
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.animate-wrapper
  margin-top 20px
</style>
