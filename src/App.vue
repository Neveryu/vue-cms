<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  watch: {
    $route(to) {
      if (to.path.indexOf('/login') === -1) {
      }
    },
  },
}
</script>

<style>
@import '~@/assets/style/index.css';
</style>
