<template>
  <div id="app">
    <router-view />
    <Setings />
  </div>
</template>

<script>
import Setings from '@/layout/settings/index.vue'

export default {
  components: {
    Setings,
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
