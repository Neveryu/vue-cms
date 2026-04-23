<template>
  <div class="homepage-container">
    <el-row class="home-total">
      <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" class="home-card-item" v-for="(item, index) of homeTotalData" :key="'line-' + index">
        <div class="wrapper-item">
          <p class="title">{{ item.title }}</p>
          <p class="value digital-number" ref="countup">{{ item.value }}</p>
          <color-line :id="'main' + index" :color="item.color" :optionData="item.data" width="70%" height="70px"></color-line>
        </div>
      </el-col>
    </el-row>

    <el-row class="home-part1" :gutter="0">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <div class="near-six-month">
          <div class="title">
            <p class="title-value">{{ $t('home.transactionRecords') }}</p>
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
            <p class="title-value">{{ $t('home.investmentRanking') }}</p>
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
            <p class="title-value">{{ $t('home.investmentDistribution') }}</p>
          </div>
          <div class="content">
            <div class="investment">
              <span class="title">{{ $t('home.investmentAmount') }}</span>
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
            <div class="financing">
              <span class="title">{{ $t('home.financingTerm') }}</span>
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
        const countupEls = this.$refs.countup || []
        for (let i = 0; i < countupEls.length; i++) {
          const el = countupEls[i]
          const endValRaw = (this.homeTotalData && this.homeTotalData[i] && this.homeTotalData[i].value) || (el && el.innerText) || '0'
          const endVal = parseFloat(String(endValRaw).replace(/,/g, '')) || 0
          const decimals = 2
          const options = { useGrouping: true, separator: ',', decimal: '.' }
          this.numAnim = new CountUp(el, 0, endVal, decimals, 1.5, options)
          if (!this.numAnim.error) {
            this.numAnim.start()
          } else {
            console.error('CountUp error:', this.numAnim.error)
          }
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
  updated() {},
}
</script>
<style scoped lang="scss">
.homepage-container {
  padding: 15px !important;
}

.home-total {
  width: 100%;
  margin: 0 0 15px 0;

  /* 使用 flex 布局强制一行显示，使用 gap 控制卡片间距；项可收缩以避免出现横向滚动条 */
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;

  .el-col {
    /* 允许每列平分剩余空间并收缩，保证四卡始终在一行且自适应 */
    flex: 1 1 0%;
    min-width: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .home-card-item {
    min-height: 110px;
    padding: 12px;
    background-color: var(--next-bg-color);
    border-radius: 6px;
    box-sizing: border-box;
    border: 1px solid var(--next-divider);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    transition:
      box-shadow 0.2s ease,
      transform 0.12s ease;
    will-change: transform;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    }
    /* 通过父容器的 gap 控制间距，移除单个卡片的 margin 避免重复 */
    margin: 0;

    /* 顶部卡片：标题、数字、图表居中显示，数字增大并有跳动动画 */
    .wrapper-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
    }

    /* 顶部卡片的标题（居中、无左侧装饰），优化中文字样式 */
    .title {
      background: transparent;
      padding: 6px 0 4px;
      margin: 0;
      color: var(--next-text-color-regular);
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      letter-spacing: 0.3px;
      font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.2;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      display: block;
    }

    /* 动画数字样式：金色数值与响应式字号（略小） */
    .digital-number {
      font-size: 40px;
      font-weight: 700;
      color: var(--stat-number, #f5b041) !important;
      margin: 6px 0;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: keep-all;
    }

    @media (max-width: 1200px) {
      .digital-number {
        font-size: 34px;
      }
    }
    @media (max-width: 768px) {
      .digital-number {
        font-size: 28px;
      }
    }

    /* 微调图表位置 */
    color-line {
      margin-top: 8px;
      display: block;
    }
  }
}

.home-part1 {
  margin: 0 !important;

  .near-six-month {
    height: 300px;
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color-light);

    .title {
      background: var(--next-title-bg);
      padding: 10px 0;
      .title-value {
        margin-left: 4px;
        text-indent: 4px;
        color: var(--next-text-color-regular);
        &:before {
          display: inline-block;
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary, purple);
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
      border: 1px solid var(--next-border-color);
      background-image: linear-gradient(rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.04)) !important;
      cursor: pointer;
      border-radius: 4px;

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

      &:hover {
        background-image: none !important;
      }
    }

    .home-detail-item:nth-child(3),
    .home-detail-item:nth-child(4) {
      margin-top: 10px;
    }
  }

  .rank {
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color-light);

    .title {
      background: var(--next-title-bg);
      padding: 10px 0;
      .title-value {
        margin-left: 4px;
        text-indent: 4px;
        color: var(--next-text-color-regular);
        &:before {
          display: inline-block;
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary, purple);
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
            border: 1px solid var(--next-border-color);
            border-radius: 100px;
            vertical-align: bottom;
          }
          .user-info {
            display: inline-block;
            padding-left: 5px;
            .name {
              color: var(--next-text-color-placeholder);
              font-size: 14px;
            }
            .value {
              color: var(--primary, #409eff);
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
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color-light);

    .title {
      background: var(--next-title-bg);
      padding: 10px 0;
      .title-value {
        margin-left: 4px;
        text-indent: 4px;
        color: var(--next-text-color-regular);
        &:before {
          display: inline-block;
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary, purple);
          margin-right: 4px;
          border-radius: 4px;
          vertical-align: middle;
        }
      }
    }

    .content {
      display: inline-flex;
      width: 100%;

      .investment,
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
            border-left: 5px solid var(--next-divider);
            color: var(--next-text-color-regular);
          }
        }
      }
    }
  }

  .bad-debt {
    margin-left: 10px;
    background-color: var(--next-bg-color);
    border: 1px solid var(--next-border-color-light);

    .title {
      background: var(--next-title-bg);
      padding: 10px 0;
      .title-value {
        margin-left: 4px;
        text-indent: 4px;
        color: var(--next-text-color-regular);
        &:before {
          display: inline-block;
          content: '';
          width: 4px;
          height: 16px;
          background: var(--primary, purple);
          margin-right: 4px;
          border-radius: 4px;
          vertical-align: middle;
        }
      }
    }

    .content {
      height: inherit;

      .bad,
      .overdue {
        padding: 20px 15px;
        height: 50%;

        .total {
          display: inline-block;
          width: 30%;
          color: var(--next-text-color-regular);
          vertical-align: top;

          .total1,
          .total2 {
            text-align: center;
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
            border-bottom: 1px solid var(--next-divider);
          }
          .line {
            border-bottom: 1px solid var(--next-divider);
            padding-bottom: 30px;

            &:last-child {
              border-bottom-color: var(--next-divider);
            }
          }

          &:after {
            content: '0';
            position: relative;
            font-size: 70px;
            left: 20px;
            top: -30px;
            color: var(--next-decor);
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
