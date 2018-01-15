<template>
  <div class="sights">
    <div class="sights-buy">热销推荐</div>
    <div class="sights-gu" v-for="item of list" :key="item.id">
      <a href="#">
        <img :src="item.imgUrl" class="sights-img">
      </a>
      <div class="sights-right">
        <h2 class="sights-h">{{item.title}}</h2>
        <p class="sights-p">{{item.content}}</p>
        <p class="sights-p2">￥
          <span class="sights-span">{{item.num}}</span>
          <i class="sights-i">起</i>
        </p>
      </div>
    </div>
    <div class="sights-prod"><a href="#">查看所有产品</a></div>
  </div>
</template>

<script>
  export default {
    name: 'index-sights',
    props: {
      list: Array
    }
  }
</script>

<style lang = "stylus" scoped>
  .sights-buy
    height: .8rem
    line-height: .8rem
    background: #f5f5f5
    padding-left: .24rem
  .sights-gu
    display: flex
    align-items: center
    height: 1.92rem
    border-bottom: .04rem solid #efefef
    .sights-img
      width: 1.5rem
      height: 1.5rem
      margin-left: .24rem
    .sights-right
      padding-left: .2rem
      .sights-h
        font-size: .32rem
        color: #202020
      .sights-p
        margin: .2rem 0 .3rem
        color: #a5a5a5
      .sights-p2
        font-size: .24rem
        color: #f27509
        .sights-span
          font-size: .3rem
        .sights-i
          color: #a5a5a5
  .sights-prod
    height: .88rem
    line-height: .88rem
    text-align: center
    font-size: .28rem
</style>