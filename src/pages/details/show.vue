<template>
  <div class="show">
    <div class="show-img">
      <span class="back iconfont">&#xe624;</span>
      <img class="item" :src="show.src" @click="handleShowClick"/>
      <span class="title">{{show.title}}</span>
      <span class="count iconfont">
        <i class="iconfont">&#xe608;</i>
        <em>{{parseInt(show.count)}}</em>
      </span>
    </div>
    <ShowSlide :imgList="imgList" 
                v-if="isShow" 
                @touch="handleTouch">
    </ShowSlide>
  </div>
</template>

<script>
  import ShowSlide from './slide'
  import axios from 'axios'
  export default {
    name: 'show',
    data () {
      return {
        imgList: [],
        isShow: false
      }
    },
    props: {
      show: Object,
      imgId: String
    },
    components: {
      ShowSlide
    },
    methods: {
      handleShowClick () {
        axios.get('/api/slide.json')
          .then(this.handleGetSlideSucc.bind(this))
          .catch(this.handleGetSlideErr.bind(this))
      },
      handleGetSlideSucc (res) {
        this.isShow = true
        this.imgList = res.data[this.imgId]
      },
      handleGetSlideErr () {
        console.log('Error')
      },
      handleTouch () {
        this.isShow = false
      }
    }
  }
</script>


<style lang="stylus" scoped>
.show-img
  overflow hidden
  height 0
  padding-bottom 55%
  position relative
  .item
    width 100%
  .back
    display block
    position absolute
    width .72rem
    height .72rem
    border-radius 100%
    background rgba(0,0,0,.3)
    text-align center
    line-height .72rem
    color #fff
    font-weight bold
    margin .1rem
  .title
    position absolute
    left .2rem
    bottom .22rem
    color #fff
    font-size .3rem
  .count
    display block
    position absolute
    width 1.2rem
    height .4rem
    color #ccc
    font-size .17rem !important
    text-align center
    line-height .4rem
    border-radius .2rem
    background rgba(0,0,0,.5)
    right .2rem
    bottom .22rem
</style>