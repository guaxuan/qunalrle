<template>
  <div class="header">
    <div class="h-top">
      <div class="ht-con">
        <div class="ht-left active">国内</div>
        <div class="ht-right">海外</div>
      </div>
    </div>
    <div class="h-btm">
      <input type="text"
             tabindex="1"
             class="hb-ipt"
             placeholder="请输入城市或拼音"
             @keyup="handleUp"
      >
    </div>
    <input-mode
      class="ipt-mode"
      :val="inputvalue"
      :list="list"
      v-show="show"
    ></input-mode>
  </div>
</template>

<script>
  import InputMode from './inputmode'
  export default {
    name: 'city-header',
    props: ['list'],
    components: {
      // 直接动态获取数据不需要 （vue 父组件输入的内容怎么实时传递给子组件）
      InputMode
    },
    data () {
      return {
        inputvalue: '',
        show: false

      }
    },
    methods: {
      handleUp (e) {
        this.inputvalue = e.target.value
        if (e.target.value !== '') {
          this.show = true
        } else {
          this.show = false
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    position relative
    height 1.45rem
    padding-top .15rem
    background-color $bgColor
    .h-top
      display flex
      height .6rem
      justify-content center
      .ht-con
        display flex
        width: 4.1rem
        line-height .6rem
        text-align center
        font-size .26rem
        border 1px solid $fontColor
        border-radius .05rem
        color $fontColor
        .active
          background-color $fontColor
          color $bgColor
        .ht-left
          width: 2.06rem
          border-right .02rem solid $fontColor
        .ht-right
          flex 1
    .h-btm
      overflow hidden
      height .62rem
      margin .13rem .1rem .1rem .2rem
      border-radius .05rem
      background-color $fontColor
      .hb-ipt
        float left
        width 100%
        height 100%
        padding-left .15rem
        border 0
        color #a9a9a9


    .ipt-mode
      /*display none*/
      position absolute
      top 1.6rem
      width 100%
</style>
