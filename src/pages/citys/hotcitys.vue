<template>
  <div class="hots">
    <h2 class="h-h2">热门城市</h2>
    <div class="h-btm">
      <div class="hb-items" v-for="(item, index) of list"  :class="[{ active: itemIndex == index}]" @click="handleAddClass(index)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-hotcitys',
    props: {
      list: Array
    },
    data () {
      return {
        itemIndex: Number
      }
    },
    methods: {
      handleAddClass (index) {
        this.itemIndex = index
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .hots
    .h-h2
      height .56rem
      padding-left .3rem
      border-bottom 1px solid $borColor
      border-top 1px solid $borColor
      line-height .52rem
      background-color #f5f5f5
      color #5b5b5b
    .h-btm
      display flex
      flex-wrap wrap
      align-content space-between
      padding .24rem 0 .04rem .30rem
      .hb-items
        height .6rem
        width 2.07rem
        margin-right .2rem
        border 1px solid $borColor
        border-radius .05rem
        margin-bottom .2rem
        line-height .6rem
        text-align center
        color: #252525
      .active
        border-color $bgColor
        color: $bgColor

</style>
