<template>
  <div class="main-app">
    <router-view></router-view>
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
    background: pink;
  }
</style>