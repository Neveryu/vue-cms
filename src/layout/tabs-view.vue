<template>
  <div class="tabs-view-container" :class="themeConfig.tagsStyle">
    <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll">
      <router-link class="tags-view-item" :class="isActive(tag) ? 'active' : ''" v-for="(tag, index) in visitedTabsView" :to="tag.path" :key="index">
        <el-tag closable :disable-transitions="false" @close.prevent.stop="handleClose(tag)">
          <i
            v-if="themeConfig.isTagsviewIcon && tag.meta && tag.meta.icon && !tag.meta.icon.startsWith('svg-')"
            :class="'el-icon-' + tag.meta.icon"
            class="tags-view-icon"></i>
          <svg-icon
            v-else-if="themeConfig.isTagsviewIcon && tag.meta && tag.meta.icon"
            :icon-class="tag.meta.icon.replace(/^svg-/, '')"
            class="tags-view-icon" />
          {{ $t(tag.name) }}
        </el-tag>
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    this.addTabsView()
  },
  computed: {
    ...mapGetters(['visitedTabsView']),
    themeConfig() {
      return this.$store.state.setting
    },
  },
  methods: {
    ...mapActions({
      addVisitedTabsView: 'tabsview/addVisitedTabsView',
      delVisitedTabsView: 'tabsview/delVisitedTabsView',
    }),
    addTabsView() {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.addVisitedTabsView(this.generateRoute())
    },
    generateRoute() {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    isActive(route) {
      return route.path === this.$route.path || route.name === this.$route.name
    },
    handleClose(tag) {
      this.delVisitedTabsView(tag).then((tags) => {
        // 如果关闭的是当前显示的页面，就去到前一个 tab-view 页面
        if (this.isActive(tag)) {
          const lastTag = tags.slice(-1)[0]
          // 前一个 tab-view 页面存在，就跳；不存在就到首页
          if (lastTag) {
            this.$router.push(lastTag.path)
          } else {
            this.$router.push('/')
          }
        }
      })
    },
    // 鼠标滚轮滚动
    onHandleScroll(e) {
      const scrollbarRef = this.$refs.scrollbarRef
      if (scrollbarRef && scrollbarRef.$refs.wrapRef) {
        scrollbarRef.$refs.wrapRef.scrollLeft += e.wheelDelta / 4
      }
    },
  },
  watch: {
    $route() {
      this.addTabsView()
    },
  },
}
</script>

<style scoped lang="scss">
.tabs-view-container {
  background-color: var(--next-bg-topBar, #fff);
  border-bottom: 1px solid var(--next-border-color-light, #f1f2f3);
  :deep(.el-scrollbar) {
    width: 100%;
    height: 100%;
  }
  :deep(.el-scrollbar__wrap) {
    margin: 0 !important;
    overflow-x: auto !important;
    overflow-y: hidden !important;
    white-space: nowrap;
    .el-scrollbar__view {
      display: inline-flex;
      align-items: center;
      height: 40px !important;
      color: var(--el-text-color-regular);
      padding: 0 12px;
    }
  }
  // 隐藏垂直滚动条
  :deep(.el-scrollbar__bar.is-vertical) {
    display: none !important;
  }
  .tags-view-item {
    display: inline-block;
    .el-tag {
      margin: 0 5px;
      padding: 0 12px;
      height: 28px;
      line-height: 28px;
      border-radius: 2px;
      background-color: transparent;
      color: var(--next-text-color-regular, var(--gray));
      &:first-child {
        margin-left: 0;
      }
    }
    .tags-view-icon {
      margin-right: 4px;
      font-size: 12px;
    }

    &.active {
      .el-tag {
        color: var(--next-bg-topBarColor, var(--dark));
        .el-icon-close {
          color: var(--next-color-white, #fff);
        }
        &:before {
          position: relative;
          content: '';
          background: var(--primary);
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 2px;
        }
      }
    }

    &:hover {
      .el-tag {
        background-color: var(--next-color-primary-lighter, #ecf5ff);
      }
    }
  }
}

// 标签页样式 - 卡片
.tags-style-one {
  .tags-view-item {
    .el-tag {
      border-radius: 4px;
      border: 1px solid var(--next-border-color, #d9d9d9);
    }
    &.active .el-tag {
      background-color: var(--primary);
      color: var(--next-color-white, #fff);
      border-color: var(--primary);
      &:before {
        display: none;
      }
    }
  }
}

// 标签页样式 - 简约
.tags-style-four {
  .tags-view-item {
    .el-tag {
      border: none;
      border-radius: 0;
      background-color: transparent;
    }
    &.active .el-tag {
      background-color: transparent;
      color: var(--primary);
      border-bottom: 2px solid var(--primary);
      &:before {
        display: none;
      }
    }
  }
}

// 标签页样式 - 圆滑
.tags-style-five {
  .tags-view-item {
    .el-tag {
      border-radius: 20px;
      border: 1px solid var(--next-border-color, #d9d9d9);
      padding: 0 15px;
    }
    &.active .el-tag {
      background-color: var(--primary);
      color: var(--next-color-white, #fff);
      border-color: var(--primary);
      &:before {
        background: var(--next-color-white, #fff);
      }
    }
  }
}

.layout-navbars-tagsview-shadow {
  box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
}
</style>
