<!-- 
  default.vue - 默认布局
  左侧菜单栏 + 右侧内容区
-->
<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside class="layout-aside-wrapper" :class="setCollapseStyle">
      <Logo v-if="themeConfig.isShowLogo" />
      <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
        <el-menu
          mode="vertical"
          :unique-opened="themeConfig.isUniqueOpened"
          :default-active="activeMenu"
          background-color=""
          :collapse="themeConfig.isCollapse">
          <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 右侧内容区 -->
    <el-container class="main-container">
      <LayoutHeader />
      <tabs-view v-if="themeConfig.isTagsview"></tabs-view>
      <el-scrollbar class="container-wrapper" ref="layoutScrollbarRef">
        <main-container ref="mainContainer"></main-container>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/layout/logo'
import LayoutHeader from '@/layout/header'
import TabsView from '@/layout/tabs-view'
import MainContainer from '@/layout/main-container'
import SidebarItem from '@/layout/sidebar/sidebar-item'

export default {
  name: 'DefaultLayout',
  components: {
    Logo,
    LayoutHeader,
    TabsView,
    MainContainer,
    SidebarItem,
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
      routers: 'routers',
    }),
    // 当前激活的菜单
    activeMenu() {
      return this.$route.path
    },
    // 设置菜单展开/收起时的宽度
    setCollapseStyle() {
      const { isCollapse } = this.themeConfig
      const asideBrColor = !isCollapse ? 'layout-el-aside-br-color' : ''
      if (isCollapse) return [asideBrColor, 'layout-aside-pc-64']
      return [asideBrColor, 'layout-aside-pc-220']
    },
  },
  watch: {
    // 监听路由的变化，切换界面时，滚动条置顶
    $route() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.updateScrollbar()
        }, 500)
      })
    },
  },
  methods: {
    // 重置滚动条高度
    updateScrollbar() {
      this.$refs.layoutScrollbarRef.update()
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
    display: flex;
    flex-direction: column;
    .container-wrapper {
      position: relative;
      flex: 1;
      height: 0;
      overflow: hidden;
      :deep(.el-scrollbar__wrap) {
        max-height: 100%;
        scrollbar-width: none;
        overflow-x: hidden;
        overflow-y: auto;
        margin: 0 !important;
      }
    }
  }
}

// 侧边栏样式
.layout-aside-wrapper {
  background: var(--next-bg-menuBar, #fff);
  height: 100% !important;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
  transition: width 0.3s ease;
  outline: none !important;
  &.layout-el-aside-br-color {
    border-right: 1px solid var(--el-border-color-light, #ebeef5);
  }
  &.layout-aside-pc-220 {
    width: 220px !important;
  }
  &.layout-aside-pc-64 {
    width: 64px !important;
  }
}

.flex-auto {
  flex: 1;
  overflow: hidden;
  :deep(.el-scrollbar__wrap) {
    margin: 0 !important;
    scrollbar-width: none;
  }
}

.el-menu {
  height: 100%;
  border-right: none !important;
  background-color: transparent !important;
}

// 深色模式菜单样式
:deep(.el-menu) {
  background-color: transparent !important;
  .el-menu-item,
  .el-submenu__title {
    color: var(--next-bg-menuBarColor, #303133);
    &:hover {
      background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05)) !important;
    }
  }
  .el-menu-item.is-active {
    color: var(--primary, #409eff) !important;
  }
  .el-submenu.is-active > .el-submenu__title {
    color: var(--next-bg-menuBarColor, #303133) !important;
  }
}

// 隐藏文字
.el-menu--collapse :deep(.el-submenu__title span) {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

// 隐藏 >
.el-menu--collapse :deep(.el-submenu__title .el-submenu__icon-arrow) {
  display: none;
}
</style>
