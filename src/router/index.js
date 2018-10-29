import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import BindCard from '@/view/bindCard'
import Index from '@/view/index'
import HomePage from '@/view/homePage'
import Charge from '@/view/charge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/bindCard',
      name: 'BindCard',
      component: BindCard
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/homePage',
      children: [
        {
          path: 'homePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'charge',
          name: 'Charge',
          component: Charge
        }
      ]
    }
  ]
})
