<!-- 
  这是组件级别的注释：可以描述组件的功能、作者、创建时间等信息
  【main-layout.vue文件是系统主要内容页面的布局组件]
-->
<template>
  <!-- <div class="app-wrapper"> -->
  <el-scrollbar class="app-main-layout">
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="main-container">
      <tabs-view></tabs-view>
      <main-container></main-container>
    </div>
  </el-scrollbar>
  <!-- </div> -->
</template>
<script>
import Navbar from './navbar'
import Sidebar from './sidebar/sidebar'
import TabsView from './tabs-view'
import MainContainer from './main-container'
export default {
  components: {
    Navbar,
    Sidebar,
    TabsView,
    MainContainer,
  },
}
</script>
<style scoped lang="scss">
.app-main-layout {
  position: absolute;
  width: 100%;
  height: 100vh;
  ::v-deep .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .main-container {
    padding-left: 211px;
    padding-top: 61px;
    background-color: #fefefe;
  }
}
</style>
