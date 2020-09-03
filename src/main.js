import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import bian from './store/bian.vue';
Vue.prototype.Bian = bian;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
