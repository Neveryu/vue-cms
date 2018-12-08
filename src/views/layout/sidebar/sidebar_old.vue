<template>
  <el-menu mode="vertical"
           class="el-menu-vertical"
           unique-opened
           @open="handleOpen"
           @close="handleClose"
           background-color=""
           :collapse="isCollapse"
           :default-active="$route.path">
    <template v-for="router of routers" v-if="!router.hidden">

      <router-link v-if="hasOneShowingChildren(router.children) && !router.children[0].children && !router.alwaysShow" :to="router.path + '/' + router.children[0].path">
        <el-menu-item :index="router.path + '/' + router.children[0].path">
          <i :class="'el-icon-' + router.meta.icon"></i>
          <span>{{router.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="router.path || router.meta.title" :key="router.path">
        <template slot="title">
          <i :class="'el-icon-' + router.meta.icon"></i>
          <span>{{router.meta.title}}</span>
        </template>

        <template v-for="child of router.children" v-if="!child.hidden">
          <router-link :to="router.path + '/' + child.path" v-if="!child.children">
            <el-menu-item :index="router.path + '/' + child.path">
              <span>{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>

          <el-submenu v-else :index="child.path || child.meta.title" :key="child.path">
            <template slot="title">
              <span>{{child.meta.title}}</span>
            </template>
            <template v-for="threechild of child.children" v-if="!threechild.hidden">
              <router-link :to="router.path + '/' + child.path + '/' + threechild.path" v-if="!threechild.children">
                <el-menu-item :index="router.path + '/' + child.path + '/' + threechild.path">
                  <span>{{threechild.meta.title}}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>

        </template>
      </el-submenu>
      
    </template>
  </el-menu>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SideBar',
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      ...mapGetters([
        'routers'
      ])
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      hasOneShowingChildren(children) {
        if (children.length === 1) {
          return true
        }
        return false
      }
    }
  }
</script>
<style scoped lang="stylus">
  .el-menu-vertical:not(.el-menu--collapse) {
    position: fixed;
    top: 61px;
    width: 200px;
    height: 100%;
    min-height: 500px;
    // background: {
    //   image: -webkit-gradient(linear, left top, right top, from(#1278f6), to(#00b4aa));
    //   image: -webkit-linear-gradient(left, #1278f6, #00b4aa);
    //   image: -moz-linear-gradient(left, #1278f6, #00b4aa);
    //   image: linear-gradient(to bottom, #f2f2f2, #f5f5f5);
    // }
  }
</style>
