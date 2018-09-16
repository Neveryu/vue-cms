<template>
  <div class="main-app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'app-main',
    data() {
      return {
        a: '测试'
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-app {
    padding: 5px;
  }
</style>