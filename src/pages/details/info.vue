<template>
  <div class="info">
    <div class="container ">
      <span class="ico-img iconfont">&#xe600;</span>
      <i class="adress">{{adress}}</i>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>

    <span class="border-container"></span>

    <div class="container">
      <span class="ico-img iconfont">&#xe608;</span>
      <i class="descript">{{des}}</i>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info',
    data () {
      return {
        adress: '北京市东城区景山前街4号',
        des: '查看景点简介及开放时间'
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .info
    position relative
    background #fff
    margin-top  -.06rem
    border-radius .06rem .06rem 0 0
    padding .1rem .20rem 0
    .container
      font-size .26rem
      color #000
      line-height .87rem
      .ico-img
        font-size .22rem
        color #eee
        float left
        margin-right .20rem
      .right-btn
        font-size .28rem
        float right
        color #ccc
    .border-container
      display block
      border-bottom .01rem solid #f5f5f5 
</style>