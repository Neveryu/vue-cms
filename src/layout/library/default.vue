<!-- 
  【这是组件级别的注释：可以描述组件的功能、作者、创建时间等信息】
  default.vue文件是系统默认的布局样式
-->
<template>
  <el-container class="layout-container">
    <SideBar />
    <el-container class="main-container">
      <el-scrollbar class="app-main-layout">
        <LayoutHeader />
        <main-container></main-container>
      </el-scrollbar>
      <!-- <Settings /> -->
    </el-container>
  </el-container>
</template>
<script>
import LayoutHeader from '@/layout/header'
import SideBar from '@/layout/sidebar/index'
import MainContainer from '@/layout/main-container'
// import Settings from '@/layout/settings/index'
export default {
  components: {
    LayoutHeader,
    SideBar,
    // Settings,
  },
}
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  .main-container {
    background-color: #fefefe;
  }
}
</style>
