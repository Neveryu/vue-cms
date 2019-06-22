<template>
  <el-menu
    class="top-navbar"
    mode="horizontal" 
    text-color="#fff"
    active-text-color="#fff">
    <router-link to="/home">
      <el-menu-item index="1" class="title-name">{{$t('navbar.title')}}</el-menu-item>
    </router-link>
    
    <change-theme class="theme-container"></change-theme>

    <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">
      <screenfull class="screenfull right-menu-item"></screenfull>
    </el-tooltip>

    <lang-select class="right-menu-item"></lang-select>

    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar">
        <div class="username-wrapper">
          <span class="user-name">{{name}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class='inlineBlock' to="/user/profile">
          <el-dropdown-item>
            {{$t('navbar.profile')}}
          </el-dropdown-item>
        </router-link>
        <router-link class='inlineBlock' to="/user/avatar">
          <el-dropdown-item>
            {{$t('navbar.avatar')}}
          </el-dropdown-item>
        </router-link>
        <a target='_blank' href="https://github.com/Neveryu/vue-cms">
          <el-dropdown-item>
            {{$t('navbar.github')}}
          </el-dropdown-item>
        </a>
        <el-dropdown-item @click.native="logout">
          <span style="display:block;">{{$t('navbar.logOut')}}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import LangSelect from '@/components/lang-select'
  import Screenfull from '@/components/screenfull'
  import ChangeTheme from '@/components/theme'
  export default {
    name: '',
    components: {
      LangSelect,
      Screenfull,
      ChangeTheme
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar'
      ])
    },
    methods: {
      ...mapActions({
        userLogout: 'logout'
      }),
      logout() {
        this.userLogout().then(() => {
          location.reload()// 为了重新实例化vue-router对象 避免bug
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
<style lang="stylus">
.top-navbar {
  position fixed
  width 100%
  z-index 10
  border-bottom none !important
  background-image -webkit-gradient(linear, left top, right top, from(#1278f6), to(#00b4aa))
  background-image -webkit-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6)
  background-image -moz-linear-gradient(45deg, #1278f6, #00b4aa 50%, #1278f6)
  background-image linear-gradient(45deg,#1278f6,#00b4aa 50%, #1278f6)
}
.top-navbar /deep/ .el-menu-item {
  font-size 20px
  &:hover {
    background-color: transparent;
  }
  &:focus {
    background-color: transparent;
  }
}
.theme-container {
  position absolute
  top 15px
  right 225px
  color #fff
  font-size 24px
  cursor pointer
  // background-image linear-gradient(red, blue)
}
.top-navbar /deep/ .screenfull {
  position: absolute;
  top: 20px;
  right: 190px;
}
.right-menu-item {
  position: absolute;
  top: 18px;
  right: 150px;
  color: #fff;
}
.avatar-container {
  position: absolute;
  top: 15px;
  right: 40px;
  color: #fff;
  .avatar-wrapper {
    cursor: pointer;
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
    }
  }
}
</style>
