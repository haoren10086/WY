import Vue from 'vue'
import Router from 'vue-router'
import Gocar from '../yunsike/gocar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gocar',
      name:Gocar,
      component:Gocar
    },
    
  ]
})
