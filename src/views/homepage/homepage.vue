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
    <el-row class="home-part2" :gutter="0">
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
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
  import CountUp from 'countup.js'
  import {getHomeTotal} from '@/api/homepage'
  import ColorLine from '@/components/color-line'
  import NearSixMonth from '@/views/homepage/near-six-month'
  export default {
    components: {
      ColorLine,
      NearSixMonth
    },
    data() {
      return {
        homeTotalData: {},
        numAnim: null
      }
    },
    methods: {
      initCountUp() {
        let countupLength = this.$refs.countup.length
        let i = 0
        for (i; i < countupLength; i++) {
          this.numAnim = new CountUp(this.$refs.countup[i], 0, this.$refs.countup[i].innerText, 2, 1.5)
          this.numAnim.start()
        }
      }
    },
    created() {
      getHomeTotal().then((resp) => {
        this.homeTotalData = resp.data
      }).catch(() => {
        console.log('获取home-total出现异常')
      })
    },
    mounted() {
      // console.log(this.$refs['near-six-month-chart'])
    },
    updated() {
      this.$nextTick(function() {
        this.initCountUp()
      })
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
    margin: 0 0 5px 0;
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
  .home-part2 {
    margin: 0 !important;
    .near-six-month {
      border: 1px solid #000;
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
        height: 400px;
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