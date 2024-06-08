<template>
  <div>
    <el-table
      :data="tableData"
      :max-height="maxHeight"
      show-summary
      :summary-method="getSummaries"
      style="width: 100%">
      <el-table-column align="center" label="发起人">
        <el-table-column type="selection" width="60" align="center">
        </el-table-column>
        <el-table-column property="name" align="center" label="发起人" show-overflow-tooltip>
        </el-table-column>
      </el-table-column>
      
      <el-table-column align="center" label="发起任务">
        <el-table-column property="total" align="center" label="任务发起" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="passcount" align="center" label="审核通过" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="compRatio" align="center" label="任务完成率" width="180">
          <template slot-scope="scope">
            <span>{{scope.row.compRatio}} - ({{(scope.row.passcount * 100 / scope.row.total).toFixed(2)}}%)</span>
          </template>
        </el-table-column>
      </el-table-column>
      
      <el-table-column align="center" label="任务办理">
        <el-table-column property="notdo" align="center" label="未开始" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="doing" align="center" label="办理中" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="voertime" align="center" label="已过期" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="getover" align="center" label="已完成" show-overflow-tooltip>
        </el-table-column>
        <el-table-column property="implementRatio" align="center" label="任务执行率" width="180">
            <template slot-scope="scope">
              <span>{{scope.row.implementRatio}} - ({{(scope.row.getover * 100 / scope.row.total).toFixed(2)}}%)</span>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { getMergeTable } from '@/api/excel'
export default {
  data() {
    return {
      tableData: []
    }
  },
  computed: {
    maxHeight() {
      return `${window.screen.availHeight - 220}px`
    }
  },
  methods: {
    getData() {
      getMergeTable().then(res => {
        console.log(res)
        this.tableData = res.data
      })
    },
    // 合计
    getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if(index === 0) {
          sums[index] = ''
          return
        }
        if(index === 1) {
          sums[index] = '总计'
          return
        }
        if(index === 4 || index === 9) {
          const values = data.map(item => item[column.property])
          console.log(values)
          // 分子
          let s1 = values.reduce((prev, curr) => {
            const value = Number(curr.split('/')[0])
            if (!isNaN(value)) {
              return prev + value
            } else {
              return prev
            }
          }, 0)
          // 分母
          let s2 = values.reduce((prev, curr) => {
            const value = Number(curr.split('/')[1])
            if (!isNaN(value)) {
              return prev + value
            } else {
              return prev
            }
          }, 0)
          // 百分比
          let s3 = `${(s1 * 100 / s2).toFixed(2)}%`
          sums[index] = `${s1}/${s2} - (${s3})`
          sums[index] += ''
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ''
        } else {
          sums[index] = 'N/A'
        }
      })
      return sums
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style scoped>
  
</style>