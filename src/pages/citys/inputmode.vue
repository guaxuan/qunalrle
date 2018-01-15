<template>
  <ul class="lists">
    <li class="l-item" v-for="item of filterlist">{{item.name}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'inputmode',
    props: ['val', 'list'],
    data () {
      return {
        vals: ''
      }
    },
    computed: {
      filterlist () {
        let arr = this.list.filter((val) => {
          const count = this.val.length
          let str = ''
          if (count !== 0) {
            if (/^[\u4e00-\u9fa5]+$/i.test(this.val)) {
              str = val.name
            } else {
              str = val.pinyin.toLowerCase()
            }
            if (str.slice(0, count) === this.val) {
              return val
            }
          }
        })
        if (this.val.length !== 0 && arr.length === 0) {
          arr.push({
            name: '未匹配到城市'
          })
        }
        return arr
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .lists
    width 100vw
    height 100vh
    border-top .1rem solid #f9f9f9
    background-color #fff
    .l-item
      height .76rem
      padding-left .3rem
      border-bottom 1px solid $borColor
      line-height .76rem
</style>
