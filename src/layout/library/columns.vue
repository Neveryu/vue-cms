<!-- 
  columns.vue - 分栏布局
  左侧图标栏 + 中间菜单栏 + 右侧内容
-->
<template>
  <el-container class="layout-container layout-columns">
    <!-- 左侧图标菜单栏 -->
    <div class="columns-aside" v-show="!isTagsViewCurrenFull">
      <Logo v-if="themeConfig.isShowLogo" :is-collapse="true" />
      <div class="columns-aside-menu">
        <el-scrollbar>
          <div
            v-for="router in visibleRouters"
            :key="router.path"
            class="columns-aside-item"
            :class="{ 'is-active': activeFirstPath === router.path }"
            @click="onColumnsMenuSelect(router)">
            <i v-if="router.meta && router.meta.icon && !router.meta.icon.startsWith('svg-')" :class="'el-icon-' + router.meta.icon"></i>
            <svg-icon v-else-if="router.meta && router.meta.icon" :icon-class="router.meta.icon.replace('svg-', '')" />
          </div>
        </el-scrollbar>
      </div>
    </div>
    <!-- 中间菜单栏 -->
    <div class="columns-sub-aside" v-show="!isTagsViewCurrenFull && !sidebarCollapse">
      <div class="columns-sub-title" v-if="currentMenu && currentMenu.meta && currentMenu.meta.title">
        {{ $t(currentMenu.meta.title) }}
      </div>
      <el-menu :default-active="activeMenu" :collapse="false" :unique-opened="themeConfig.isUniqueOpened">
        <sidebar-item v-for="child in currentMenuChildren" :key="child.path" :item="child" :base-path="child.path" />
      </el-menu>
    </div>
    <!-- 右侧内容区 -->
    <el-container class="main-container">
      <el-header class="layout-header" v-show="!isTagsViewCurrenFull">
        <div class="header-left">
          <i class="collapse-icon" :class="getIconName" @click="onSideBarCollapseChange"></i>
          <div class="header-breadcrumb" v-if="themeConfig.isBreadcrumb">
            <el-breadcrumb class="layout-navbars-breadcrumb-hide">
              <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(v, k) in breadcrumbList" :key="v.path">
                  <span v-if="k === breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
                    <span v-if="v.meta.title">{{ $t(v.meta.title) }}</span>
                  </span>
                  <a v-else @click.prevent="onBreadcrumbClick(v)">
                    <span>{{ $t(v.meta.title) }}</span>
                  </a>
                </el-breadcrumb-item>
              </transition-group>
            </el-breadcrumb>
          </div>
        </div>
        <div class="header-right">
          <div class="setting-item" @click="onOpenSettingClick">
            <i class="el-icon-setting" title="设置"></i>
          </div>
          <div class="setting-item">
            <screenfull class="screenfull"></screenfull>
          </div>
          <div class="setting-item lang-select">
            <lang-select></lang-select>
          </div>
          <div class="setting-item avatar-container">
            <el-dropdown :show-timeout="70" :hide-timeout="50">
              <div class="avatar-wrapper">
                <img class="user-avatar" :src="userAvatar" />
                <div class="username-wrapper">
                  <span class="user-name">{{ userName }}</span>
                  <i class="el-icon-caret-bottom"></i>
                </div>
              </div>
              <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <el-dropdown-item>
                  <router-link class="inlineBlock" to="/user/profile">{{ $t('navbar.profile') }}</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <a target="_blank" href="https://github.com/Neveryu/vue-cms">{{ $t('navbar.github') }}</a>
                </el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">
                  {{ $t('navbar.logOut') }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-header>
      <tabs-view v-if="themeConfig.isTagsview"></tabs-view>
      <el-scrollbar class="container-wrapper" ref="layoutScrollbarRef">
        <main-container ref="mainContainer"></main-container>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TabsView from '@/layout/tabs-view'
import MainContainer from '@/layout/main-container'
import Logo from '@/layout/logo'
import LangSelect from '@/components/lang-select'
import Screenfull from '@/components/screenfull'
import SidebarItem from '@/layout/sidebar/sidebar-item'

export default {
  name: 'ColumnsLayout',
  components: {
    TabsView,
    MainContainer,
    Logo,
    LangSelect,
    Screenfull,
    SidebarItem,
  },
  data() {
    return {
      isTagsViewCurrenFull: false,
      breadcrumbList: [],
      currentMenu: null,
    }
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
      userName: 'userName',
      userAvatar: 'userAvatar',
      routers: 'routers',
      sidebarCollapse: 'sidebarCollapse',
    }),
    getIconName() {
      return this.sidebarCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
    activeMenu() {
      return this.$route.path
    },
    activeFirstPath() {
      const matched = this.$route.matched
      if (matched.length > 0) {
        return matched[0].path
      }
      return '/'
    },
    currentMenuChildren() {
      if (this.currentMenu && this.currentMenu.children) {
        return this.currentMenu.children
      }
      return []
    },
    // 过滤掉隐藏的路由，处理没有 meta 但只有一个子路由的情况
    visibleRouters() {
      return (this.routers || [])
        .filter((router) => {
          // 隐藏的路由不显示
          if (router.hidden) return false
          // 有 meta.icon 的直接显示
          if (router.meta && router.meta.icon) return true
          // 没有 meta 但只有一个子路由的，检查子路由是否有 icon
          if (router.children && router.children.length === 1) {
            const child = router.children[0]
            return !child.hidden && child.meta && child.meta.icon
          }
          return false
        })
        .map((router) => {
          // 如果没有 meta 但只有一个子路由，返回子路由
          if (!router.meta && router.children && router.children.length === 1) {
            return router.children[0]
          }
          return router
        })
    },
  },
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb()
        this.updateCurrentMenu()
      },
      immediate: true,
    },
    routers: {
      handler() {
        this.updateCurrentMenu()
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout',
      toggleSettingPanel: 'setting/toggleSettingPanel',
      toggleCollapse: 'setting/toggleCollapse',
    }),
    updateCurrentMenu() {
      const firstPath = this.activeFirstPath
      // 使用原始 routers 来查找当前菜单，因为 visibleRouters 可能经过了透传处理
      const menu = this.routers.find((r) => r.path === firstPath)
      if (menu) {
        this.currentMenu = menu
      } else if (this.visibleRouters.length > 0) {
        // 如果找不到，使用第一个可见路由
        this.currentMenu = this.routers.find((r) => r.path === this.visibleRouters[0].path) || this.routers[0]
      }
    },
    getBreadcrumb() {
      if (!this.themeConfig.isBreadcrumb) {
        this.breadcrumbList = []
        return
      }
      this.breadcrumbList = this.$route.matched.filter((item) => {
        return item.meta && item.meta.title && !item.hidden
      })
    },
    onBreadcrumbClick(route) {
      const { path, redirect } = route
      const targetPath = redirect || path
      if (this.$route.path === targetPath) {
        return
      }
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    },
    onColumnsMenuSelect(router) {
      this.currentMenu = router
      // 如果二级菜单是折叠状态，先展开
      if (this.sidebarCollapse) {
        this.toggleCollapse()
      }
      let targetPath = ''
      if (router.redirect) {
        targetPath = router.redirect
      } else if (router.children && router.children.length > 0) {
        const firstChild = router.children.find((c) => !c.hidden)
        if (firstChild) {
          if (firstChild.redirect) {
            targetPath = firstChild.redirect
          } else {
            targetPath = firstChild.path
          }
        }
      } else {
        // 叶子节点，直接跳转
        targetPath = router.path
      }
      // 避免重复导航
      if (targetPath && this.$route.path !== targetPath) {
        this.$router.push(targetPath)
      }
    },
    onSideBarCollapseChange() {
      this.toggleCollapse()
    },
    onOpenSettingClick() {
      this.toggleSettingPanel()
    },
    logout() {
      if (confirm('退出系统？')) {
        const loading = this.$loading({ lock: true })
        this.userLogout()
          .then(() => {
            location.reload()
          })
          .catch((err) => {
            console.error(err)
          })
          .finally(() => {
            loading.close()
          })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  background-color: var(--light);
}
.columns-aside {
  width: 64px;
  height: 100%;
  background-color: var(--next-bg-menuBar, #191a23);
  display: flex;
  flex-direction: column;
  .columns-aside-menu {
    flex: 1;
    overflow: hidden;
    :deep(.el-scrollbar) {
      height: 100%;
    }
    :deep(.el-scrollbar__wrap) {
      overflow-x: hidden;
    }
  }
  .columns-aside-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    &.is-active {
      color: var(--primary, #409eff);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
}
.columns-sub-aside {
  width: 180px;
  height: 100%;
  background-color: var(--next-bg-menuBar, #fff);
  border-right: 1px solid var(--next-border-color-light, #ebeef5);
  display: flex;
  flex-direction: column;
  .columns-sub-title {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-weight: bold;
    color: var(--next-bg-menuBarColor, #303133);
    border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-menu {
    border-right: none;
    flex: 1;
    overflow: auto;
    background-color: transparent !important;
  }
}
.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px !important;
  padding: 0 15px;
  background-color: var(--next-bg-topBar, #fff);
  border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
  .header-left {
    display: flex;
    align-items: center;
    .collapse-icon {
      font-size: 18px;
      cursor: pointer;
      padding: 0 10px;
      color: var(--gray);
    }
    .header-breadcrumb {
      margin-left: 10px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .setting-item {
      padding: 0 10px;
      cursor: pointer;
      color: var(--secondary);
      height: 50px;
      display: flex;
      align-items: center;
      &:hover {
        background: var(--next-color-user-hover);
      }
    }
    .avatar-container {
      .avatar-wrapper {
        display: flex;
        align-items: center;
        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .username-wrapper {
          margin-left: 5px;
        }
      }
    }
  }
}
.main-container {
  flex: 1;
  height: 100%;
  background-color: var(--next-bg-main-color);
  flex-direction: column;
  display: flex;
  .container-wrapper {
    position: relative;
    flex: 1;
    height: 0;
    overflow: hidden;
    :deep(.el-scrollbar__wrap) {
      max-height: 100%;
      scrollbar-width: none;
      overflow-x: hidden;
      overflow-y: auto;
      margin: 0 !important;
    }
  }
}

// tabs-view 样式适配
:deep(.layout-navbars-tagsview) {
  border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
}
</style>
