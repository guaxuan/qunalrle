<template>
  <div class="info">

    <div class="container adress-wrap">
      <span class="ico-img iconfont">&#xe600;</span>
      <i class="adress">{{info.adress}}</i>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>

    <span class="border-container"></span>

    <div class="container">
      <span class="ico-img iconfont">&#xe608;</span>
      <i class="descript">{{des}}</i>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>

    <div class="container grade-wrap">
      <span class="ico-img iconfont">&#xe608;</span>
      <i class="stars iconfont">&#xe642;&#xe642;&#xe642;&#xe642;&#xe642;</i>
      <em class="grades">{{grades + '分'}}</em>
      <span class="comment">{{parseInt(info.comment) + '评论'}}</span>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>

    <div class="container tips-wrap">
      <span class="ico-img iconfont">&#xe60a;</span>
      <i class="msg">{{info.tips}}</i>
      <span class="right-btn iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'info',
    data () {
      return {
        des: '查看景点简介及开放时间'
      }
    },
    props: {
      info: Object
    },
    computed: {
      grades () {
        return parseInt(this.info.grades * 10) / 10
      }
    }
  }
</script>


<style lang="stylus" scoped>
  .info
    position relative
    margin-top  -.06rem
    border-radius .06rem .06rem 0 0
    padding-top .1rem
    .container
      font-size .28rem
      color #000
      line-height .88rem
      margin-bottom .2rem
      background #fff
      padding-left .20rem
      padding-right .20rem
      .ico-img
        font-size .22rem
        color #9e9e9e
        float left
        margin-right .20rem
      .right-btn
        font-size .28rem
        float right
        color #ccc
    .border-container
      display block
      border-bottom .01rem solid #f5f5f5
    .adress-wrap
      margin-bottom 0 
    .grade-wrap
      height .80rem
      .stars
        color #ffb436
      .grades
        color #ff8300
      .comment
        color #9e9e9e
    .tips-wrap
      background #faeee0
      color #f1441a
      .ico-img
        color #f1441a
        font-size .28rem
        margin-right .12rem
</style>