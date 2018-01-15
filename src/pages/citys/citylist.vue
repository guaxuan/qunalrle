<template>
  <div class="citylist">
    <div class="cl-con" v-for="alps of alplist">
      <h2 class="c-h2 js-alphabet">{{alps.alp}}</h2>
      <div class="c-list" v-for="item of alps.list">
        <div class="cl-item">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'citylist',
    props: {
      list: Array,
      alp: String
    },
    data () {
      return {
        newBlockHeight: []
      }
    },
    computed: {
      alplist () {
        const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const itemlist = []
        for (var i = 0; i < str.length; i++) {
          var obj = {
            list: []
          }
          obj.alp = str[i]
          this.list.forEach((val, index) => {
            var alp = val.pinyin.slice(0, 1)
            if (str[i] === alp) {
              obj.list.push(val.name)
            }
          })
          itemlist.push(obj)
        }
        return itemlist
      },
      matchHeight () {
        for (let i = 0; i < this.newBlockHeight.length; i++) {
          if (this.newBlockHeight[i].alp === this.alp) {
            return this.newBlockHeight[i].height
          }
        }
      }
    },
    watch: {
      alp () {
        this.initHeight()
      }
    },
    methods: {
      initHeight () {
        this.getHeightList()
        this.move(this.matchHeight)
      },
      getHeightList () {
        let allEles = document.querySelectorAll('.js-alphabet')
        for (let i = 0; i < allEles.length; i++) {
          let obj = {}
          obj.alp = allEles[i].innerText
          obj.height = allEles[i].offsetTop
          this.newBlockHeight.push(obj)
        }
      },
      move (total) {
        let distance = document.documentElement.scrollTop
        let step = total / 50
        const _this = document.documentElement
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
            _this.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            _this.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
            _this.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            _this.scrollTop = total
          }
        }
      },
      initScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        this.getHeightList()
        this.$emit('scrollChange', this.getIndex(scrollTop))
      },
      getIndex (top) {
        for (var i = this.newBlockHeight.length - 1; i >= 0; i--) {
          if (top >= this.newBlockHeight[i].height) {
            return this.newBlockHeight[i].alp
          }
        }
      }
    },
    mounted () {
      window.addEventListener('scroll', this.initScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .citylist
    .c-h2
      height .56rem
      padding-left .3rem
      border-bottom 1px solid $borColor
      border-top 1px solid $borColor
      line-height .52rem
      background-color #f5f5f5
      color #5b5b5b
    .c-list
      .cl-item
        height .76rem
        padding-left .3rem
        border-bottom 1px solid $borColor
        line-height .76rem

</style>
