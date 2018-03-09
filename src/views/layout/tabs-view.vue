<template>
  <div class="tabs-container">
    <router-link v-for="(tag, index) in visitedTabsView" to="/home" :key="index">
      <el-tag
        closable
        :type="tag.type">
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data() {
      return {}
    },
    created() {
      this.addTabsView()
    },
    computed: {
      ...mapGetters([
        'visitedTabsView'
      ])
    },
    methods: {
      ...mapActions([
        'addVisitedTabsView'
      ]),
      addTabsView() {
        const route = this.generateRoute()
        if (!route) {
          return false
        }
        this.addVisitedTabsView(this.generateRoute())
      },
      generateRoute() {
        if (this.$route.name) {
          return this.$route
        }
        return false
      }
    },
    watch: {
      $route() {
        // console.log(this.$route)
        this.addTabsView()
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabs-container {
    padding: 5px;
    border-bottom: 1px solid #dfdfdf;
    .el-tag {
      margin: 0 3px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>