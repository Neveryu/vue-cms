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
        default: ''
      },
      height: {
        type: String,
        default: ''
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
    },
    methods: {
      initChart() {
        this.charts = echarts.init(this.$el)
        this.charts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['0-3个月', '3-6个月', '6-12个月', '12个月以上']
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
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '18',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 135, name: '0-3个月'},
                {value: 210, name: '3-6个月'},
                {value: 234, name: '6-12个月'},
                {value: 135, name: '12个月以上'}
              ]
            }
          ]
        })
      }
    }
  }
</script>
