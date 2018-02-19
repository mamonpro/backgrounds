import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import View from '@/components/View'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/view/:id',
      name: 'View',
      component: View
    }
  ]
})
