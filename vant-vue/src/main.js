import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from 'vue-router'
import routes from './route'


Vue.use(VueRouter)
Vue.use(Vant);

Vue.prototype.$userMsg = 'http://gw.test.com/api/'; 
Vue.prototype.$islogin = false; 

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
