<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-detial></index-detial>
    <index-sights :list="sightsInfo"></index-sights>
    <index-qunar :list="qunarInfo"></index-qunar>
    <index-footer :list="footerInfo"></index-footer>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexDetial from './detial'
  import IndexSights from './sights'
  import IndexQunar from './qunar'
  import IndexFooter from './footer'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexDetial,
      IndexSights,
      IndexQunar,
      IndexFooter
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        detialInfo: [],
        sightsInfo: [],
        qunarInfo: [],
        footerInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconsList
        this.detialInfo = data.detialList
        this.sightsInfo = data.sightsList
        this.qunarInfo = data.qunarList
        this.footerInfo = data.footerList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style></style>