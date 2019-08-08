// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Ahome from './view/Ahome'
// import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:"/",component:Ahome}
  ],
  mode:"history"
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
