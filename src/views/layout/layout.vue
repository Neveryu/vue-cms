<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
    <div class="main-container">
      <tabs-view></tabs-view>
      <app-main></app-main>
    </div>
  </div>
</template>
<script>
  import Navbar from './navbar'
  import Sidebar from './sidebar/sidebar'
  import TabsView from './tabs-view'
  import AppMain from './app-main'
  export default {
    components: {
      Navbar,
      Sidebar,
      TabsView,
      AppMain
    }
  }
</script>
<style scoped lang="stylus">
  .app-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    .main-container {
      padding-left: 201px;
      padding-top: 61px;
    }
  }
</style>
