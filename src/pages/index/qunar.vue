<template>
  <div class="qunar">
    <div class="qunar-sunday">周末去哪儿</div>
    <div class="qunar-box" v-for="item of list" :key="item.id">
      <a href="#">
        <img :src="item.imgUrl" class="qunar-img">
      </a>
      <h2 class="qunar-h">{{item.title}}</h2>
      <p class="qunar-p">{{item.content}}</p>
    </div>
    <div class="ticket">
      <span class="ticket-span iconfont">&#xe810; 票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index-qunar',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .qunar-sunday
    height: .84rem
    line-height: .84rem
    background: #f5f5f5
    padding-left: .28rem
    font-size: .32rem
    color:#030303
  .qunar-box
    height: 4.08rem
    border-bottom: .1rem solid #f7f4f6
    .qunar-img
      width: 100%
      height: 2.8rem
      background: pink
    .qunar-h
      font-size: .28rem
      color: #444
      margin: .24rem 0 .2rem .2rem
    .qunar-p
      font-size: .24rem
      color: #737373
      margin-left: .2rem
  .ticket
    height: .64rem
    line-height: .64rem
    padding-left: .12rem
    font-size: .24rem
    color: #363636
    .ticket-span
      font-weight: 900
</style>