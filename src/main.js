// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Axios from "axios"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "swiper/dist/css/swiper.css"
import "../static/css/animate.css"
import "../static/css/common.css"
import "../static/js/jquery-3.2.1.min.js"

Vue.config.productionTip = false

Vue.prototype.$http=Axios
// Axios.defaults.baseURL="https://www.easy-mock.com/mock/5d439f4665519b0a71c91a4b/wy"

Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
