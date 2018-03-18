import Vue from 'vue'
import Router from 'vue-router'
import Prints from '@/components/Prints'
import About from '@/components/About'
import Cart from '@/components/Cart'
import Home from '@/components/Home'

import { mapGetters } from 'vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/prints',
      name: 'Prints',
      component: Prints
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },

  ]
})
