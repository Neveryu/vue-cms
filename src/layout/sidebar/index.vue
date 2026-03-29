<template>
  <el-aside class="layout-aside-wrapper" :class="setCollapseStyle">
    <Logo v-if="themeConfig.isShowLogo" />
    <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef" @mouseenter="onAsideEnterLeave(true)" @mouseleave="onAsideEnterLeave(false)">
      <el-menu
        mode="vertical"
        :unique-opened="themeConfig.isUniqueOpened"
        @open="handleOpen"
        @close="handleClose"
        background-color=""
        :collapse="themeConfig.isCollapse">
        <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script>
// 引入组件
import Logo from '@/layout/logo.vue'
import { mapGetters } from 'vuex'
import SidebarItem from './sidebar-item'
export default {
  name: 'SideBar',
  components: {
    Logo,
    SidebarItem,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      routers: 'routers',
      themeConfig: 'setting',
    }),
    // 设置菜单展开/收起时的宽度
    setCollapseStyle() {
      const { layout, isCollapse } = this.themeConfig

      const asideBrColor = !isCollapse ? 'layout-el-aside-br-color' : ''
      if (layout === 'columns' || layout === 'classic') {
        // 分栏布局、经典布局，菜单收起时宽度给 1px，防止切换动画消失
        if (isCollapse) return [asideBrColor, 'layout-aside-pc-1']
        else return [asideBrColor, 'layout-aside-pc-220']
      } else {
        // 其它布局给 64px
        if (isCollapse) return [asideBrColor, 'layout-aside-pc-64']
        else return [asideBrColor, 'layout-aside-pc-220']
      }
    },
  },
  methods: {
    handleOpen() {
      // handle menu Open
    },
    handleClose() {
      // handle menu Close
    },
  },
}
</script>
<style lang="scss" scoped>
.layout-aside-wrapper {
  background: var(--next-bg-menuBar, #fff);
  height: 100% !important;
  // height: inherit;
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
  &.layout-aside-pc-1 {
    width: 1px !important;
  }
  .layout-aside-pc-0 {
    width: 0px !important;
  }
}
.flex-auto {
  flex: 1;
  overflow: hidden;
  ::v-deep .el-scrollbar__wrap {
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
::v-deep .el-menu {
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

/*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
/*隐藏文字*/
.el-menu--collapse ::v-deep .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

/*隐藏 > */
.el-menu--collapse ::v-deep .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
