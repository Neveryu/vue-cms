<template>
  <div class="main-app">
    <el-scrollbar
      ref="layoutMainScrollbarRef"
      class="layout-main-scroll layout-backtop-header-fixed"
      wrap-class="layout-main-scroll"
      view-class="layout-main-scroll">
      <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
        <keep-alive>
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'app-main',
  data() {
    return {
      desc: '这里是右侧主界面',
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style scoped lang="scss">
.main-app {
  overflow: hidden;
}
</style>
