<template>
  <div class="">
    <el-upload
      class="upload-demo"
      drag
      action=""
      :auto-upload="false"
      :limit="3"
      :multiple="false"
      accept=".xlsx, .xls"
      :on-change="handleFileChange"
      :on-preview="handleFilePreview"
      list-type="text">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>

    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      <el-table-column v-for='item of tableHeader' :prop="item" :label="item" :key='item.id'>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import XLSX from 'xlsx'
  export default {
    data() {
      return {
        tableData: [],
        tableHeader: []
      }
    },
    methods: {
      handleFilePreview(f) {
        this.handleFileChange(f)
      },
      handleFileChange(f, fileList) {
        this.readerData(f.raw)
      },
      readerData(file) {
        const reader = new FileReader()
        reader.onload = e => {
          let binary = ''
          const data = e.target.result
          const bytes = new Uint8Array(data)
          const length = bytes.byteLength
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          const workbook = XLSX.read(binary, { type: 'binary' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          // const fixedData = this.fixdata(data)
          // const workbook = XLSX.read(btoa(fixedData), { type: 'base64' })

          this.generateDate({ header, results })
        }
        reader.readAsArrayBuffer(file)
      },
      generateDate({ header, results }) {
        this.tableHeader = header
        this.tableData = results
      },
      fixdata(data) {
        let o = ''
        let l = 0
        const w = 10240
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
        return o
      },
      getHeaderRow(sheet) {
        const headers = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C
        const R = range.s.r /* start in the first row */
        for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
          var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })] /* find the cell in the first row */
          var hdr = 'UNKNOWN ' + C // <-- replace with your desired default
          if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          headers.push(hdr)
        }
        return headers
      }
    }
  }
</script>

<style scoped lang="stylus">
  .upload-demo {
    text-align: center;
  }
  .upload-demo /deep/ .el-upload--text {
    width: 600px;
    margin: 0 auto;
  }
  .upload-demo /deep/ .el-upload--picture {
    width: 600px;
    margin: 0 auto;
  }
  .upload-demo /deep/ .el-upload-dragger {
    width: 100%;
  }
</style>