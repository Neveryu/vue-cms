<template>
  <el-menu
    mode="vertical"
    class="el-menu-vertical"
    unique-opened
    @open="handleOpen"
    @close="handleClose"
    background-color=""
    :collapse="isCollapse">
    <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
  </el-menu>
</template>
<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './sidebar-item'
  export default {
    name: 'SideBar',
    components: {
      SidebarItem
    },
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      ...mapGetters([
        'routers'
      ])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log('handleOpen', key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log('handleClose', key, keyPath)
      }
    }
  }
</script>
<style scoped lang="stylus">
  .el-menu-vertical:not(.el-menu--collapse)
    position fixed
    top 61px
    width 200px
    height 100%
    min-height 500px
</style>