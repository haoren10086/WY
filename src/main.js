import Vue from 'vue'
import router from './router'
import '../static/yucss/animate.css'
import '../static/yucss/common.css'
import '../static/yujs/jquery-3.2.1.min.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// Vue.use(VuePicturePreview)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  
})
