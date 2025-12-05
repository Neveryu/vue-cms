<template>
  <div class="homepage-container">
    <el-row class="home-total">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" class="home-card-item" v-for="(item, index) of homeTotalData" :key="'line-' + index">
        <div class="wrapper-item">
          <p class="title">{{ item.title }}</p>
          <p class="value digital-number" ref="countup">{{ item.value }}</p>
          <color-line :id="'main' + index" :color="item.color" :optionData="item.data" width="180px" height="70px"></color-line>
        </div>
      </el-col>
    </el-row>

    <el-row class="home-part1" :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">平台近6个月的交易记录</p>
          </div>
          <div class="content" ref="near-six-month-chart">
            <near-six-month width="100%" height="100%"></near-six-month>
          </div>
        </div>
      </el-col>
      <el-col class="detail-item-wrapper" :xs="16" :sm="16" :md="16" :lg="8" :xl="8">
        <div class="home-detail-item" :style="{ background: item.color }" v-for="item of homeDetailItem" :key="item.id">
          <div class="name">{{ item.name }}</div>
          <div class="value">
            <span class="num">{{ item.value }}</span>
            万
          </div>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="4" :xl="4">
        <div class="rank">
          <div class="title">
            <p class="title-value">投资龙虎榜（鼠标滚动/拖动均可）</p>
          </div>
          <div class="content" ref="rankContent">
            <ul class="wrapper-user">
              <li v-for="item of rankList" class="user-item" :key="item.id">
                <img class="avatar" :src="item.avatar" width="35" height="35" loading="lazy" alt="" />
                <div class="user-info">
                  <p class="name">{{ item.name }}</p>
                  <p class="value">{{ item.value }}</p>
                </div>
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
                <span class="detail-item">
                  1万元以下
                  <br />
                  33.04%
                </span>
                <span class="detail-item">
                  1-10万
                  <br />
                  30.57%
                </span>
                <span class="detail-item">
                  10-40万
                  <br />
                  23.08%
                </span>
                <span class="detail-item">
                  40万以上
                  <br />
                  13.31%
                </span>
              </div>
            </div>
            <!-- 融资 -->
            <div class="financing">
              <span class="title">融资期限</span>
              <financing-pie width="100%" height="50%"></financing-pie>
              <div class="detail">
                <span class="detail-item">
                  0-3个月
                  <br />
                  18.91%
                </span>
                <span class="detail-item">
                  3-6个月
                  <br />
                  29.41%
                </span>
                <span class="detail-item">
                  6-12个月
                  <br />
                  32.77%
                </span>
                <span class="detail-item">
                  12个月以上
                  <br />
                  18.91%
                </span>
              </div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="12">
        <div class="bad-debt">
          <div class="title">
            <p class="title-value">平台坏账及逾期情况</p>
          </div>
          <div class="content">
            <div class="bad">
              <div class="total">
                <div class="total1">
                  <p>坏账金额</p>
                  <p>
                    <span class="num">0</span>
                    元
                  </p>
                </div>
                <div class="total2">
                  <p>坏账比例</p>
                  <p>
                    <span class="num">0</span>
                    %
                  </p>
                </div>
              </div>
              <div class="chart">
                <p class="title">本平台自2015年1月上线以来无坏账</p>
                <p class="line"></p>
                <p class="line"></p>
              </div>
            </div>
            <div class="overdue">
              <div class="total">
                <div class="total1">
                  <p>逾期金额</p>
                  <p>
                    <span class="num">0</span>
                    元
                  </p>
                </div>
                <div class="total2">
                  <p>逾期比例</p>
                  <p>
                    <span class="num">0</span>
                    %
                  </p>
                </div>
              </div>
              <div class="chart">
                <p class="title">本平台自2015年1月上线以来无逾期</p>
                <p class="line"></p>
                <p class="line"></p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CountUp from 'countup.js'
import { getHomeTotal, getHomeDetailItem, getRank } from '@/api/homepage'
import ColorLine from '@/components/color-line'
import NearSixMonth from '@/views/homepage/near-six-month'
import BScroll from 'better-scroll'
import InvestmentPie from '@/views/homepage/investment-pie'
import FinancingPie from '@/views/homepage/financing-pie'
export default {
  components: {
    ColorLine,
    NearSixMonth,
    InvestmentPie,
    FinancingPie,
  },
  data() {
    return {
      homeTotalData: [],
      homeDetailItem: [],
      rankList: [],
      numAnim: null,
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
        // 确保DOM元素完全加载后初始化
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.rankContent, {
            scrollY: true, // 允许垂直滚动
            click: true, // 允许点击
            scrollbar: {
              fade: false,
              interactive: true, // 1.8.0 新增
            },
            mouseWheel: {
              speed: 20,
              invert: false,
              easeTime: 300,
            },
          })
        })
      } else {
        this.scroll.refresh()
      }
    },
  },
  created() {
    // 获取头部hometotal
    getHomeTotal()
      .then((resp) => {
        this.homeTotalData = resp.data
        this.initCountUp()
      })
      .catch(() => {
        console.log('获取home-total出现异常')
      })
    // 获取 detailItem
    getHomeDetailItem()
      .then((resp) => {
        if (resp && resp.data) {
          this.homeDetailItem = resp.data.map((item) => {
            item.value = (item.value / 10000).toFixed(2)
            return item
          })
        }
      })
      .catch(() => {
        console.log('获取detailItem出现异常')
      })
    // 获取投资榜
    getRank()
      .then((resp) => {
        this.rankList = resp.data
        this._initScroll()
      })
      .catch(() => {
        console.log('获取rankList出现异常')
      })
  },
  mounted() {},
  beforeDestroy() {
    if (this.scroll) {
      this.scroll.destroy() // 销毁实例以避免内存泄漏
    }
  },
  updated() {
    // this.$nextTick(function() {
    //   this.initCountUp()
    // })
  },
}
</script>
<style scoped lang="scss">
.homepage-container {
  padding: 15px !important;
}

.home-total {
  width: 100%;
  height: 160px;
  border: 1px solid var(--next-border-color-light);
  border-radius: 4px;
  margin: 0 0 15px 0;
  .home-card-item {
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    padding: 15px 0;
    vertical-align: top;
    background-color: var(--next-color-white);
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
        font-size: 34px;
        color: #ffc107;
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
    height: 300px;
    background-color: var(--next-color-white);
    border: 1px solid var(--next-border-color-light);
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
    color: var(--next-color-white);
    .home-detail-item {
      flex: 0 0 48%;
      height: 145px;
      border: 1px solid #eee;
      background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3)) !important;
      cursor: pointer;
      border-radius: 4px;
    }
    .home-detail-item:hover {
      background-image: none !important;
    }
    .home-detail-item:nth-child(3),
    .home-detail-item:nth-child(4) {
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
    background-color: var(--next-color-white);
    border: 1px solid var(--next-border-color-light);
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
      .wrapper-user {
        margin: 0;
        list-style: none;
        padding-left: 0;
        .user-item {
          height: 50px;
          padding: 5px;
          .avatar {
            border: 1px solid #888;
            border-radius: 100px;
            vertical-align: bottom;
          }
          .user-info {
            display: inline-block;
            padding-left: 5px;
            .name {
              color: #999;
              font-size: 14px;
            }
            .value {
              color: red;
            }
          }
        }
      }
    }
  }
}
.home-part2 {
  margin-top: 15px;
  .financing-sprinkled {
    background-color: var(--next-color-white);
    border: 1px solid var(--next-border-color-light);
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
      .investment {
        height: 330px;
        width: 50%;
        .title {
          display: inherit;
          text-align: center;
          background: transparent;
          padding-top: 20px;
        }
        .detail {
          text-align: center;
          .detail-item {
            display: inline-block;
            width: 40%;
            margin: 5px;
            padding-left: 5px;
            border-left: 5px solid #ccc;
            color: #666;
          }
        }
      }
      .financing {
        height: 330px;
        width: 50%;
        .title {
          display: inherit;
          text-align: center;
          background: transparent;
          padding-top: 20px;
        }
        .detail {
          text-align: center;
          .detail-item {
            display: inline-block;
            width: 40%;
            margin: 5px;
            padding-left: 5px;
            border-left: 5px solid #ccc;
            color: #666;
          }
        }
      }
    }
  }
  .bad-debt {
    margin-left: 10px;
    background-color: var(--next-color-white);
    border: 1px solid var(--next-border-color-light);
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
      height: inherit;
      .bad {
        height: 50%;
        padding: 20px 15px;
        .total {
          display: inline-block;
          width: 30%;
          color: #666;
          vertical-align: top;
          .total1 {
            text-align: center;
            .num {
              font-size: 24px;
            }
          }
          .total2 {
            text-align: center;
            margin-top: 20px;
            .num {
              font-size: 24px;
            }
          }
        }
        .chart {
          display: inline-block;
          width: 68%;
          .title {
            background: none;
            border-bottom: 1px solid #ccc;
          }
          .line {
            border-bottom: 1px solid #ccc;
            padding-bottom: 30px;
            &:last-child {
              border-bottom-color: #000;
            }
          }
          &:after {
            content: '0';
            position: relative;
            font-size: 70px;
            left: 20px;
            top: -30px;
            color: #ddd;
            line-height: 0;
          }
        }
      }
      .overdue {
        padding: 20px 15px;
        height: 50%;
        .total {
          display: inline-block;
          width: 30%;
          color: #666;
          vertical-align: top;
          .total1 {
            text-align: center;
            .num {
              font-size: 24px;
            }
          }
          .total2 {
            text-align: center;
            margin-top: 20px;
            .num {
              font-size: 24px;
            }
          }
        }
        .chart {
          display: inline-block;
          width: 68%;
          .title {
            background: none;
            border-bottom: 1px solid #ccc;
          }
          .line {
            border-bottom: 1px solid #ccc;
            padding-bottom: 30px;
            &:last-child {
              border-bottom-color: #000;
            }
          }
          &:after {
            content: '0';
            position: relative;
            font-size: 70px;
            left: 20px;
            top: -30px;
            color: #ddd;
            line-height: 0;
          }
        }
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
.content ::v-deep .bscroll-vertical-scrollbar {
  z-index: 2 !important;
}
</style>
