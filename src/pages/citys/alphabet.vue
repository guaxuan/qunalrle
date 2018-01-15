<template>
  <div class="container">
    <ul class="c-list">
      <li
        class="cl-item "
        v-for="(item, index) of alphabet"
        @click="handleScrollAlp"
        :class="[{active: isActive === index}]"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'city-alphabet',
    props: ['returnAlp'],
    data () {
      return {
        alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        keys: '',
        isActive: Number
      }
    },
    methods: {
      handleScrollAlp (e) {
        this.keys = e.target.innerText
        this.$emit('change', e.target.innerText)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .container
    position fixed
    right 0
    top 50%
    width .36rem
    height 9.36rem
    margin-top -4.5rem
    font-size 14px
    .c-list
      .cl-item
        line-height .36rem
        text-align center
        color $bgColor
      .active
        background-color: rgba(200,220,200,.5)


</style>
