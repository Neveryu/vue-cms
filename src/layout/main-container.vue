<template>
  <div class="layout-main" :style="isFixedHeader ? `height: calc(100% - ${setMainHeight})` : `minHeight: calc(100% - ${setMainHeight})`">
    <el-scrollbar ref="layoutMainScrollbarRef" class="layout-main-scroll" wrap-class="layout-main-scroll" view-class="layout-main-scroll">
      <transition :name="animationName" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>

      <!-- <LayoutFooter v-if="isFooter" /> -->
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'layout-main',
  data() {
    return {
      desc: '这里是右侧主界面',
      isFixedHeader: true, // 设置 header 固定
    }
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
    }),
    key() {
      return this.$route.path
    },
    // 设置主内容区的高度
    setMainHeight() {
      // 根据是否显示标签页调整高度
      const { isTagsview } = this.themeConfig
      if (isTagsview) {
        return '92px' // header + tabs-view
      }
      return '52px' // only header
    },
    // 页面切换动画名称
    animationName() {
      const { animation } = this.themeConfig
      const animationMap = {
        'slide-right': 'slide-right',
        'slide-left': 'slide-left',
        opacitys: 'fade',
      }
      return animationMap[animation] || 'fade'
    },
    // 缓存的视图
    cachedViews() {
      return this.themeConfig.isCacheTagsView ? [] : []
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

// 页面切换动画
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
