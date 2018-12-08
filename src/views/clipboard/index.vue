<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="原生js方式" name="js">
        <el-input v-model="inputData" placeholder="Please input" ref="input1" style='width:400px;'></el-input>
        <wired-button elevation="3" @click='handleCopy1'>copy</wired-button>
        <p class="title">粘贴一下：</p>
        <el-input type="textarea" :rows="10" style="width: 400px;"></el-input>
      </el-tab-pane>

      <el-tab-pane label="用clipboard插件" name="directly" @click="console.log('s')">
        <el-input v-model="inputData" placeholder="Please input" ref="input2" style='width:400px;'></el-input>
        <el-button type="primary" @click='handleCopy2(inputData,$event)'>copy</el-button>
        <p class="title">粘贴一下：</p>
        <el-input type="textarea" :rows="10" style="width: 400px;"></el-input>
      </el-tab-pane>

      <el-tab-pane label="通过指令的方式调用clipboard" name="v-directive">
        <el-input v-model="inputData" placeholder="please input" style='width:400px;'></el-input>
        <el-button type="primary" v-clipboard:copy='inputData' v-clipboard:success='clipboardSuccess'>copy</el-button>
        <p class="title">粘贴一下：</p>
        <el-input type="textarea" :rows="10" style="width: 400px;"></el-input>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import clip from '@/utils/clipboard'
  import clipboard from '@/directive/clipboard'
  /* eslint-disable no-unused-vars */
  import { WiredButton } from 'wired-elements'
  export default {
    directives: {
      clipboard
    },
    data() {
      return {
        activeName: 'js',
        inputData: 'https://github.com/Neveryu/vue-cms'
      }
    },
    methods: {
      handleCopy1() {
        this.$refs.input1.$refs['input'].select()
        document.execCommand('Copy')
        this.$notify({
          title: 'success',
          message: 'copy成功',
          type: 'success'
        })
      },
      handleCopy2(t, e) {
        clip(t, e)
      },
      clipboardSuccess() {
        this.$notify({
          title: 'success',
          message: 'copy成功',
          type: 'success'
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .title
    margin-top 20px
  wired-button
    background lightblue
</style>