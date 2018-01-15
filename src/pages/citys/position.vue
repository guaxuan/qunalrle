<template>
  <div class="seat">
    <h2 class="s-h2">您的位置</h2>
    <div class="s-btm">
      <div class="sb-item">北京</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-position'
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .seat
    .s-h2
      height .52rem
      padding-left .3rem
      line-height .52rem
      background-color #f5f5f5
      color: #5b5b5b
    .s-btm
      display flex
      height 1.1rem
      padding .24rem .30rem
      border-top 1px solid $borColor
      box-sizing: border-box
      .sb-item
        height .6rem
        width 2.07rem
        border 1px solid $bgColor
        border-radius .05rem
        line-height .6rem
        text-align center
        color: $bgColor



</style>
