<template>
  <div class="introduction">
    {{$t('author.name')}}：
    <ul>
      <li>{{$t('introduction.item1')}}</li>
      <li>{{$t('introduction.item2')}}</li>
      <li>{{$t('introduction.item3')}}</li>
      <li>{{$t('introduction.item4.title')}}</li>
        <ul>
          <li>{{$t('introduction.item4.contents[0]')}}</li>
          <li>{{$t('introduction.item4.contents[1]')}}</li>
        </ul>
      <li>{{$t('introduction.item5')}}</li>
      <li>{{$t('introduction.item6')}}</li>
    </ul>

    <div class="mid-center">
      <div class="stack-wrapper">
        <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
      </div>
      <div class="controls">
        <button title="不喜欢" @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
        <button title="喜欢" @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
      </div>
    </div>
  </div>
</template>
<script>
import { getImage } from '@/api/introduction'
import Stack from '@/components/tantan/stack'
export default {
  name: 'introduction',
  components: {
    Stack
  },
  data() {
    return {
      count: 0,
      pageSize: 30,
      isDev: null,
      imgUrl: [],
      someList: [],
      stackinit: {
        visible: 3
      }
    }
  },
  watch: {
    count(newVal, oldVal) {
      if (newVal >= 30) {
        this.count = 0
        this.getImageList()
      }
    }
  },
  methods: {
    prev () {
      this.$refs.stack.$emit('prev')
      this.count++
    },
    next () {
      this.$refs.stack.$emit('next')
      this.count++
    },
    getImageList() {
      let params = {
        limit: this.pageSize,
        skip: 180,
        adult: false,
        first: 0,
        order: 'hot'
      }
      getImage(params).then(resp => {
        let resultData
        resultData = resp.data.res.vertical
        resultData.forEach((v, i, _this) => {
          // v.images.large
          this.imgUrl.push({
            html: `<img src='${v.thumb}'>`
          })
        })
      })
    }
  },
  created() {
    this.isDev = process.env.NODE_ENV === 'development'
    this.getImageList()
  },
  mounted() {
    this.$nextTick(() => {
      this.someList = this.imgUrl
    })
  }
}
</script>
<style scoped lang="stylus">
.introduction {
  padding-bottom: 300px
  overflow: hidden
  font-size: 16px
  color: #333
  line-height: 1.2
}
.stack-wrapper {
  margin: 0 auto
  position: relative
  z-index: 1
  width: 320px
  height: 420px
  padding: 0
  list-style: none
  pointer-events: none
}
.controls{
  position: relative
  width: 200px
  text-align: center
  display: flex/*Flex布局*/
  display: -webkit-flex /* Safari */
  justify-content: space-around
  margin: 0 auto
  margin-top: 50px
}
.controls .button {
  border: none
  background: none
  position: relative
  display: inline-block
  cursor: pointer
  font-size: 16px
  width: 50px
  height: 50px
  z-index: 100
  -webkit-tap-highlight-color: rgba(0,0,0,0)
  border-radius: 50%
  background: #fff
  outline: none
}
.button .next{
  display: inline-block
  width: 10px
  height:5px
  background: rgb(129,212,125)
  line-height: 0
  font-size:0
  vertical-align: middle
  -webkit-transform: rotate(45deg)
  left: -5px
  top: 2px
  position: relative
}
.button .next:after {
  content:'/'
  display:block
  width: 20px
  height:5px
  background: rgb(129,212,125)
  -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%)
}
.button .prev {
  display: inline-block
  width: 20px
  height:5px
  background: rgb(230,104,104)
  line-height: 0
  font-size:0
  vertical-align: middle
  -webkit-transform: rotate(45deg)
}
.button .prev:after {
  content:'/'
  display:block
  width: 20px
  height:5px
  background: rgb(230,104,104)
  -webkit-transform: rotate(-90deg)
}
.controls .text-hidden {
  position: absolute
  overflow: hidden
  width: 0
  height: 0
  color: transparent
  display: block
}
</style>