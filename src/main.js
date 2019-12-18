// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import '../node_modules/font-awesome/css/font-awesome.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Router from 'vue-router'
import store from './store/index'
import AjaxUrl from './common/AjaxUrl'
import common from './common/js/common'
import axios from 'axios'
import qs from 'qs'
import Carousel3d from 'vue-carousel-3d'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// import wx from 'weixin-js-sdk'
Vue.use(Mint, vueAwesomeSwiper)
Vue.use(Carousel3d)
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs
Vue.prototype.$AjaxUrl = AjaxUrl
Vue.prototype.$common = common
// Vue.prototype.wx = wx
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  window.scrollTo(0, 0)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
