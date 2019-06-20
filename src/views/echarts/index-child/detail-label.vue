<template>
  <div class="detail-wrapper">
    <div class="label-scroll" ref="labelWrapper">
      <ul class="label-wrapper" ref="scrollParent">
        <li class="label" :class="{active: index === activeItem}" v-for="(item, index) of labelData" :key="item.id" @click="selectItem(index)">{{item.quesName}}</li>
      </ul>
    </div>
    <div class="content">
      <div class="chart-graph" ref="labelchart"></div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { debounce } from '@/utils/index'
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
export default {
  name: 'detail-wrapper',
  props: {
    labelData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 当前选中的项目，拥有数据的总条数
      currentSelectedItemAllNumber: 0,
      // 点击的quesId
      selectQuesId: '',
      activeItem: 0,
      itemDetail: [],
      itemLegendDetail: [],
      itemValueDetail: [],
      // 计算label宽度时需要额外polyfill一点宽度
      polyfillWidth: 30,
      vData: [],
      pieColorArr: ['#29A3E7', '#42D9FF', '#F8A05B', '#FBBA63', '#D75694', '#F573A1', '#C855DD', '#626CF6', '#6be6c1', '#c4ebad', '#f2d643', '#ebdba4', '#ffccbc', '#ff6d00', '#4932DB', '#4B3AFF']
    }
  },
  methods: {
    initChart() {
      let _this = this
      this.chart = echarts.init(this.$refs.labelchart)
      this.chart.setOption({
        backgroundColor: 'transparent',
        calculable: true,
        tooltip: {
          trigger: 'item',
          position: ['72%', '50%'],
          formatter: `<div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px;">{d}%</span><br/><span class="digital-number">{c}件</span></div>`,
          backgroundColor: 'transparent',
          textStyle: {
            fontSize: 26
          }
        },
        legend: { // 图例组件，颜色和名字
          left: '5',
          top: '1',
          itemGap: 12, // 图例每项之间的间隔
          itemWidth: 12,
          itemHeight: 12,
          icon: 'rect',
          data: _this.itemLegendDetail,
          orient: 'vertical',
          textStyle: {
            color: '#E7ECF0',
            fontSize: 16
          },
          tooltip: {
            show: true,
            trigger: 'none',
            position: ['72%', '50%'],
            formatter: function(name) {
              let _index = _this.itemValueDetail.findIndex((v, i, _this) => {
                return v.name === name.name
              })
              if(_index > -1 && name.name !== ' ') {
                const _allNumber = _this.currentSelectedItemAllNumber
                return `<div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px">${_allNumber === 0 ? 0 : (_this.itemValueDetail[_index].value * 100 / _allNumber).toFixed(2).endsWith('0') ? (_this.itemValueDetail[_index].value * 100 / _allNumber).toFixed(1).endsWith('0') ? (_this.itemValueDetail[_index].value * 100 / _allNumber).toFixed(0) : (_this.itemValueDetail[_index].value * 100 / _allNumber).toFixed(1) : (_this.itemValueDetail[_index].value * 100 / _allNumber).toFixed(2)}%</span><br/><span class="digital-number">${_this.itemValueDetail[_index].value}件</span></div>`
              } else {
                return `<div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px;">${_this.itemValueDetail[_index].value}件<span></div>`
              }
            },
            backgroundColor: 'transparent',
            textStyle: {
              fontSize: 26
            }
          }
        },
        series: [{
          name: '',
          type: 'pie',
          // clockwise: false, // 饼图的扇区是否是顺时针排布
          minAngle: 3, // 最小的扇区角度（0 ~ 360）
          center: ['72%', '50%'], // 饼图的中心（圆心）坐标
          radius: ['70%', '80%'], // 饼图的半径
          avoidLabelOverlap: true, // 是否启用防止标签重叠
          hoverOffset: 6,
          selectedMode: 'single',
          itemStyle: { // 图形样式
            normal: {
              label: { // 标签的位置
                show: false,
                rich: {
                  white: {
                    color: '#ddd',
                    align: 'center',
                    padding: [5, 0]
                  }
                }
                // normal: {
                //   show: true,
                //   position: 'inside', // 标签的位置
                //   formatter: "{d}%",
                //   textStyle: {
                //       color: '#fff',
                //   }
                // },
                // emphasis: {
                //   show: true,
                //   textStyle: {
                //     fontWeight: 'bold'
                //   }
                // }
              },
              labelLine: {
                show: false
              }
            }
          },
          data: this.itemValueDetail
        }]
      })
      this.chart.on('click', this._click)
      // this.chart.on('legendselected', this._legendClick)
      this.chart.on('legendselectchanged', this._legendClick)
    },
    selectItem(index) {
      this.activeItem = index
      this.currentSelectedItemAllNumber = this.labelData[index].all ? this.labelData[index].all : 0
      if(typeof this.labelData[index].children === 'undefined') {
        this.itemDetail = []
      } else {
        this.itemDetail = this.labelData[index].children
      }
      this._calculate()
      this.generateNewItem(this.itemDetail)
    },
    _initScroll() {
      if(!this.scroll) {
        this.scroll = new BScroll(this.$refs.labelWrapper, {
          scrollX: true,
          click: true
        })
      } else {
        this.scroll.refresh()
      }
    },
    // 计算所有的 label 的宽度和
    _calculate() {
      let parentWidth = 0
      let labelItems = document.querySelectorAll('.label')
      labelItems.forEach((v) => {
        parentWidth += v.offsetWidth
      })
      // 得到滚动区域的宽度值(为了让两边更匀称，额外加一点宽度polyfillWidth)
      this.$refs.scrollParent.style.width = (parentWidth + this.polyfillWidth) + 'px'
      this._initScroll()
    },
    _legendClick(e) {
      console.log(e)
      for(let i in e.selected) {
        e.selected[i] = true
      }
      console.log(e)
      // return false
    },
    // chart 点击
    _click(e) {
      console.log(e)
      if(e.name === ' ') {
        return
      }
      let selectQuesName = e.name
      let _currentItem = this.itemDetail
      for(var i = 0; i < _currentItem.length; i++) {
        if(_currentItem[i].quesName === selectQuesName) {
          this.selectQuesId = _currentItem[i].quesId
          break
        }
      }
      this.$emit('goList', this.selectQuesId)
      // 如果希望点击后，不触发原生的 legend toggle 事件
      // 需要在这里修改 e 中的 selected，将其所以的子属性改为 true
      return false
    },
    // 数据计算&生成图表
    generateNewItem(itemDetail) {
      let legendArr = []
      let valArr = []
      itemDetail.forEach((v, i, _this) => {
        legendArr.push(v.quesName)
        valArr.push(
          {
            value: v.all,
            name: v.quesName,
            itemStyle: {
              normal: {
                // borderWidth: 8,
                shadowBlur: 100,
                shadowColor: 'rgba(142, 152, 241, 0.6)',
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: this.pieColorArr[2 * (i % 10)]
                }, {
                  offset: 1,
                  color: this.pieColorArr[2 * (i % 10) + 1]
                }])
              }
            }
          },
          {
            value: 0,
            name: ' ',
            tooltip: {
              formatter: ' '
            },
            label: {
              show: false,
              color: 'transparent'
            },
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
          /* {
            value: 0.1,
            name: '',
            itemStyle: {
              normal: {
                label: {
                show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          } */
        )
      })
      this.itemLegendDetail = legendArr
      this.itemValueDetail = valArr
      this.$nextTick(() => {
        this.initChart()
        if(document.querySelector('.chart-graph').lastChild) {
          if(document.querySelector('.chart-graph').lastChild.innerHTML === '') {
            document.querySelector('.chart-graph').lastChild.innerHTML =
            `<div style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: transparent; border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 26px/39px &quot;Microsoft YaHei&quot;; padding: 5px; left: 72%; top: 50%; pointer-events: none;"><div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px;">${this.currentSelectedItemAllNumber === 0 ? 0 : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(0) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2)}%</span><br><span class="digital-number">${this.itemValueDetail[0].value}件</span></div></div>`
          } else {
            if(document.querySelector('.chart-graph').lastChild.style.zIndex > 1) {
              document.querySelector('.chart-graph').lastChild.style.display = 'block'
              document.querySelector('.chart-graph').lastChild.innerHTML = `<div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px;">${this.currentSelectedItemAllNumber === 0 ? 0 : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(0) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2)}%</span><br><span class="digital-number">${this.itemValueDetail[0].value}件</span></div>`
            } else {
              document.querySelector('.chart-graph').lastChild.innerHTML =
              `<div style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s; background-color: transparent; border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font: 26px/39px &quot;Microsoft YaHei&quot;; padding: 5px; left: 72%; top: 50%; pointer-events: none;"><div style="transform: translate3d(-50%, -50%, 0); text-align: center"><span class="digital-number" style="font-size: 28px;">${this.currentSelectedItemAllNumber === 0 ? 0 : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1).endsWith('0') ? (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(0) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(1) : (this.itemValueDetail[0].value * 100 / this.currentSelectedItemAllNumber).toFixed(2)}%</span><br><span class="digital-number">${this.itemValueDetail[0].value}件</span></div></div>`
            }
          }
        }
      })
    }
  },
  watch: {
    labelData() {
      this.activeItem = 0
      this.selectItem(this.activeItem)
      this.__resizeHandler()
    }
  },
  created() {
    this.activeItem = 0
  },
  mounted() {
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
    this.selectItem(this.activeItem)
  }
}
</script>
<style scoped lang="stylus">
.detail-wrapper
  width 96%
  margin 0 auto
  .label-scroll
    font-size 0
    width 100%
    background-image url('../../../../static/image/echarts/label-bg.png')
    background-repeat no-repeat
    background-position center
    background-size contain
    overflow hidden
    .label-wrapper
      height 30px
      padding-left 0
      .label
        display inline-block
        height 30px
        line-height 30px
        font-size 16px
        color #fff
        padding 0 5px
        cursor pointer
        &.active
          color #FED218
  .content
    font-size 14px
    color #fff
    margin-top 10px
    .chart-graph
      // float right
      width 100%
      height 240px
</style>
