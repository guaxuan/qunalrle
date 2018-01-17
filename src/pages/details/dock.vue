<template>
  <div class="dock book-dock-container">
    <div class="book-info-container">
      <h5 class="book-info-title">
        {{title}}
      </h5>
      <div class="book-info-price">
        <span class="book-price">
          ¥
          <i class="current-price">{{priceNow}}</i>
        </span>
        /张 
        <em class="face-price">票面价:¥{{priceAgo}}</em>
      </div>
    </div>

    <div class="book-choice-container">
      <h6 class="book-date-title">
        价格日历
      </h6>
      <div class="book-date-item" @click="handleDateClick">
        <div class="book-date-select" @click="isactive = true" :class="{'date-active':isactive}">今天</div>
        <div class="book-date-select" :class="{'date-active':isactive}">明天</div>
        <div class="book-date-select" :class="{'date-active':isactive}">后天</div>
        <div class="book-date-select">其他</div>
      </div>
    </div>
    
    <div class="book-tip">需要在游玩前1天的23:59前预订</div>

    <div class="book-dock-close iconfont" @click="handleCloseClick">
      &#xe650;
    </div>

    <div class="book-btn-container">
      <button class="book-btn">立即预定</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dock',
    data () {
      return {
        title: '【上午场】故宫成人票+故宫全景手绘地图',
        priceNow: 50,
        priceAgo: 50,
        isactive: false
      }
    },
    methods: {
      handleDateClick (e) {

      },
      handleCloseClick () {
        this.$emit('close')
      }
    }
  }
</script>


<style lang="stylus" scoped>
.book-dock-container
  background #fff
  width 100%
  position fixed
  bottom 0
  left 0
  z-index 500
  .book-info-container
    margin 0 .2rem
    .book-info-title
      margin-right: .6rem
      padding .3rem 0 .1rem
      color #212121
      font-size .34rem
      line-height .4rem
    .book-info-price
      color #9e9e9e
      font-size .24rem
      line-height .48rem
      .book-price
        color: #ff9800;
        margin-right: .06rem;
        .current-price
          font-size .36rem
      .face-price
        text-decoration: line-through;
  .book-choice-container
    margin 0 .2rem
    margin-top .18rem
    .book-date-title
      color: #333
      font-size .26rem
      line-height .65rem
    .book-date-item
      display flex
      justify-content space-around
      .book-date-select
        box-sizing: border-box;
        width: 22.5%;
        height .86rem
        line-height .86rem
        text-align center
        border .02rem solid #bdbdbd
        background #fff
        border-radius .1rem
      .date-active
        border-color #00bcd4
        color #fff
        background #00bcd4
  .book-btn-container
    .book-btn
      width 100%
      border 0 none
      background #ff9800
      color #fff
      text-align center
      font-size .36rem
      line-height 1rem
  .book-tip
    margin 0 .2rem
    padding .14rem 0
    color #ff8300
    font-size .24rem
    line-height .36rem
  .book-dock-close
    position absolute
    right 0
    top 0
    width .88rem
    height 1rem
    line-height 1rem
    text-align center
    color #9e9e9e
    font-size .4rem
</style>