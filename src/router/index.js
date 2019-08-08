import Vue from 'vue'
import Router from 'vue-router'
import ServerCenter from '@/view/ServerCenter'
import HelloWorld from '@/components/HelloWorld'
import Help from "@/view/help"
import AfterSale from "@/view/aftersale"
import One from "@/view/1"
import Two from "../view/2"
import Strict_Select from "@/view/strict_select"
import Evaluation_Rules from "@/view/evaluation_rules"
import Red from "../view/red"
import Feedback from "@/view/feedback"
import "../../static/css/common.css"
import "../../static/css/ServerCerter.css"


Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: ServerCenter,
      

    },
    {
      path: '/help',
      name: 'help',
      component: Help,
    },
    {
      path: "/aftersale",
      name: "aftersale",
      component: AfterSale,
    },
    {
      path: "/help/1",
      name: 'One',
      component: One,
    },
    {
      path: "/help/2",
      name: 'Two',
      component: Two,
    },
    {
      path: "/help/strict_select",
      name: 'Strict_Select',
      component: Strict_Select,
    },
    {
      path: "/help/evaluation_rules",
      name: 'Evaluation_Rules',
      component: Evaluation_Rules,
    },
    {
      path: "/help/red",
      name: 'Red',
      component: Red,
    },
    {
      path: "/help/feedback",
      name: 'Feedback',
      component: Feedback,
    }


  ]
})
