<template>
  <el-aside class="layout-aside-wrapper" :class="collapseStyle">
    <Logo />
    <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef" @mouseenter="onAsideEnterLeave(true)" @mouseleave="onAsideEnterLeave(false)">
      <el-menu mode="vertical" unique-opened @open="handleOpen" @close="handleClose" background-color="" :collapse="isCollapse">
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
    return {
      isCollapse: false,
    }
  },
  computed: {
    ...mapGetters(['routers']),
    collapseStyle() {
      return ['aaaa']
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log('handle menu Open', key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log('handle menu Close', key, keyPath)
    },
  },
}
</script>
<style lang="scss" scoped>
.layout-aside-wrapper {
  background: #fff;
  box-shadow: 2px 0 6px #152903;
  width: 220px !important;
  height: 100% !important;
  // height: inherit;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
  transition: width 0.3s ease;
  border-right: 1px solid #ebeef5;
  outline: none !important;
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
  background-color: var(--light);
}
</style>
