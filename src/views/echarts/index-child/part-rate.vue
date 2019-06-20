<template>
  <div></div>
</template>
<script>
import { debounce } from '@/utils/index'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
export default {
  name: 'part-rate',
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
    return {
      optionData: [],
      grayBar: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
    }
  },
  methods: {
    // 点击事件
    _click(e) {
      let _deptid = this.xData[e.dataIndex].id
      console.log(_deptid)
      this.$emit('goList', _deptid)
    },
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption({
        // tooltip: {},
        // color: ['#61a8ff'],
        grid: {
          left: 10,
          right: 10,
          bottom: 1,
          top: 1,
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            boundaryGap: true
          },
          {
            show: false
          }
        ],
        yAxis: [
          {
            type: 'category',
            inverse: true,
            data: this.yData,
            axisLabel: {
              color: '#fff',
              fontSize: 16
            },
            axisLine: {
              show: false
            }
          },
          {
            type: 'category',
            inverse: true,
            data: this.xData,
            axisLabel: {
              color: '#fff',
              fontSize: 16,
              formatter: '{value}%'
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '40%', // 统计条宽度
            itemStyle: {
              normal: {
                color: 'rgba(102, 102, 102,0.5)'
              }
            },
            z: 1,
            data: this.grayBar
          },
          {
            type: 'bar',
            data: this.xData,
            barWidth: '40%',
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#fff'
                },
                position: 'right',
                fontStyle: {
                  fontSize: 16
                },
                formatter: '{c}%'
              }
            },
            itemStyle: {
              normal: {
                color: {
                  colorStops: [{
                    offset: 0,
                    color: '#E287D5' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#FD96A6 ' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                }
              }
            }
          }
        ]
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
  created() {
  },
  mounted() {
    this.$el.style.width = this.width
    this.$el.style.height = this.height
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  }
}
</script>
