<template>
  <div></div>
</template>
<script>
import { debounce } from '@/utils'
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/legend')
export default {
  name: 'near-six-month',
  props: {
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      optionData: [],
      legendData: ['交易总额', '营收', '净利润', '直接访问', '搜索引擎'],
      xAxisData: this.getNearSixMonth(),
    }
  },
  methods: {
    getNearSixMonth() {
      let value = []
      let currentMonth = 0
      if (new Date().getMonth() >= 6) {
        currentMonth = new Date().getMonth()
        for (let i = 0; i < 6; i++) {
          value.push(new Date().getFullYear() + '-' + (currentMonth + i - 5))
        }
      } else {
        currentMonth = new Date().getMonth()
        for (let i = 0; i < 6; i++) {
          if (currentMonth + i - 5 < 1) {
            value.push(new Date().getFullYear() - 1 + '-' + (currentMonth + i + 7))
          } else {
            value.push(new Date().getFullYear() + '-' + (currentMonth + i - 5))
          }
        }
      }
      return value
    },
    initChart() {
      // 读取主题变量以设置图表文字颜色，保证深色模式下可读
      const theme = getComputedStyle(document.documentElement)
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark'
      const textColor = (theme.getPropertyValue('--next-color-bar') || '#e6eef8').trim()
      const muted = (theme.getPropertyValue('--next-text-color-regular') || '#9aa8b6').trim()
      const divider = (theme.getPropertyValue('--next-divider') || 'rgba(255,255,255,0.06)').trim()
      const tooltipBackground = isDarkMode ? 'rgba(0,0,0,0.65)' : '#ffffff'
      const tooltipTextColor = isDarkMode ? textColor : '#2c3e50'
      const tooltipBorderColor = isDarkMode ? divider : 'rgba(0,0,0,0.08)'

      if (this.charts) {
        this.charts.dispose()
        this.charts = null
      }
      this.charts = echarts.init(this.$el)
      this.charts.setOption({
        textStyle: { color: textColor },
        tooltip: {
          trigger: 'axis',
          backgroundColor: tooltipBackground,
          borderColor: tooltipBorderColor,
          textStyle: { color: tooltipTextColor },
          extraCssText: isDarkMode ? 'box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);' : 'box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);',
        },
        grid: {
          left: '50px',
          right: '10px',
          bottom: '30px',
          top: '10px',
        },
        legend: {
          data: ['交易总额', '营收', '净利润', '直接访问', '搜索引擎'],
          textStyle: { color: textColor },
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: this.xAxisData,
          axisLine: { lineStyle: { color: divider } },
          axisLabel: { color: muted },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.03)' } },
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: divider } },
          axisLabel: { color: muted },
          splitLine: { lineStyle: { color: 'rgba(255,255,255,0.03)' } },
        },
        series: [
          {
            name: '交易总额',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '营收',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '净利润',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      })
    },
    createThemeObserver() {
      this.themeObserver = new MutationObserver((mutations) => {
        if (mutations.some((m) => m.attributeName === 'data-theme')) {
          this.initChart()
        }
      })
      this.themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      })
    },
  },
  mounted() {
    this.$el.style.width = this.width
    this.$el.style.height = this.height
    this.initChart()
    this.createThemeObserver()
    this.__resizeHanlder = debounce(() => {
      if (this.charts) {
        this.charts.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHanlder)
    if (this.themeObserver) {
      this.themeObserver.disconnect()
      this.themeObserver = null
    }
    if (this.charts) {
      this.charts.dispose()
      this.charts = null
    }
  },
}
</script>
