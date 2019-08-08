import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'First',
      component:()=>import("@/sgy/first")
    },{
      path: '/qiyegou',
      name: 'Qiyegou',
      component:()=>import("@/sgy/qiyegou")
    },{
      path: '/lipinka',
      name: 'Lipinka',
      component:()=>import("@/sgy/lipinka")
    },{
      path: '/lianxiwm',
      name: 'Lianxiwm',
      component:()=>import("@/sgy/Lianxiwm")
    },{
      path: '/foot',
      component:()=>import("@/sgy/qiyegoufoor")
    }
  ]
})
