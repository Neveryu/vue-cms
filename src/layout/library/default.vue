<!-- 
  【这是组件级别的注释：可以描述组件的功能、作者、创建时间等信息】
  default.vue文件是系统默认的布局样式
-->
<template>
  <el-container class="layout-container">
    <SideBar />
    <el-container class="main-container">
      <el-scrollbar class="container-wrapper">
        <LayoutHeader />
        <tabs-view></tabs-view>
        <main-container></main-container>
      </el-scrollbar>
      <!-- <Settings /> -->
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '@/layout/sidebar/index'
import LayoutHeader from '@/layout/header'
import TabsView from '@/layout/tabs-view'
import MainContainer from '@/layout/main-container'
// import Settings from '@/layout/settings/index'
export default {
  components: {
    SideBar,
    LayoutHeader,
    TabsView,
    MainContainer,
    // Settings,
  },
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  background-color: var(--light);
  .main-container {
    background-color: var(--next-bg-main-color);
    height: 100% !important;
    .container-wrapper {
      width: 100%;
      height: 100%;
      :deep(.el-scrollbar__wrap) {
        scrollbar-width: none;
        overflow: auto;
        .el-scrollbar__view {
          // height: 100%;
        }
      }
    }
  }
}
</style>
