import Vue from 'vue'
import Router from 'vue-router'
import Details from '@/pages/details/details'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details',
      name: 'details',
      component: Details
    }, {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
