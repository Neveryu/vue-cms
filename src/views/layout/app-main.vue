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
        desc: '这里是右侧主界面'
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main-app
    padding 5px
</style>