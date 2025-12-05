<template>
  <div class="tabs-view-container">
    <el-scrollbar ref="scrollbarRef" @wheel.prevent="onHandleScroll">
      <router-link class="tags-view-item" :class="isActive(tag) ? 'active' : ''" v-for="(tag, index) in visitedTabsView" :to="tag.path" :key="index">
        <el-tag closable :disable-transitions="false" @close.prevent.stop="handleClose(tag)">
          {{ tag.name }}
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
      scrollbarRef.value.$refs.wrapRef.scrollLeft += e.wheelDelta / 4
    },
  },
  watch: {
    $route() {
      // console.log(this.$route)
      this.addTabsView()
    },
  },
}
</script>

<style scoped lang="scss">
.tabs-view-container {
  background-color: #fff;
  border-bottom: 1px solid #f1f2f3;
  :deep(.el-scrollbar) {
    width: 100%;
    height: 100%;
  }
  :deep(.el-scrollbar__wrap) {
    margin: 0 !important;
    overflow-x: auto !important;
    .el-scrollbar__view {
      display: flex;
      align-items: center;
      height: 40px !important;
      color: var(--el-text-color-regular);
      padding: 0 12px;
    }
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
      color: var(--gray);
      &:first-child {
        margin-left: 0;
      }
    }

    &.active {
      .el-tag {
        // background-color: #00b4aa;
        color: var(--dark);
        .el-icon-close {
          color: #fff;
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
        background-color: #ecf5ff;
      }
    }
  }
}
.layout-navbars-tagsview-shadow {
  box-shadow: rgb(0 21 41 / 4%) 0px 1px 4px;
}
</style>
