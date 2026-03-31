<template>
  <div class="layout-main" :style="mainStyle">
    <transition :name="animationName" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>

    <!-- <LayoutFooter v-if="isFooter" /> -->
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
    // 根据布局类型计算主内容区样式
    mainStyle() {
      const { isTagsview, layout } = this.themeConfig
      const headerHeight = 50
      const tabsViewHeight = isTagsview ? 40 : 0

      // 所有布局都使用 min-height，让内容自然流动
      // 外层的 el-scrollbar 会负责滚动
      switch (layout) {
        case 'defaults':
          return {
            minHeight: `calc(100vh - ${headerHeight + tabsViewHeight}px)`,
          }
        case 'transverse':
        case 'classic':
          return {
            minHeight: `calc(100vh - ${tabsViewHeight}px)`,
          }
        case 'columns':
          return {
            minHeight: `calc(100vh - ${headerHeight + tabsViewHeight}px)`,
          }
        default:
          return {
            minHeight: `calc(100vh - ${headerHeight + tabsViewHeight}px)`,
          }
      }
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
  background-color: var(--next-bg-main-color);
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
