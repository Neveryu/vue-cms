<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
  },
}
</script>

<style scoped lang="scss">
.svg-icon {
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}
</style>
