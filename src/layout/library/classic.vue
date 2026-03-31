<!-- 
  classic.vue - 经典布局
  顶部一级菜单 + 左侧二级菜单 + 右侧内容
-->
<template>
  <el-container class="layout-container layout-classic" direction="vertical">
    <!-- 顶部一级菜单栏 -->
    <div class="layout-header" v-show="!isTagsViewCurrenFull">
      <div class="header-top">
        <!-- Logo 区域 -->
        <div class="header-logo">
          <Logo v-if="themeConfig.isShowLogo" :is-collapse="false" />
        </div>
        <!-- 一级横向菜单 -->
        <div class="header-menu">
          <el-menu mode="horizontal" :default-active="activeFirstPath" @select="onFirstMenuSelect">
            <el-menu-item v-for="route in visibleRouters" :key="route.path + '-item'" :index="route.path">
              <i v-if="route.meta && route.meta.icon && !route.meta.icon.startsWith('svg-')" :class="'el-icon-' + route.meta.icon"></i>
              <svg-icon v-else-if="route.meta && route.meta.icon" :icon-class="route.meta.icon.replace('svg-', '')" />
              <span v-if="route.meta && route.meta.title">{{ $t(route.meta.title) }}</span>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 右侧工具栏 -->
        <div class="header-tools">
          <div class="tool-item" @click="onOpenSettingClick">
            <i class="el-icon-setting" title="设置"></i>
          </div>
          <div class="tool-item">
            <screenfull class="screenfull"></screenfull>
          </div>
          <div class="tool-item lang-select">
            <lang-select></lang-select>
          </div>
          <div class="tool-item avatar-container">
            <el-dropdown :show-timeout="70" :hide-timeout="50">
              <div class="avatar-wrapper">
                <img class="user-avatar" :src="userAvatar" />
                <span class="user-name">{{ userName }}</span>
                <i class="el-icon-caret-bottom"></i>
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
      </div>
    </div>
    <!-- 下方内容区 -->
    <div class="main-container">
      <!-- 左侧二级菜单 -->
      <div class="sub-aside" v-show="!isTagsViewCurrenFull && currentMenuChildren.length > 0">
        <div class="sub-aside-title" v-if="currentMenu && currentMenu.meta && currentMenu.meta.title">
          {{ $t(currentMenu.meta.title) }}
        </div>
        <el-scrollbar class="sub-aside-menu">
          <el-menu :default-active="activeMenu" :unique-opened="themeConfig.isUniqueOpened">
            <sidebar-item v-for="child in currentMenuChildren" :key="child.path" :item="child" :base-path="child.path" />
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 右侧内容 -->
      <div class="content-wrapper">
        <tabs-view v-if="themeConfig.isTagsview"></tabs-view>
        <el-scrollbar class="container-wrapper" ref="layoutScrollbarRef">
          <main-container ref="mainContainer"></main-container>
        </el-scrollbar>
      </div>
    </div>
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
  name: 'ClassicLayout',
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
      currentMenu: null,
    }
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
      userName: 'userName',
      userAvatar: 'userAvatar',
      routers: 'routers',
    }),
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
    // 过滤路由，处理单子路由透传
    visibleRouters() {
      return (this.routers || [])
        .filter((router) => {
          if (router.hidden) return false
          if (router.meta && router.meta.icon) return true
          if (router.children && router.children.length === 1) {
            const child = router.children[0]
            return !child.hidden && child.meta && child.meta.icon
          }
          return false
        })
        .map((router) => {
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
    }),
    updateCurrentMenu() {
      const firstPath = this.activeFirstPath
      const menu = this.routers.find((r) => r.path === firstPath)
      if (menu) {
        this.currentMenu = menu
      } else if (this.visibleRouters.length > 0) {
        this.currentMenu = this.routers.find((r) => r.path === this.visibleRouters[0].path) || this.routers[0]
      }
    },
    onFirstMenuSelect(index) {
      // 查找对应的路由
      const menu = this.routers.find((r) => r.path === index)
      if (menu) {
        this.currentMenu = menu
        // 如果有子菜单，跳转到第一个子菜单
        if (menu.children && menu.children.length > 0) {
          const firstChild = menu.children.find((c) => !c.hidden)
          if (firstChild) {
            let targetPath = ''
            if (firstChild.redirect) {
              targetPath = firstChild.redirect
            } else if (firstChild.children && firstChild.children.length > 0) {
              // 如果子菜单还有子菜单，跳转到第一个
              const subChild = firstChild.children.find((c) => !c.hidden)
              if (subChild) {
                targetPath = subChild.path
              }
            } else {
              targetPath = firstChild.path
            }
            // 避免重复导航
            if (targetPath && this.$route.path !== targetPath) {
              this.$router.push(targetPath)
            }
          }
        } else {
          // 叶子节点，直接跳转（避免重复导航）
          if (this.$route.path !== index) {
            this.$router.push(index)
          }
        }
      } else {
        // 直接是子路由路径，跳转（避免重复导航）
        if (this.$route.path !== index) {
          this.$router.push(index)
        }
      }
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
.layout-header {
  background-color: var(--next-bg-topBar, #fff);
  border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
  .header-top {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 15px;
  }
  .header-logo {
    flex-shrink: 0;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .header-menu {
    flex: 1;
    overflow: hidden;
    margin-left: 10px;
    :deep(.el-menu) {
      background-color: transparent;
      border-bottom: none;
      .el-menu-item,
      .el-submenu__title {
        color: var(--next-bg-topBarColor, #303133);
        height: 50px;
        line-height: 50px;
        &:hover {
          background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05));
        }
      }
      .el-menu-item.is-active {
        color: var(--primary, #409eff);
        background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05));
        border-bottom: 2px solid var(--primary, #409eff);
      }
      .el-submenu.is-active .el-submenu__title {
        border-bottom: none;
      }
    }
  }
  .header-tools {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-left: 20px;
    .tool-item {
      padding: 0 12px;
      cursor: pointer;
      color: var(--next-bg-topBarColor, #303133);
      height: 50px;
      display: flex;
      align-items: center;
      transition: background-color 0.3s;
      &:hover {
        background: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05));
      }
    }
    .avatar-container {
      .avatar-wrapper {
        display: flex;
        align-items: center;
        .user-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .user-name {
          color: var(--next-bg-topBarColor, #303133);
          font-size: 14px;
        }
      }
    }
  }
}
.main-container {
  height: calc(100% - 50px);
  background-color: var(--next-bg-main-color);
  display: flex;
  .sub-aside {
    width: 180px;
    height: 100%;
    background-color: var(--next-bg-menuBar, #fff);
    border-right: 1px solid var(--next-border-color-light, #ebeef5);
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    .sub-aside-title {
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
    .sub-aside-menu {
      flex: 1;
      overflow: hidden;
      :deep(.el-menu) {
        border-right: none;
        background-color: transparent !important;
      }
    }
  }
  .content-wrapper {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
}
</style>

<style>
/* 经典布局菜单弹出层样式 */
.classic-menu-popper {
  .el-menu {
    background-color: var(--next-bg-topBar, #fff) !important;
    border: 1px solid var(--next-border-color-light, #ebeef5);
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .el-menu-item,
  .el-submenu__title {
    color: var(--next-bg-topBarColor, #303133) !important;
    height: 50px !important;
    line-height: 50px !important;
  }
  .el-menu-item:hover,
  .el-submenu__title:hover {
    background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05)) !important;
  }
  .el-menu-item.is-active {
    color: var(--primary, #409eff) !important;
    background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05)) !important;
  }
}
</style>
