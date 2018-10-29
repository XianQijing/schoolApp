import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import BindCard from '@/view/bindCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/bindCard',
      name: 'BindCard',
      component: BindCard
    }
  ]
})
