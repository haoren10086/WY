import Vue from 'vue'
import Router from 'vue-router'
import Dingdan from '../view/liu'
import Order from "../view/order"
import Allowance from "../view/allowance"
import Giving from "../view/giving"
import Envelope from "../view/envelope"
import Coupons from "../view/coupons"
import Card from "../view/card"
import Purchase from "../view/purchase"
import Raise from "../view/raise"
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: Dingdan,
      component: Dingdan,
    },{
      path:"/order",
      name:"order",
      component:Order,
    },{
      path:"/allowance",
      name:"allowance",
      component:Allowance,
    },{
      path:"/giving",
      name:"giving",
      component:Giving,
    },{
      path:"/envelope",
      name:"envelope",
      component:Envelope,
    },{
      path:"/coupons",
      name:"coupons",
      component:Coupons,
    },{
      path:"/card",
      name:"card",
      component:Card,
    },{
      path:"/purchase",
      name:"purchase",
      component:Purchase,
    },{
      path:"/raise",
      name:"raise",
      component:Raise,
    }
  ]
})
