<template>
  <el-header class="layout-header" v-show="!isTagsViewCurrenFull">
    <i class="el-icon-s-fold"></i>

    <div class="top-navbar">
      <el-menu mode="horizontal" text-color="#fff" active-text-color="#fff">
        <router-link to="/home" style="display: table">
          <el-menu-item index="1" class="title-name">{{ $t('navbar.title') }}</el-menu-item>
        </router-link>

        <change-theme class="theme-container"></change-theme>

        <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
          <screenfull class="screenfull"></screenfull>
        </el-tooltip>

        <div class="lang-select">
          <lang-select></lang-select>
        </div>

        <div class="avatar-container">
          <el-dropdown trigger="click">
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
      </el-menu>
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
  methods: {
    ...mapActions({
      userLogout: 'user/logout'
    }),
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
    }
  }
}
</script>
<style lang="scss" scoped>
.top-navbar {
  position: fixed;
  width: 100%;
  z-index: 10;
  .el-menu {
    border-bottom: none !important;
    background-image: -webkit-gradient(linear, left top, right top, from(#1278f6), to(#00b4aa));
    background-image: -webkit-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
    background-image: -moz-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
    background-image: linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6);
    .lang-select {
      position: absolute;
      top: 18px;
      right: 150px;
    }
    .lang-select ::v-deep .el-dropdown {
      font-size: 20px;
      color: #fff;
    }

    .avatar-container {
      position: absolute;
      top: 15px;
      right: 40px;
      .avatar-wrapper {
        cursor: pointer;
      }
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
}

.top-navbar ::v-deep .el-menu-item {
  font-size: 20px;
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }
}
.top-navbar ::v-deep .theme-container {
  position: absolute;
  top: 15px;
  right: 225px;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  // background-image linear-gradient(red, blue)
}
.top-navbar .screenfull {
  position: absolute;
  top: 20px;
  right: 190px;
}
</style>
