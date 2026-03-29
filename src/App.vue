<template>
  <div id="app">
    <router-view />
    <Setings />
  </div>
</template>

<script>
import Setings from '@/layout/settings/index.vue'

/**
 * 虽然可以在 App.vue 中调用 mutation，但通常不推荐这样做，原因如下：
 * 解耦合：根组件通常应保持简洁，尽量避免直接处理业务逻辑。建议将业务逻辑放在子组件中，以便于管理和维护。
 * 可读性：将业务逻辑分散在多个组件中，可以提高代码的可读性和可维护性。
 * 状态管理：Vuex 的设计初衷是为了集中管理状态，根组件不应承担过多的状态管理职责。
 */
export default {
  components: {
    Setings,
  },
  created() {},
  mounted() {},
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
