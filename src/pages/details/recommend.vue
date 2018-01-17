<template>
  <div class="recommend">

    <div class="recommend-head">
      <span class="ico-img iconfont">&#xe75d;</span>
      <i class="msg">去哪儿推荐</i>
    </div>
    
    <div class="recommend-container">
      <div class="recommend-left">
        <h4 class="recommend-title">
          【上午场】故宫成人票+故宫全景手绘地图
        </h4>
        <ul class="recommend-tips">
          <li class="recommend-tips-item">可订明日</li>
          <li class="recommend-tips-item">不可退</li>
        </ul>
      </div>
      <div class="recommend-right">
        <span class="recommend-order-price">
          ¥
          <i>50</i>
        </span>
        <button class="recommend-order-btn" @click="handleOrderClick">预定</button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'tickets',
    methods: {
      handleOrderClick () {
        this.$emit('order')
      }
    }
  }
</script>


<style lang="stylus" scoped>
.recommend-head
  line-height .88rem
  background #fff
  padding 0 .20rem
  font-size .28rem
  color #333
  .ico-img
    color #ed7773
    font-size .44rem
.recommend-container
  display flex
  padding .2rem .2rem .24rem .2rem
  overflow hidden
  text-overflow ellipsis
  background #fff
  border-top 1px solid #dadada
  .recommend-left
    flex 2.92
    border-right 1px solid #dadada
    .recommend-title
      margin-right .1rem
      color #333
      font-size .3rem
      line-height .52rem
    .recommend-tips
      display flex
      padding .04rem 0 .08rem
      .recommend-tips-item
        margin-right .24rem
        color #616161
        font-size .24rem
        line-height .32rem
        white-space nowrap
  .recommend-right
    flex 1
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding-left .2rem
    .recommend-order-price
      color #ff9800
      width 100%
      text-align center
    .recommend-order-btn
      background #ff9800
      out-line none
      width 100%
      color #fff
      height .6rem
      font-size .28rem
      line-height .6rem
      border 0
      text-align center
      cursor pointer
      border-radius .06rem
</style>