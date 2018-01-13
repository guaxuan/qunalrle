<template>
	<div>
		<details-show :detailsInfo="detailsInfo" :imgId="id"></details-show>
    <details-info></details-info>
	</div>
  
</template>

<script>
  import DetailsShow from './show'
  import DetailsInfo from './info'
  import axios from 'axios'
  export default {
    name: 'detail',
    components: {
      DetailsShow,
      DetailsInfo
    },
    data () {
      return {
        id: '00001', // 由上一页面传入
        detailsInfo: {}
      }
    },
    methods: {
      getDetailsData () {
        axios.get('/api/details.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data
        this.detailsInfo = data[this.id]
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


<style scoped>
	
</style>
