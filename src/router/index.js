import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Other from '@/components/Other'
import Other2 from '@/components/Other2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    {
      path: '/greeting/:id?',
      name: 'Other2',
      component: Other2
    }
  ]
})
