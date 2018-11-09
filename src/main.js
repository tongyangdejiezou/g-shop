// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import { Button, Cell } from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import '../static/css/reset.css'
import './mock/mockServer'
import './filters/index'
import loading from './common/img/loading.gif'
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading,
  attempt: 1
})
Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App),
  store
})
