<template>
  <div class="homepage-container">

    <div class="home-total">
      <div class="home-total-item" v-for="(item, index) of homeTotalData">
        <div class="wrapper-item">
          <p class="title">{{item.title}}</p>
          <p class="value" ref="countup">{{item.value}}</p>
          <color-line :id='"main"+index' :color="item.color" :optionData="item.data" width="180px" height="70px"></color-line>
        </div>
      </div>
    </div>

    <el-row class="home-part1" :gutter="0">
      <el-col :span="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">平台近6个月的交易记录</p>
          </div>
          <div class="content" ref="near-six-month-chart">
            <near-six-month width="100%" height="100%"></near-six-month>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="detail-item-wrapper">
        <div class="home-detail-item" :style="{ background: item.color}" v-for="(item, index) of homeDetailItem">
          <div class="name">{{item.name}}</div>
          <div class="value">
            <span class="num">{{(item.value / 10000).toFixed(2)}}</span>万
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="rank">
          <div class="title">
            <p class="title-value">投资龙虎榜</p>
          </div>
          <div class="content" ref="rankContent">
            <ul>
              <li v-for="item of rankList">
                <span>{{item.name}}</span>
                <span>{{item.value}}</span>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="home-part2" :gutter="0">
      <el-col :span="12">
        <div class="financing-sprinkled">
          <div class="title">
            <p class="title-value">投资金额及融资期限分布图示</p>
          </div>
          <div class="content" ref="">
            <!-- 投资 -->
            <div class="investment">
              <span class="title">投资金额比例</span>
              <investment-pie width="100%" height="50%"></investment-pie>
              <div class="detail">
                <span class="detail-item">1万元以下</span>
                <span class="detail-item">1万元以下</span>
                <span class="detail-item">1万元以下</span>
                <span class="detail-item">1万元以下</span>
              </div>
            </div>
            <!-- 融资 -->
            <div class="financing">
              <span class="title">融资期限</span>
              <investment-pie width="100%" height="50%"></investment-pie>
              <div class="detail">
                <span>1万元以下</span>
                <span>1万元以下</span>
                <span>1万元以下</span>
                <span>1万元以下</span>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">

      </el-col>
    </el-row>

  </div>
</template>
<script>
  import CountUp from 'countup.js'
  import {getHomeTotal, getHomeDetailItem, getRank} from '@/api/homepage'
  import ColorLine from '@/components/color-line'
  import NearSixMonth from '@/views/homepage/near-six-month'
  import BScroll from 'better-scroll'
  import InvestmentPie from '@/views/homepage/investment-pie'
  export default {
    components: {
      ColorLine,
      NearSixMonth,
      InvestmentPie
    },
    data() {
      return {
        homeTotalData: [],
        homeDetailItem: [],
        rankList: [],
        numAnim: null
      }
    },
    methods: {
      initCountUp() {
        this.$nextTick(() => {
          let countupLength = this.$refs.countup.length
          let i = 0
          for (i; i < countupLength; i++) {
            this.numAnim = new CountUp(this.$refs.countup[i], 0, this.$refs.countup[i].innerText, 2, 1.5)
            this.numAnim.start()
          }
        })
      },
      _initScroll() {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.rankContent, {
            scrollY: true,
            click: true,
            scrollbar: {
              fade: false,
              interactive: true // 1.8.0 新增
            },
            mouseWheel: {
              speed: 20,
              invert: false,
              easeTime: 300
            }
          })
        } else {
          this.scroll.refresh()
        }
      }
    },
    created() {
      // 获取头部hometotal
      getHomeTotal().then((resp) => {
        this.homeTotalData = resp.data
        this.initCountUp()
      }).catch(() => {
        console.log('获取home-total出现异常')
      })
      // 获取 detailItem
      getHomeDetailItem().then(resp => {
        this.homeDetailItem = resp.data
      }).catch(() => {
        console.log('获取detailItem出现异常')
      })
      // 获取投资榜
      getRank().then(resp => {
        this.rankList = resp.data
        this._initScroll()
      }).catch(() => {
        console.log('获取rankList出现异常')
      })
    },
    mounted() {},
    updated() {
      // this.$nextTick(function() {
      //   this.initCountUp()
      // })
    }
  }
</script>
<style scoped lang="scss">
  .home-total {
    width: 100%;
    min-width: 800px;
    height: 150px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 0 0 15px 0;
    .home-total-item {
      box-sizing: border-box;
      display: inline-block;
      width: 25%;
      height: 100%;
      padding: 15px 0;
      vertical-align: top;
      .wrapper-item {
        height: 100%;
        padding: 0 20px;
        border-right: 1px solid #ccc;
        text-align: center;
        .title {
          margin: 0px 0;
        }
        .value {
          margin: 5px 0;
          font-size: 26px;
        }
      }
      &:last-child {
        .wrapper-item {
          border: none;
        }
      }
    }
  }
  .home-part1 {
    margin: 0 !important;
    .near-six-month {
      border: 1px solid #eee;
      height: 300px;
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        width: 100%;
        height: 260px;
      }
    }
    .detail-item-wrapper {
      display: flex;
      height: 300px;
      overflow: hidden;
      flex-wrap: wrap;
      flex-flow: row wrap;
      justify-content: space-around;
      align-content: space-around;
      padding: 0 10px;
      color: #fff;
      .home-detail-item {
        flex: 0 0 48%;
        // display: inline-block;
        // width: 150px;
        height: 145px;
        border: 1px solid #eee;
      }
      .home-detail-item:nth-child(3), .home-detail-item:nth-child(4) {
        margin-top: 10px;
      }
      .home-detail-item {
        .name {
          padding: 30px 0 10px 0;
          text-align: center;
          font-size: 20px;
        }
        .value {
          text-align: center;
          .num {
            font-size: 28px;
          }
        }
      }
    }
    .rank {
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        position: relative;
        width: 100%;
        height: 260px;
        overflow: hidden;
        ul {
          margin: 0;
        }
      }
    }
  }
  .home-part2 {
    margin-top: 15px;
    .financing-sprinkled {
      border: 1px solid #eee;
      height: 350px;
      .title {
        background: #dde3ef;
        padding: 10px 0;
        .title-value {
          margin-left: 4px;
          text-indent: 4px;
          color: #666;
          &:before {
            display: inline-block;
            content: '';
            width: 4px;
            height: 16px;
            background: purple;
            margin-right: 4px;
            border-radius: 4px;
            vertical-align: middle;
          }
        }
      }
      .content {
        display: inline-flex;
        width: 100%;
        height: 310px;
        .investment {
          height: 310px;
          width: 50%;
          .title {
            display: inherit;
            text-align: center;
            background: transparent;
            padding-top: 20px;
          }
          .detail {
            .detail-item {
              display: block;
            }
          }
          // background: deeppink;
        }
        .financing {
          height: 310px;
          width: 50%;
          .title {
            display: inherit;
            text-align: center;
            background: transparent;
            padding-top: 20px;
          }
          // background: #ccc;
        }
      }
    }
  }

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>