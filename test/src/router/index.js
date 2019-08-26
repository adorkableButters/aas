import Vue from 'vue'
import Router from 'vue-router'
import time from '@/components/time'
import MyDemo from '@/components/MyDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'time',
      component: time
    },
    {
      path: '/mydemo',
      name: 'MyDemo',
      component: MyDemo
    }
  ]
})
