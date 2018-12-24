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
import animatedNames from '@/utils/animated-name'
export default {
  name: 'CustomComponent',
  data() {
    return {
      enterAnimated: '',
      leaveAnimated: ''
    }
  },
  methods: {
    emitNotify(enterAnimated, leaveAnimated) {
      this.$my_notify({
        autoClose: 3000,
        content: '请先说你好',
        enterAnimated,
        leaveAnimated
      })
    }
  },
  created() {
    this.options = animatedNames
  }
}
</script>

<style scoped lang="stylus">
.animate-wrapper
  margin-top 20px
</style>
