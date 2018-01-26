<template>
  <el-menu mode="vertical"
           class="el-menu-vertical"
           background-color="#545c64"
           text-color="#fff"
           unique-opened>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>
<script>
  export default {}
</script>
<style scoped lang="scss">
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    min-height: 500px;
  }
</style>
