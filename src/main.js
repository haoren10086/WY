// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import '../static/animate.css'
import '../static/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
/* eslint-disable no-new */

Vue.use(VueAwesomeSwiper);
new Vue({
  el: '#app',
  router,
})
