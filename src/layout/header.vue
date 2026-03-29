<template>
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
                :class="v.meta.icon"
                class="layout-navbars-breadcrumb-iconfont"></i>
              <svg-icon
                v-else-if="themeConfig.isBreadcrumbIcon && v.meta.icon"
                :icon-class="v.meta.icon"
                class="layout-navbars-breadcrumb-iconfont" />
              <span v-if="v.meta.title">{{ $t(v.meta.title) }}</span>
              <span v-else>{{ v.meta.tagsViewName }}</span>
            </span>
            <a v-else @click.prevent="onBreadcrumbClick(v)">
              <i
                v-if="themeConfig.isBreadcrumbIcon && v.meta.icon && !v.meta.icon.startsWith('svg-')"
                :class="v.meta.icon"
                class="layout-navbars-breadcrumb-iconfont"></i>
              <svg-icon
                v-else-if="themeConfig.isBreadcrumbIcon && v.meta.icon"
                :icon-class="v.meta.icon"
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
</template>
<script>
import { confirm } from '@/decorator/confirm'
import { mapGetters, mapActions } from 'vuex'
import LangSelect from '@/components/lang-select'
import Screenfull from '@/components/screenfull'

export default {
  name: 'NavBar',
  components: {
    LangSelect,
    Screenfull
  },
  computed: {
    ...mapGetters(['userName', 'userAvatar', 'sidebarCollapse', 'routers']),
    themeConfig() {
      return this.$store.state.setting
    },
    getIconName() {
      return this.sidebarCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  data() {
    return {
      isTagsViewCurrenFull: false,
      breadcrumbList: []
    }
  },
  watch: {
    $route: {
      handler() {
        this.getBreadcrumb()
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout',
      toggleCollapse: 'setting/toggleCollapse',
      toggleSettingPanel: 'setting/toggleSettingPanel'
    }),
    // 展开/收起左侧菜单点击
    onSideBarCollapseChange() {
      this.toggleCollapse()
    },
    /**
     * 点击Header中的设置图标按钮
     */
    onOpenSettingClick() {
      this.toggleSettingPanel()
    },
    /**
     * 获取面包屑数据
     */
    getBreadcrumb() {
      if (!this.themeConfig.isBreadcrumb) {
        this.breadcrumbList = []
        return
      }
      // 直接使用路由匹配结果，展示真实的路由层级
      this.breadcrumbList = this.$route.matched.filter(item => {
        return item.meta && item.meta.title && !item.hidden
      })
    },
    /**
     * 点击面包屑跳转
     */
    onBreadcrumbClick(route) {
      const { path, redirect } = route
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(path)
    },
    @confirm('退出系统？')
    logout() {
      const loading = this.$loading({
        lock: true
      })
      this.userLogout()
        .then(() => {
          // 为了重新实例化vue-router对象 避免bug
          location.reload()
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err)
        })
        .finally(() => {
          loading.close()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout-header {
  display: flex;
  padding: 0;
  align-items: center;
  background-color: var(--next-bg-topBar, #fff);
  border-bottom: 1px solid var(--next-border-color-light, #ebeef5);
  height: 50px !important;
  box-sizing: border-box;
  // background-image: -webkit-gradient(linear, left top, right top, from(#1278f6), to(#00b4aa));
  // background-image: -webkit-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
  // background-image: -moz-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
  // background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
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
      // line-height: 50px;
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
