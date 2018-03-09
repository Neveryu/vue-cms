<template>
  <el-menu mode="vertical"
           class="el-menu-vertical"
           unique-opened
           @open="handleOpen"
           @close="handleClose"
           background-color=""
           :collapse="isCollapse">
    <router-link to="/introduction">
      <el-menu-item index="1">
        <i class="el-icon-question"></i>
        <span>简述</span>
      </el-menu-item>
    </router-link>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组二</template>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">分组二</template>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="4">
      <i class="el-icon-edit"></i><span>选项1</span>
    </el-menu-item>
    <el-menu-item index="5">
      <i class="el-icon-share"></i><span>选项1</span>
    </el-menu-item>
    <el-menu-item index="6">
      <i class="el-icon-menu"></i><span>选项1</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        isCollapse: false
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style scoped lang="scss">
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
