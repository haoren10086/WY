import Vue from 'vue'
import Router from 'vue-router'
import '../../static/css/app.css'
import Index from '@/view/index'
import Banner from '@/view/banner'
import RenHome from "../view/renhome"
import Renqi from '../view/renqi'
Vue.use(Router)


export default new Router({

  routes: [
    {
      path: '/index',
      name: 'index',
      component:Index
    },{
      path: '/banner',
      name: 'banner',
      component:Banner
    },{
      path: '/',
      name: 'renhome',
      component:RenHome
    },{
      path: '/renqi',
      name: 'Renqi',
      component:Renqi
    },
    {
      path:'/renxian',
      name:"renxian",
      component:()=>import('../view/renxian.vue')
    },
    {
      path:'/rengm',
      name:"rengm",
      component:()=>import('../view/rengm.vue')
    },
    {
      path:'/dao',
      name:'dao',
      component:()=>import('../view/daoshi.vue')
    },
    {
      path:'/rencon',
      name:'rencon',
      component:()=>import('../view/rencon.vue')
    },
    {
      path:'/renpic',
      name:'renpic',
      component:()=>import('../view/renpic.vue')
    },
    {
      path:'/re',
      name:'re',
      component:()=>import('../view/renban.vue')
    }
  ]
})
