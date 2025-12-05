<!-- 
  【这是组件级别的注释：可以描述组件的功能、作者、创建时间等信息】
  default.vue文件是系统默认的布局样式
-->
<template>
  <el-container class="layout-container">
    <SideBar />
    <el-container class="main-container">
      <el-scrollbar class="container-wrapper" ref="layoutScrollbarRef">
        <LayoutHeader />
        <tabs-view></tabs-view>
        <main-container ref="mainContainer"></main-container>
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
  watch: {
    // 监听路由的变化，切换界面时，滚动条置顶
    $route() {
      console.log('route 变化，页面滚动条更新')
      // 确保DOM更新完成后操作，由于组件是异步引入的，加上延时器
      this.$nextTick(() => {
        setTimeout(() => {
          this.updateScrollbar()
          // updateScrollbar()
          // if (layoutScrollbarRef.value) layoutScrollbarRef.value.wrapRef.scrollTop = 0
          // if (layoutMainRef.value) layoutMainRef.value!.layoutMainScrollbarRef.wrapRef.scrollTop = 0
        }, 500)
      })
    },
  },
  methods: {
    // 重置滚动条高度
    updateScrollbar() {
      this.$refs.layoutScrollbarRef.update()
      this.$refs.mainContainer.$refs.layoutMainScrollbarRef.update()
    },
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
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      :deep(.el-scrollbar__wrap) {
        max-height: 100%;
        scrollbar-width: none;
        overflow: auto;
        margin: 0 !important;
        .el-scrollbar__view {
          height: 100%;
        }
      }
    }
  }
}
</style>
