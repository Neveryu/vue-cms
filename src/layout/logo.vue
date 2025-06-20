<template>
  <div class="layout-logo" v-if="setShowLogo" @click="changeThemeConfig">
    <img :src="logoMini" class="layout-logo-medium-img" />
    <span class="my-line-1">{{ themeConfig.globalTitle }}</span>
  </div>
  <div class="layout-logo-size" v-else @click="changeThemeConfig">
    <img :src="logoMini" class="layout-logo-size-img" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoMini: '/static/image/logo/logo.png',
      setShowLogo: true,
      themeConfig: {
        globalTitle: 'vue-cms',
      },
    }
  },
  methods: {
    // logo 点击实现菜单展开/收起
    changeThemeConfig() {
      if (themeConfig.layout === 'transverse') return false
      themeConfig.isCollapse = !themeConfig.isCollapse
    },
  },
}
</script>

<style scoped lang="scss">
.layout-logo {
  // width: 220px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 21 41 / 2%) 0px 1px 4px;
  color: var(--primary);
  font-size: 16px;
  cursor: pointer;
  // animation: logoAnimation 0.3s ease-in-out;
  span {
    white-space: nowrap;
    display: inline-block;
  }
  &:hover {
    span {
      color: var(--primary-light-2);
    }
  }
  &-medium-img {
    width: 20px;
    margin-right: 5px;
  }
}
.layout-logo-size {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  // animation: logoAnimation 0.3s ease-in-out;
  &-img {
    width: 20px;
    margin: auto;
  }
  // &:hover {
  //   img {
  //     animation: logoAnimation 0.3s ease-in-out;
  //   }
  // }
}
</style>
