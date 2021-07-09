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

    <div class="split">
      <el-divider><i class="el-icon-eleme"></i></el-divider>
    </div>

    <div style="margin-top: 20px">
      <el-button type="primary" plain @click="doNotify">弹出通知叠加</el-button>
      <el-popover
        :tabindex="-1"
        placement="top-start"
        width="200"
        trigger="hover"
        content="正常情况下，在一次事件中调用多次通知，会出现重叠">
        <i class="el-icon-question" slot="reference" style="margin-right: 20px; color: #409EFF; font-size: 20px; cursor: pointer;"></i>
      </el-popover>

      <el-button type="success" plain @click="usePromise">promise弹出不叠加的通知</el-button>
      <el-popover
        :tabindex="-1"
        placement="top-start"
        width="200"
        trigger="hover"
        content="使用 Promise 来解决这个问题">
        <i class="el-icon-question" slot="reference" style="margin-right: 20px; color: #409EFF; font-size: 20px; cursor: pointer;"></i>
      </el-popover>

      <el-button type="success" plain @click="useSetTimeout">setTimeout弹出不叠加的通知</el-button>
      <el-popover
        :tabindex="-1"
        placement="top-start"
        width="200"
        trigger="hover"
        content="使用 setTimeout 来解决这个问题">
        <i class="el-icon-question" slot="reference" style="margin-right: 20px; color: #409EFF; font-size: 20px; cursor: pointer;"></i>
      </el-popover>
    </div>

    <div class="split">
      <el-divider><i class="el-icon-eleme"></i></el-divider>
    </div>

    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
        </p>
      </template>
    </el-calendar>

  </div>
</template>

<script>
import animatedNames from '@/utils/animated-name'
export default {
  name: 'CustomComponent',
  data() {
    return {
      enterAnimated: '',
      leaveAnimated: '',
      notifyPromise: Promise.resolve(),
      timer: null
    }
  },
  methods: {
    // 触发自定义通知
    emitNotify(enterAnimated, leaveAnimated) {
      this.$my_notify({
        autoClose: 3000,
        content: '<a href="https://github.com/Neveryu/vue-cms" target="_blank">项目仓库地址</a>',
        enterAnimated,
        leaveAnimated
      })
    },
    useSetTimeout() {
      for(let i = 0; i < 3; i++) {
        this.timer = window.setTimeout(() => {
          this.$notify({
            type: 'success',
            title: '自定义位置',
            message: '右下角弹出的消息 - 使用 setTimeout 解决',
            position: 'bottom-right'
          })
        }, 0)
      }
    },
    usePromise() {
      for(let i = 0; i < 3; i++) {
        this.notifyPromise = this.notifyPromise.then(() => {
          this.$notify({
            type: 'info',
            title: '自定义位置',
            message: '右下角弹出的消息 - 使用 Promise 解决',
            position: 'bottom-right'
          })
        })
      }
    },
    // 正常调用通知（三次）
    doNotify() {
      for(let i = 0; i < 3; i++) {
        this.$notify({
          title: '我的通知呀',
          message: '右下角弹出的消息',
          position: 'bottom-left'
        })
      }
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
/deep/ .el-alert__title
  font-size 1em
/deep/ .el-alert__description
  font-size 1em
.split
  margin 50px 0
  .el-icon-eleme
    font-size 30px
</style>
