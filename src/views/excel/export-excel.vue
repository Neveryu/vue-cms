<template>
  <div class="">
    <el-input style="width: 350px;" v-model="filename" autosize prefix-icon="el-icon-document" placeholder="请输入文件名（默认excel-list）"></el-input>
    <el-button style='margin:0 0 20px 20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">export excel</el-button>
    <div class="fresh">
      <el-progress class="progress" :text-inside="true" :stroke-width="18" :percentage="percentageNum" status="success"></el-progress>
      <span>{{updateTime}}</span>
      <el-button v-show="refresh" class="timer" icon="el-icon-refresh" type="text" @click="updateData">更新数据</el-button>
      <el-button v-show="!refresh" class="timer" icon="el-icon-refresh" type="text" disabled>更新数据</el-button>
    </div>
    <!-- <el-button class="timer" icon="el-icon-time" type="text">加载中</el-button> -->

    <el-table
      v-loading="tableDataLoading"
      :data="tableData"
      style="width: 100%"
      height="700">
      <el-table-column
        fixed
        prop="movieName"
        label="影片"
        width="200">
      </el-table-column>
      <el-table-column
        prop="attribute[1].attrValue"
        label="上映天数"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[2].attrValue"
        label="累计票房"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[3].attrValue"
        label="实时票房"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[4].attrValue"
        label="票房占比"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[5].attrValue"
        label="排片占比"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[6].attrValue"
        label="上座率"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[7].attrValue"
        label="排座占比"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[8].attrValue"
        label="场次"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[9].attrValue"
        label="人次"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[10].attrValue"
        label="场均人次"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[11].attrValue"
        label="场均收入"
        width="120">
      </el-table-column>
      <el-table-column
        prop="attribute[12].attrValue"
        label="平均票价"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getTable } from '@/api/excel'
  export default {
    data() {
      return {
        isDev: null,
        downloadLoading: false,
        tableDataLoading: true,
        tableData: [],
        filename: '',
        autoWidth: true,
        refresh: true,
        percentageNum: 100,
        timer: 0,
        updateTime: ''
      }
    },
    methods: {
      _getTable() {
        getTable().then(resp => {
          if(this.isDev) {
            let movieData = resp.data.real.data.detail
            this.updateTime = resp.data.real.data.total.message
            this.formatMovieData(movieData)
            this.tableData = movieData
            this.tableDataLoading = false
          } else {
            resp.data = JSON.parse(resp.data)
            let movieData = resp.data.real.data.detail
            this.updateTime = resp.data.real.data.total.message
            this.formatMovieData(movieData)
            this.tableData = movieData
            this.tableDataLoading = false
          }
        })
      },
      updateData() {
        this.refresh = false
        this.percentageNum = 0
        this.timer = window.setInterval(() => {
          if (this.percentageNum < 100) {
            this.percentageNum += 1
          } else {
            this.percentageNum = 100
            this.refresh = true
            window.clearInterval(this.timer)
          }
        }, 100)
        this.tableDataLoading = true
        this._getTable()
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['影片', '上映天数', '累计票房', '实时票房', '票房占比', '排片占比', '上座率', '排座占比', '场次', '人次', '场均人次', '场均收入', '平均票价']
          const filterVal = ['影片', '上映天数', '累计票房', '实时票房', '票房占比', '排片占比', '上座率', '排座占比', '场次', '人次', '场均人次', '场均收入', '平均票价']
          const list = this.tableData
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.filename || 'excel-list',
            autoWidth: this.autoWidth
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === '影片') {
            return v['movieName']
          } else {
            return v[j]
          }
        }))
      },
      formatMovieData(srcData) {
        srcData.forEach(item => {
          Object.values(item.attribute).forEach((v, i, t) => {
            // console.log(v)
            item[v.attrName] = v.attrValue
          })
        })
      }
    },
    created() {
      this.isDev = process.env.NODE_ENV === 'development'
      this.tableDataLoading = true
      this._getTable()
    }
  }
</script>

<style scoped lang="stylus">
  .fresh
    float right
    width 350px
    text-align right
    padding-right 20px
</style>