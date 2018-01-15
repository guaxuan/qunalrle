<template>
  <div class="aaa">
    <city-header :list="alpcitylist"></city-header>
    <city-position></city-position>
    <hot-citys :list="hotlist"></hot-citys>
    <city-list
      :list="alpcitylist"
      :alp="alphabet"
      @scrollChange="handleReturnAlp"
    ></city-list>
    <alphabet @change="handlePassAlp" :returnAlp="returnAlp"></alphabet>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CityPosition from './position'
  import HotCitys from './hotcitys'
  import CityList from './citylist'
  import Alphabet from './alphabet'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CityPosition,
      HotCitys,
      CityList,
      Alphabet
    },
    data () {
      return {
        hotlist: [],
        alpcitylist: [],
        alphabet: '',
        returnAlp: ''
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/city.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.hotlist = data.hotscity
        this.alpcitylist = data.alpcitys
      },
      handleGetDataErr () {
        console.log('error')
      },
      handlePassAlp (val) {
        this.alphabet = val
      },
      handleReturnAlp (val) {
        this.returnAlp = val
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style lang="stylus" scoped>
</style>
