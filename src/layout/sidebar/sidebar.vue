<template>
  <div class="left-sidebar">
    <el-menu mode="vertical" unique-opened @open="handleOpen" @close="handleClose" background-color="" :collapse="isCollapse">
      <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebar-item'
export default {
  name: 'SideBar',
  components: {
    SidebarItem,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  computed: {
    ...mapGetters(['routers']),
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
.left-sidebar {
  position: fixed;
  top: 56px;
  width: 210px;
  height: 100%;
  min-height: 500px;
  z-index: 2;
}

.el-menu {
  height: 100%;
  background-color: var(--light);
}
</style>
