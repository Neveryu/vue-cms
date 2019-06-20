<template>
  <div></div>
</template>
<script>
import { debounce } from '@/utils/index'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
export default {
  name: 'catelogBrand',
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    xData: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    yData: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    // 点击事件
    _click(e) {
      let pid = this.xData[e.dataIndex].id
      this.$emit('gotoList', pid)
    },
    // 初始化，绘制图表
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        title: {
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: 16
          }
        },
        grid: {
          left: '50px',
          right: '10px',
          bottom: '25px',
          top: '30px'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: this.xData,
          // 刻度标签文字颜色
          axisLabel: {
            color: '#fff',
            fontSize: 16,
            interval: 0,
            rotate: 0
          },
          // 横轴线颜色
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.2)'
            }
          }
        },
        yAxis: [
          {
            name: '(件)',
            type: 'value',
            // max: 10,
            // 单位字体大小
            nameTextStyle: {
              color: '#fff',
              fontSize: 16
            },
            // 刻度标签文字颜色
            axisLabel: {
              color: '#fff',
              fontSize: 16,
              formatter: '{value}'
            },
            // 横轴线颜色
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,0.2)'
              }
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [{
          name: '数量',
          type: 'bar',
          barWidth: '18%',
          xAxisIndex: 0,
          yAxisIndex: 0,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#00feff'
                  },
                  {
                    offset: 0.5,
                    color: '#027eff'
                  },
                  {
                    offset: 1,
                    color: '#0286ff'
                  }
                ]
              )
            }
          },
          data: this.yData,
          zlevel: 11
        }]
      })
      this.chart.on('click', this._click)
    }
  },
  watch: {
    xData() {
      this.initChart()
      this.__resizeHandler()
    },
    yData() {
      this.initChart()
      this.__resizeHandler()
    }
  },
  created() {},
  mounted() {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
    this.$el.style.width = this.width
    this.$el.style.height = this.height
    this.initChart()
  }
}
</script>
