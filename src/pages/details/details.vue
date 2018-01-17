<template>
	<div class="details">
	  <details-show :show="show" :imgId="id"></details-show>
    <details-info :info="info"></details-info>
    <details-recommend @order="handleOrderClick"></details-recommend>
    <details-tickets :ticket="ticket"></details-tickets>
    <transition name="dock">
      <details-dock v-show="dock" @close="handleCloseClick"></details-dock>
    </transition>
	</div>
  
</template>

<script>
  import DetailsShow from './show'
  import DetailsInfo from './info'
  import DetailsRecommend from './recommend'
  import DetailsTickets from './tickets'
  import DetailsDock from './dock'
  import axios from 'axios'
  export default {
    name: 'detail',
    components: {
      DetailsShow,
      DetailsInfo,
      DetailsRecommend,
      DetailsTickets,
      DetailsDock
    },
    data () {
      return {
        id: '00001', // 由上一页面传入
        show: {},
        info: {},
        ticket: [],
        dock: false
      }
    },
    methods: {
      getDetailsData () {
        axios.get('/api/details.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const details = res.data.data[this.id]
        this.show = details.show
        this.info = details.info
        this.ticket = details.ticket
      },
      handleGetDataErr () {
        console.log('Error')
      },
      handleOrderClick () {
        this.dock = true
      },
      handleCloseClick () {
        this.dock = false
      }
    },
    created () {
      this.getDetailsData()
    }
  }
</script>


<style lang="stylus" scoped>
  .details
    background-color #f5f5f5
  .dock-enter, .dock-leave-to
    transform translateY(100%)
  .dock-enter-active, .dock-leave-active
    transition all .5s
</style>
