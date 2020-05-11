// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "@/assets/iconfont.css"
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import BookDetail from '@/components/BookDetail'
import Cookies from 'js-cookie'
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, BookDetail },
  template: '<App/>'
})
