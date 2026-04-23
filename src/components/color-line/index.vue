<template>
  <div class="color-line">
    <div :id="id" class="wrapper"></div>
  </div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
export default {
  name: 'color-line',
  props: {
    id: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    optionData: {
      type: Array,
      default: function () {
        return [50, 75, 60, 90, 80, 40, 90]
      },
    },
    width: {
      type: String,
      default: '100px',
    },
    height: {
      type: String,
      default: '80px',
    },
  },
  methods: {
    drawPie(id) {
      const theme = getComputedStyle(document.documentElement)
      const muted = (theme.getPropertyValue('--next-text-color-regular') || '#9aa8b6').trim()
      const divider = (theme.getPropertyValue('--next-divider') || 'rgba(255,255,255,0.06)').trim()

      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: { lineStyle: { color: divider } },
          axisLabel: { color: muted },
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            data: this.optionData,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: this.color,
                },
              },
            },
          },
        ],
      })
    },
  },
  mounted() {
    document.getElementById(this.id).style.width = this.width
    document.getElementById(this.id).style.height = this.height
    this.$nextTick(function () {
      this.drawPie(this.id)
    })
  },
}
</script>
<style scoped lang="scss">
.color-line {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper {
    /* 宽度由组件 mounted 时的行内样式控制（支持百分比） */
    height: 100%;
    margin: 0;
    box-sizing: border-box;
  }
}
</style>
