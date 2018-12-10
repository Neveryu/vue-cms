<template>
  <div class="profile-wrapper">
    <el-row>
      <el-col :span="8">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="avatar" class="image">
          <div style="padding: 14px;">
            <span>{{name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        currentDate: ''
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar'
      ])
    },
    created() {
      this.currentDate = new Date()
    }
  }
</script>