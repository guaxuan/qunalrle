<template>
	<div class="details">
		<details-show :show="show" :imgId="id"></details-show>
    <details-info :info="info"></details-info>
    <Details-tickets :ticket="ticket"></Details-tickets>
	</div>
  
</template>

<script>
  import DetailsShow from './show'
  import DetailsInfo from './info'
  import DetailsTickets from './tickets'
  import axios from 'axios'
  export default {
    name: 'detail',
    components: {
      DetailsShow,
      DetailsInfo,
      DetailsTickets
    },
    data () {
      return {
        id: '00001', // 由上一页面传入
        show: {},
        info: {},
        ticket: []
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
</style>
