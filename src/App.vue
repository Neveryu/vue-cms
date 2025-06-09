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
        // todo
      }
    },
  },
}
</script>

<style scoped lang="scss">
#app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
