<template>
  <div></div>
</template>
<script>
import { debounce } from '@/utils'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
export default {
  name: 'investment-pie',
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
  methods: {
    initChart() {
      const theme = getComputedStyle(document.documentElement)
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark'
      const textColor = (theme.getPropertyValue('--next-color-bar') || '#e6eef8').trim()
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
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          backgroundColor: tooltipBackground,
          borderColor: tooltipBorderColor,
          textStyle: { color: tooltipTextColor },
          extraCssText: isDarkMode ? 'box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);' : 'box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);',
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['0-3个月', '3-6个月', '6-12个月', '12个月以上'],
          textStyle: { color: textColor },
        },
        series: [
          {
            name: '融资期限',
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center',
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '18',
                  fontWeight: 'bold',
                  color: textColor,
                },
              },
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              { value: 135, name: '0-3个月' },
              { value: 210, name: '3-6个月' },
              { value: 234, name: '6-12个月' },
              { value: 135, name: '12个月以上' },
            ],
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
