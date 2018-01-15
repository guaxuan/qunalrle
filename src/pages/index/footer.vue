<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="footer-ul">
        <li><a href="#" class="fly"><span></span>机票</a></li>
        <li><a href="#" class="fly"><span></span>酒店</a></li>
        <li><a href="#" class="fly"><span></span>公寓</a></li>
        <li>|</li>
        <li><a href="#" class="fly"><span></span>更多</a></li>
      </ul>
      <ul class="footer-ul2">
        <li><a href="#" class="footer-li">登录</a></li>
        <li><a href="#" class="footer-li">我的订单</a></li>
        <li><a href="#" class="footer-li">最近浏览</a></li>
        <li><a href="#" class="footer-li">关于我们</a></li>
      </ul>
    </div>
    <div class="footer-bot">
      <ul class="footer-ul3">
        <li>触屏版</li>
        <li><a href="#">电脑版</a></li>
      </ul>
      <p class="footer-p">Quanr 京ICP备05021087意见反馈</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-footer',
    list: Array
  }
</script>

<style lang="stylus" scoped>
  .footer
    height: 2.8rem
    background: #f3f3f3
    .footer-top
      height: 1.52rem
      border-bottom: .08rem solid #d8d8d8
      .footer-ul
        display: flex
        height: .88rem
        padding: 0 .8rem
        justify-content: space-between
        align-items: center
        .fly
          color: #aaa
          border-bottom: .04rem solid #aaa
      .footer-ul2
        display: flex
        height: .64rem
        align-items: center
        .footer-li
          margin-left: .4rem
    .footer-bot
      height: 1.2rem
      .footer-ul3
        display: flex
        width: 2.4rem
        height: .7rem
        margin:0 auto
        justify-content: space-between
        align-items: center
      .footer-p
        text-align: center
        color: #a6a6a6
</style>