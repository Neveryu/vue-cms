<template>
  <el-header class="layout-header" v-show="!isTagsViewCurrenFull">
    <div class="header-left-wrapper">
      <i class="collapse-icon el-icon-s-fold" @click="onThemeConfigChange"></i>
      <el-breadcrumb class="layout-navbars-breadcrumb-hide">
        <transition-group name="breadcrumb">
          <!-- <el-breadcrumb-item v-for="(v, k) in state.breadcrumbList" :key="v.path">
          <span v-if="k === state.breadcrumbList.length - 1" class="layout-navbars-breadcrumb-span">
            <SvgIcon :name="v.meta.icon" class="layout-navbars-breadcrumb-iconfont" v-if="themeConfig.isBreadcrumbIcon" />
            <div v-if="v.meta.title">{{ $t(v.meta.title) }}</div>
            <div v-else>{{ v.meta.tagsViewName }}</div>
          </span>
          <a v-else @click.prevent="onBreadcrumbClick(v)">
            <SvgIcon :name="v.meta.icon" class="layout-navbars-breadcrumb-iconfont" v-if="themeConfig.isBreadcrumbIcon" />
            {{ $t(v.meta.title) }}
          </a>
        </el-breadcrumb-item> -->
          <el-breadcrumb-item key="a">
            <a @click.prevent="onBreadcrumbClick(v)">
              <svg-icon class="sidebar-icon" icon-class="svg-user" />
              路由菜单
            </a>
          </el-breadcrumb-item>
          <el-breadcrumb-item key="b">
            <a @click.prevent="onBreadcrumbClick(v)">
              <svg-icon class="sidebar-icon" icon-class="svg-user" />
              路由菜单
            </a>
          </el-breadcrumb-item>
          <el-breadcrumb-item key="c">
            <a @click.prevent="onBreadcrumbClick(v)">
              <svg-icon class="sidebar-icon" icon-class="svg-user" />
              路由菜单
            </a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
    <div class="header-right-wrapper">
      <div class="setting-item" @click="onLayoutSetingClick">
        <i class="el-icon-setting" title="设置"></i>
      </div>

      <div class="setting-item" @click="onLayoutSetingClick">
        <screenfull class="screenfull"></screenfull>
      </div>

      <div class="setting-item lang-select">
        <lang-select></lang-select>
      </div>

      <div class="setting-item avatar-container">
        <el-dropdown :show-timeout="70" :hide-timeout="50">
          <div class="avatar-wrapper">
            <img class="user-avatar" :src="avatar" />
            <div class="username-wrapper">
              <span class="user-name">{{ name }}</span>
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
import ChangeTheme from '@/components/theme'
export default {
  name: 'NavBar',
  components: {
    LangSelect,
    Screenfull,
    ChangeTheme
  },
  computed: {
    ...mapGetters(['name', 'avatar'])
  },
  data() {
    return {
      isTagsViewCurrenFull: false
    }
  },
  methods: {
    ...mapActions({
      userLogout: 'user/logout'
    }),
    // 展开/收起左侧菜单点击
    onThemeConfigChange() {
      themeConfig.value.isCollapse = !themeConfig.value.isCollapse
      setLocalThemeConfig()
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
          console.log(err)
        })
        .finally(() => {
          loading.close()
        })
    },
    onLayoutSetingClick() {

    }
  }
}
</script>
<style lang="scss" scoped>
.layout-header {
  display: flex;
  padding: 0;
  align-items: center;
  background-color: #fff;
  // border-bottom: 1px solid var(--light);
  border-bottom: 1px solid #000;
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
      font-size: 20px;
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
    }
    .el-icon-setting {
      font-size: 20px;
    }
    .avatar-container {
      padding: 0 10px;
      cursor: pointer;
      color: var(--secondary);
      height: 100%;
    }
    // .lang-select ::v-deep .el-dropdown {
    //   font-size: 20px;
    //   color: #fff;
    // }
    ::v-deep .user-avatar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
      .username-wrapper {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>
