<template>
  <div class="tickets">
    <div class="ticket-type" v-for="(item, keys) of ticket">

      <h3 class="ticket-type-title">
        <span class="title-bg"></span>
        {{item.type}}
      </h3>
      <div class="ticket-type-info" 
            v-for="(list, index) of item.info" 
            v-show="index < 2"
            :class="{active: ifKeys === keys}">
        <h4 class="ticket-type-name">
          {{list.name}}
          <span class="subname">{{list.subname}}</span>
        </h4>
        <div class="ticket-type-price">
          ¥
          <em class="price">{{list.price}}</em>
          起
        </div>
        <div class="ticket-type-extend iconfont">&#xe62d;</div>
      </div>
      <div class="ticket-type-others iconfont"
            v-if="item.info.length > 2"
            :class="{keys: ifKeys === keys}"
            @click="handleOthersClick(keys)">
        查看剩余产品 &#xe62d;
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tickets',
    data () {
      return {
        isActive: '',
        isKeys: '',
        ifKeys: Number
      }
    },
    props: {
      ticket: Array
    },
    computed: {
    },
    methods: {
      handleOthersClick (keys) {
        this.isKeys = true
        this.isActive = true // 有点挫
        this.ifKeys = keys
      }
    }
  }
</script>


<style lang="stylus" scoped>
.ticket-type
  margin-top .2rem
  .ticket-type-title
    position relative
    height .88rem
    background #fff
    padding 0 .2rem
    margin-bottom .02rem
    font-size .32rem
    line-height .88rem
    text-indent .4rem
    .title-bg
      display inline-block
      position absolute
      width .36rem
      height .36rem
      top .26rem
      left .2rem
      background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
      margin-right .1rem
      background-size .4rem 3rem
  .ticket-type-info
    position relative
    background #fff
    padding .24rem .2rem
    margin-bottom .02rem
    .ticket-type-name
      color: #333
      font-size .3rem
      line-height .48rem
      margin-right 1.8rem
      .subname
        font-size .24rem
        color #888
        line-height .32rem
        margin .1rem 0 .14rem .1rem;
        margin-right 1.84rem
    .ticket-type-price
      right .46rem
      margin-top -.28rem
      color #ff9800
      font-size .24rem
      overflow hidden
      position absolute
      top 50%
      height .4rem
      line-height .4rem
      .price
        font-size .36rem
    .ticket-type-extend
      right .2rem
      margin-top -.22rem
      color #bbb
      font-size .24rem
      overflow hidden
      position absolute
      top 50%
      height .4rem
      line-height .4rem
  .ticket-type-others
    height .8rem
    background #fff
    color #616161
    line-height .8rem
    text-align center
    font-size .28rem
  .active
    display block !important
  .keys
    display none
</style>