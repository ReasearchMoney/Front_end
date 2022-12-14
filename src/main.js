import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(VueAxios)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
