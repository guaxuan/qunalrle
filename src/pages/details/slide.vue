<template>
  <div class="slide" @click="handleClick">
    <swiper :options="swiperOption" class="slide-container">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of urlList" :key="index" class="img-container">
        <img :src="item" class="img-item">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
  </div>
</template>

<script>
  export default {
    name: 'show',
    data () {
      return {
        urlList: [],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    props: {
      imgList: Array
    },
    methods: {
      handleClick () {
        this.$emit('touch')
      }
    },
    created () {
      this.urlList = this.imgList
      console.log(this.imgList)
    }
  }
</script>


<style lang="stylus" scoped>
.slide
  width 100%
  height 100%
  background-color #000
  position fixed
  top 0
  left 0
  z-index 999
  .slide-container
    height 100%
    .swiper-pagination
      color #fff
    .img-container
      display: flex
      align-items: center
      .img-item
        width 100%
</style>