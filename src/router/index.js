import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/citys'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
