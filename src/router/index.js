import Vue from 'vue'
import Router from 'vue-router'
import GuanLi from '../view/guanli'
import First from "../view/first"
import Two from "../view/two"
import Three from "../view/three"
import Four from "../view/four"
import Five from "../view/five"
import Six from "../view/six"
import Seven from "../view/seven"
import Eight from "../view/eight"
import Nine from "../view/nine"
import Index from "../view/index"
Vue.use(Router)
export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: GuanLi,
      component: GuanLi,
    },{
      path:"/first",
      name:"first",
      component:First,
    },
    {
      path:"/two",
      name:"two",
      component:Two,
    },{
      path:"/three",
      name:"three",
      component:Three,
    },
    {
      path:"/four",
      name:"four",
      component:Four,
    },
    {
      path:"/five",
      name:"five",
      component:Five,
    },
    {
      path:"/six",
      name:"six",
      component:Six,
    },
    {
      path:"/seven",
      name:"seven",
      component:Seven,
    },
    {
      path:"/eight",
      name:"eight",
      component:Eight,
    },
    {
      path:"/nine",
      name:"nine",
      component:Nine,
    },
    {
      path:"/index",
      name:"index",
      component:Index,
    },
  ]
})
