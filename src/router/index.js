import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import HomePage from '@/views/HomePage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'LandingPage',
      component: LandingPage
    },
    {
      path:'/homepage',
      name:'HomePage',
      component: HomePage
    }
    // {
    //   path: '/',
    //   name: 'HomePage',
    //   component: HomePage
    // }
  ]
})
