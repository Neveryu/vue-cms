<template>
  <div class="content-wrapper">
    <div class="fixed-thead-wrapper">
      <div class="title">固定表头, 按照表头顺序排序</div>
      <fixed-thead />
    </div>

    <div class="unfixed-thead-wrapper">
      <div class="title">不固定表头, 按照点击顺序排序</div>
      <unfixed-thead />
    </div>
  </div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'

export default {
  name: 'DynamicTable',
  components: { FixedThead, UnfixedThead },
}
</script>

<style scoped lang="scss">
.content-wrapper {
  padding: 15px !important;
  .fixed-thead-wrapper,
  .unfixed-thead-wrapper {
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color);
    border-radius: 3px;
    .title {
      margin: 15px 0 5px 20px;
      color: var(--next-color-bar);
    }
  }
  .unfixed-thead-wrapper {
    margin-top: 25px;
    overflow: hidden;
  }
}
</style>
