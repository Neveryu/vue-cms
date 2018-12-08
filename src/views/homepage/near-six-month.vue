<template>
  <div></div>
</template>
<script>
  import { debounce } from '@/utils'
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/line')
  require('echarts/lib/component/tooltip')
  export default {
    name: 'near-six-month',
    props: {
      width: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        optionData: [],
        legendData: ['交易总额', '营收', '净利润', '直接访问', '搜索引擎'],
        xAxisData: this.getNearSixMonth()
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
            if ((currentMonth + i - 5) < 1) {
              value.push((new Date().getFullYear() - 1) + '-' + (currentMonth + i + 7))
            } else {
              value.push(new Date().getFullYear() + '-' + (currentMonth + i - 5))
            }
          }
        }
        return value
      },
      initChart() {
        this.charts = echarts.init(this.$el)
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '50px',
            right: '10px',
            bottom: '30px',
            top: '10px'
          },
          legend: {
            data: ['交易总额', '营收', '净利润', '直接访问', '搜索引擎']
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: this.xAxisData
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '交易总额',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '营收',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '净利润',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '直接访问',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '搜索引擎',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        })
      }
    },
    mounted() {
      this.$el.style.width = this.width
      this.$el.style.height = this.height
      this.initChart()
      this.__resizeHanlder = debounce(() => {
        if (this.charts) {
          this.charts.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHanlder)
    }
  }
</script>
