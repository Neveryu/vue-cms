<template>
  <div class="container">
    <!-- 包含两个同级容器，分别是可视化数据，和详情列表页-->
    <!-- 数据可视化容器-->
    <div v-show="showFlag === 1">
      <!-- 数量统计-总的数据分布 -->
      <div class="header brand-header">
        <span class="name">数据分布</span>
      </div>
      <div class="brand-wrapper">
        <catelog-brand width="100%" height="100%" :x-data="catelogXData" :y-data="catelogYData" @gotoList="handlerToList"></catelog-brand>
      </div>
      <!-- 数量统计-细分类别数据 -->
      <el-row class="details-wrapper" :gutter="30">
        <!-- 数量细分类别展示 -->
        <el-col :span="8">
          <div class="detail-wrapper">
            <div class="header">
              <span class="name">数据细分类别展示</span>
            </div>
            <div class="content">
              <detail-label v-if="catelogData.length > 0" :label-data="catelogData"></detail-label>
            </div>
          </div>
        </el-col>

        <!-- 数量排行展示 -->
        <el-col :span="8">
          <div class="num-top10">
            <div class="header">
              <span class="name">数量排行TOP10</span>
            </div>
            <div class="content">
              <part-brand :table-data="departData"></part-brand>
            </div>
          </div>
        </el-col>

        <!-- 完成率排行展示 -->
        <el-col :span="8">
          <div class="rate-top10">
            <div class="header">
              <span class="name">完成率排行TOP10</span>
            </div>
            <div class="content">
              <part-rate width="100%" height="100%" :x-data="rateXData" :y-data="rateYData"></part-rate>
            </div>
          </div>
        </el-col>

      </el-row>
    </div>
    <!-- 数据列表-->
    <data-list v-if="showFlag === 2"
      :p-id="pId"
      :ques-id="quesId"
      :dept-id="deptId" @backFromList="_backFromList"></data-list>
  </div>
</template>
<script>
import { deepClone } from '@/utils'
import {getData, getDepartTop} from '@/api/echarts'
import CatelogBrand from './index-child/catelog-brand'
import DetailLabel from './index-child/detail-label'
import PartBrand from './index-child/part-brand'
import PartRate from './index-child/part-rate'
import DataList from './index-child/data-list'
export default {
  name: 'echarts',
  components: {
    CatelogBrand,
    DetailLabel,
    PartBrand,
    PartRate,
    DataList
  },
  data() {
    return {
      // 标志位（1:显示图表页面；2:显示详情页）
      showFlag: 1,
      // 分类
      catelogData: [],
      catelogXData: [],
      catelogYData: [],
      // top10数据【数量】
      departData: [],
      // 完成率top10
      rateXData: [],
      rateYData: []
    }
  },
  methods: {
    // 列表显示
    handlerToList(pid) {
      console.log(pid)
    },
    // 获取数量以及详情数据
    _getCateData() {
      getData().then(resp => {
        let respData = resp.data.data
        this.catelogData = respData.sort((a, b) => {
          return b.all - a.all
        })
        respData.forEach((v, i, _this) => {
          this.catelogYData.push(v.all)
          this.catelogXData.push({
            'value': v.quesName,
            'id': v.quesId
          })
        })
      })
    },
    // top10&率
    _getDepartTop() {
      getDepartTop().then(resp => {
        let respData = resp.data.data
        // clone
        let _respData1 = deepClone(respData)
        let _respData2 = deepClone(respData)
        // 总数排行
        this.departData = _respData1.sort((a, b) => {
          return b.all - a.all
        })
        // 完成率排行
        _respData2.sort((a, b) => {
          return (b.done * 100 / b.all) - (a.done * 100 / a.all)
        })
        _respData2.forEach((v, i, _this) => {
          this.rateYData.push(v.deptName)
          var _percentage = (v.done * 100 / v.all).toFixed(2)
          this.rateXData.push({'value': _percentage, 'id': v.deptId})
        })
      })
    }
  },
  created() {
    this._getCateData()
    this._getDepartTop()
  }
}
</script>
<style scoped lang="stylus">
.container
  padding 20px
  background-color: #03285c
  // background #0d47a1 url('../../../static/image/echarts/bg.jpg')
  background-position center
  background-repeat no-repeat
  background-size cover
  .header
    // width 500px
    height 40px
    // background transparent url('../../../static/image/echarts/title.png') 0 center no-repeat
    // background-size 100% 100%
    color #fff
    margin-bottom 10px
    border-bottom 2px solid transparent
    border-left 20px solid transparent
    border-image url('../../../static/image/echarts/title.png') 13 60 stretch
    .name
      display inline-block
      height 40px
      line-height 30px
      font-size 18px
  .brand-wrapper
    width 100%
    height 300px
  .details-wrapper
    height auto
    margin-top 25px
    padding-bottom 20px
    .rate-top10
      .content
        width 100%
        height 300px
</style>
