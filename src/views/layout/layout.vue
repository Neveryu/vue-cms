<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
</template>
<script>
  import Navbar from './navbar'
  import Sidebar from './sidebar'
  export default {
    components: {
      Navbar,
      Sidebar
    }
  }
</script>
<style scoped lang="scss">
  // .app-wrapper {
  //   position: relative;
  //   width: 100%;
  //   height: 100%;
  // }
</style>