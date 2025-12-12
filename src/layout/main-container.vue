<template>
  <div class="layout-main" :style="isFixedHeader ? `height: calc(100% - ${setMainHeight})` : `minHeight: calc(100% - ${setMainHeight})`">
    <el-scrollbar ref="layoutMainScrollbarRef" class="layout-main-scroll" wrap-class="layout-main-scroll" view-class="layout-main-scroll">
      <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
        <keep-alive>
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>

      <!-- <LayoutFooter v-if="isFooter" /> -->
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'layout-main',
  data() {
    return {
      desc: '这里是右侧主界面',
      isFixedHeader: true, // 设置 header 固定
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    // 设置主内容区的高度
    setMainHeight() {
      console.log(11, '***********')
      // if (isTagsViewCurrenFull.value) return '0px'
      // const { isTagsview, layout } = themeConfig.value
      // if (isTagsview && layout !== 'classic') return '85px'
      // else return '51px'
      return '92px'

      if (isTagsview && layout !== 'classic') {
        return '85px'
      }
    },
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.layout-main {
  width: 100%;
  overflow: hidden;
  background-color: var(--next-bg-main-color);
  .layout-main-scroll {
    width: 100%;
    height: 100%;
  }
}
</style>
