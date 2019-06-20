<template>
  <div class="part-brand-wrapper">
    <ul class="data-wrapper">
      <li class="item">
        <span class="index" style="visibility: hidden"></span>
        <span class="name">地区</span>
        <span class="value">总数</span>
        <span class="done-value">完成数</span>
        <span class="rate">完成率</span>
      </li>
      <li class="item" v-for="(item, index) of tableData" :key="item.id" @click="_select(item)">
        <span class="index" :class="classObject(index)">{{index + 1}}</span>
        <span class="name">{{item.deptName}}</span>
        <span class="value">{{item.all}}件</span>
        <span class="done-value">{{item.done}}件</span>
        <span class="rate">{{(item.done*100/item.all).toFixed(2)}}%</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'part-brand',
  props: {
    tableData: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      partTop: this.tableData
    }
  },
  methods: {
    // 调到list列表
    _select(item) {
      let _deptId = item.deptId
      this.$emit('goList', _deptId)
    },
    classObject(index) {
      return {
        first: index === 0,
        second: index === 1,
        thrid: index === 2
      }
    }
  },
  mounted() {}
}
</script>
<style scoped lang="stylus">
  .part-brand-wrapper
    height 200px
    background-image url('/static/part-brand.png')
    background-repeat no-repeat
    background-size 100% 100%
    .data-wrapper
      font-size 0
      color #E7ECF0
      width 96%
      height 100%
      margin 0 auto
      list-style none
      padding-left 0
      .item
        font-size 16px
        // margin-top 4px
        cursor pointer
        height 28px
        line-height 28px
        &:hover
          background-color rgba(18,245,255,0.1)
        .index
          color #fff
          display inline-block
          font-size 14px
          width 18px
          height 18px
          line-height 18px
          text-align center
          border-radius 50%
          background-color #037fa7
          text-align center
          vertical-align middle
          &.first
            background-color #ac4c5d
          &.second
            background-color #af8233
          &.thrid
            background-color #b49c3f
        .name
          display inline-block
          width 30%
          font-size 16px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          vertical-align middle
        .value
          display inline-block
          width 20%
          text-align center
        .done-value
          display inline-block
          width 20%
          text-align center
        .rate
          display inline-block
          width 20%
          text-align right
</style>
