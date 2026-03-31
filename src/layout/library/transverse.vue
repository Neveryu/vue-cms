<!-- 
  transverse.vue - 横向布局
  顶部横向菜单 + 内容区域
-->
<template>
  <el-container class="layout-container layout-transverse" direction="vertical">
    <!-- 顶部菜单栏 -->
    <div class="layout-header" v-show="!isTagsViewCurrenFull">
      <div class="header-top">
        <!-- Logo 区域 -->
        <div class="header-logo">
          <Logo v-if="themeConfig.isShowLogo" />
        </div>
        <!-- 横向菜单区域 -->
        <div class="header-menu">
          <el-menu mode="horizontal" :default-active="activeMenu">
            <sidebar-item v-for="route in visibleRouters" :key="route.path" :item="route" :base-path="route.path" />
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
    <!-- 主内容区域 -->
    <el-main class="layout-main">
      <tabs-view v-if="themeConfig.isTagsview"></tabs-view>
      <el-scrollbar class="container-wrapper" ref="layoutScrollbarRef">
        <main-container ref="mainContainer"></main-container>
      </el-scrollbar>
    </el-main>
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
  name: 'TransverseLayout',
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
    // 过滤掉隐藏的路由
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
          // 有多个可见子路由的也显示
          const visibleChildren = (router.children || []).filter((child) => !child.hidden)
          if (visibleChildren.length > 0) {
            return true
          }
          return false
        })
        .map((router) => {
          // 如果没有 meta 但只有一个子路由，返回子路由（透传）
          if (!router.meta && router.children && router.children.length === 1) {
            return router.children[0]
          }
          return router
        })
    },
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout',
      toggleSettingPanel: 'setting/toggleSettingPanel',
    }),
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
    margin-left: 10px;
    display: flex;
    :deep(.el-menu) {
      background-color: transparent;
      border-bottom: none;
      display: flex;
      flex-wrap: nowrap;
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
.layout-main {
  padding: 0;
  height: calc(100% - 50px);
  background-color: var(--next-bg-main-color);
  display: flex;
  flex-direction: column;
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
</style>

<style>
/* 横向菜单弹出层样式 */
.transverse-menu-popper {
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
