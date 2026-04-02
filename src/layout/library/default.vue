<!-- 
  default.vue - 默认布局
  左侧菜单栏 + 右侧内容区
-->
<template>
  <el-container class="layout-container">
    <!-- 侧边栏 -->
    <el-aside class="layout-aside-wrapper" :class="setCollapseStyle">
      <Logo v-if="themeConfig.isShowLogo" />
      <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
        <el-menu
          mode="vertical"
          :unique-opened="themeConfig.isUniqueOpened"
          :default-active="activeMenu"
          background-color=""
          :collapse="themeConfig.isCollapse">
          <sidebar-item v-for="router of routers" :key="router.path" :item="router" :base-path="router.path"></sidebar-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <!-- 右侧内容区 -->
    <el-container class="main-container">
      <!-- 顶部 Header -->
      <el-header class="layout-header" v-show="!isTagsViewCurrenFull">
        <div class="header-left-wrapper">
          <i class="collapse-icon" :class="getIconName" @click="onSideBarCollapseChange"></i>
          <!-- 面包屑导航：根据设置显示/隐藏 -->
          <el-breadcrumb v-if="themeConfig.isBreadcrumb" class="layout-navbars-breadcrumb-hide">
            <transition-group name="breadcrumb">
              <el-breadcrumb-item v-for="(v, k) in breadcrumbList" :key="v.path">
                <span v-if="k === breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
                  <i
                    v-if="themeConfig.isBreadcrumbIcon && v.meta.icon && !v.meta.icon.startsWith('svg-')"
                    :class="'el-icon-' + v.meta.icon"
                    class="layout-navbars-breadcrumb-iconfont"></i>
                  <svg-icon
                    v-else-if="themeConfig.isBreadcrumbIcon && v.meta.icon"
                    :icon-class="v.meta.icon.replace('svg-', '')"
                    class="layout-navbars-breadcrumb-iconfont" />
                  <span v-if="v.meta.title">{{ $t(v.meta.title) }}</span>
                  <span v-else>{{ v.meta.tagsViewName }}</span>
                </span>
                <a v-else @click.prevent="onBreadcrumbClick(v)">
                  <i
                    v-if="themeConfig.isBreadcrumbIcon && v.meta.icon && !v.meta.icon.startsWith('svg-')"
                    :class="'el-icon-' + v.meta.icon"
                    class="layout-navbars-breadcrumb-iconfont"></i>
                  <svg-icon
                    v-else-if="themeConfig.isBreadcrumbIcon && v.meta.icon"
                    :icon-class="v.meta.icon.replace('svg-', '')"
                    class="layout-navbars-breadcrumb-iconfont" />
                  <span>{{ $t(v.meta.title) }}</span>
                </a>
              </el-breadcrumb-item>
            </transition-group>
          </el-breadcrumb>
        </div>
        <div class="header-right-wrapper">
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
import { confirm } from '@/decorator/confirm'
import { mapGetters, mapActions } from 'vuex'
import Logo from '@/layout/logo'
import TabsView from '@/layout/tabs-view'
import MainContainer from '@/layout/main-container'
import SidebarItem from '@/layout/sidebar/sidebar-item'
import LangSelect from '@/components/lang-select'
import Screenfull from '@/components/screenfull'

export default {
  name: 'DefaultLayout',
  components: {
    Logo,
    TabsView,
    MainContainer,
    SidebarItem,
    LangSelect,
    Screenfull,
  },
  data() {
    return {
      isTagsViewCurrenFull: false,
      breadcrumbList: [],
    }
  },
  computed: {
    ...mapGetters({
      themeConfig: 'setting',
      routers: 'routers',
      userName: 'userName',
      userAvatar: 'userAvatar',
      sidebarCollapse: 'sidebarCollapse',
    }),
    // 当前激活的菜单
    activeMenu() {
      return this.$route.path
    },
    // 设置菜单展开/收起时的宽度
    setCollapseStyle() {
      const { isCollapse } = this.themeConfig
      const asideBrColor = !isCollapse ? 'layout-el-aside-br-color' : ''
      if (isCollapse) return [asideBrColor, 'layout-aside-pc-64']
      return [asideBrColor, 'layout-aside-pc-220']
    },
    getIconName() {
      return this.sidebarCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    },
  },
  watch: {
    // 监听路由的变化，切换界面时，滚动条置顶
    $route: {
      handler() {
        this.$nextTick(() => {
          setTimeout(() => {
            this.updateScrollbar()
          }, 500)
        })
        this.getBreadcrumb()
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout',
      toggleCollapse: 'setting/toggleCollapse',
      toggleSettingPanel: 'setting/toggleSettingPanel',
    }),
    // 重置滚动条高度
    updateScrollbar() {
      this.$refs.layoutScrollbarRef.update()
    },
    // 展开/收起左侧菜单点击
    onSideBarCollapseChange() {
      this.toggleCollapse()
    },
    // 点击Header中的设置图标按钮
    onOpenSettingClick() {
      this.toggleSettingPanel()
    },
    // 获取面包屑数据
    getBreadcrumb() {
      if (!this.themeConfig.isBreadcrumb) {
        this.breadcrumbList = []
        return
      }
      // 直接使用路由匹配结果，展示真实的路由层级
      this.breadcrumbList = this.$route.matched.filter((item) => {
        return item.meta && item.meta.title && !item.hidden
      })
    },
    // 点击面包屑跳转
    onBreadcrumbClick(route) {
      const { path, redirect } = route
      // 如果跳转目标就是当前路由，就不跳转（避免重复导航错误）
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
    @confirm('退出系统？')
    logout() {
      const loading = this.$loading({ lock: true })
      this.userLogout()
        .then(() => {
          // 为了重新实例化vue-router对象 避免bug
          location.reload()
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          loading.close()
        })
    },
  },
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  background-color: var(--light);
  .main-container {
    background-color: var(--next-bg-main-color);
    height: 100% !important;
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
}

// 侧边栏样式
.layout-aside-wrapper {
  background: var(--next-bg-menuBar, #fff);
  height: 100% !important;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden !important;
  transition: width 0.3s ease;
  outline: none !important;
  &.layout-el-aside-br-color {
    border-right: 1px solid var(--el-border-color-light, #ebeef5);
  }
  &.layout-aside-pc-220 {
    width: 220px !important;
  }
  &.layout-aside-pc-64 {
    width: 64px !important;
  }
}

.flex-auto {
  flex: 1;
  overflow: hidden;
  :deep(.el-scrollbar__wrap) {
    margin: 0 !important;
    scrollbar-width: none;
  }
}

.el-menu {
  height: 100%;
  border-right: none !important;
  background-color: transparent !important;
}

// 深色模式菜单样式
:deep(.el-menu) {
  background-color: transparent !important;
  .el-menu-item,
  .el-submenu__title {
    color: var(--next-bg-menuBarColor, #303133);
    &:hover {
      background-color: var(--next-color-menu-hover, rgba(0, 0, 0, 0.05)) !important;
    }
  }
  .el-menu-item.is-active {
    color: var(--primary, #409eff) !important;
  }
  .el-submenu.is-active > .el-submenu__title {
    color: var(--next-bg-menuBarColor, #303133) !important;
  }
}

// 隐藏文字
.el-menu--collapse :deep(.el-submenu__title span) {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}

// 隐藏 >
.el-menu--collapse :deep(.el-submenu__title .el-submenu__icon-arrow) {
  display: none;
}

// Header 样式
.layout-header {
  display: flex;
  padding: 0;
  align-items: center;
  background-color: var(--next-bg-topBar, #fff);
  border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
  height: 50px !important;
  box-sizing: border-box;
  .header-left-wrapper {
    flex: 1;
    height: inherit;
    display: flex;
    align-items: center;
    .collapse-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      color: var(--gray);
      height: 100%;
      cursor: pointer;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    // 面包屑样式
    .el-breadcrumb {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .layout-navbars-breadcrumb-span {
      display: flex;
      align-items: center;
    }
    .layout-navbars-breadcrumb-iconfont {
      margin-right: 6px;
      font-size: 14px;
    }
  }
  .header-right-wrapper {
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding-right: 15px;
    .setting-item {
      padding: 0 10px;
      cursor: pointer;
      color: var(--secondary);
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        background: var(--next-color-user-hover);
        i {
          display: inline-block;
          animation: logoAnimation 0.3s ease-in-out;
        }
      }
    }
    .el-icon-setting {
      font-size: 16px;
    }
    .avatar-container {
      .avatar-wrapper {
        display: flex;
        align-items: center;
        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .username-wrapper {
          display: inline-block;
          height: 30px;
          line-height: 30px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
