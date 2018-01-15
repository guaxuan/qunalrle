import Vue from 'vue'
import Router from 'vue-router'
import City from '@/pages/citys'
import Details from '@/pages/details/details'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
