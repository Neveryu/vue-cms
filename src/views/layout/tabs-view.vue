<template>
  <div class="tabs-container">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一六五三九', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-container {
    padding: 5px;
    .el-tag {
      margin: 0 3px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>