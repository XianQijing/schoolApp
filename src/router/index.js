import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import BindCard from '@/view/bindCard'
import Index from '@/view/index'
import HomePage from '@/view/homePage'
import Charge from '@/view/charge'
import PersonInfo from '@/view/PersonInfo'
import Card from '@/view/card'
import Tuition from '@/view/Tuition'
import Pay from '@/view/pay'
import PayFee from '@/view/PayFee'
import Cost from '@/view/charge/cost'

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
        },
        {
          path: 'PersonInfo',
          name: 'PersonInfo',
          component: PersonInfo
        },
        {
          path: 'card',
          name: 'Card',
          component: Card
        },
        {
          path: 'Tuition',
          name: 'Tuition',
          component: Tuition
        },
        {
          path: 'pay',
          name: 'Pay',
          component: Pay
        },
        {
          path: 'PayFee',
          name: 'PayFee',
          component: PayFee
        },
        {
          path: 'cost',
          name: 'Cost',
          component: Cost
        }
      ]
    }
  ]
})
