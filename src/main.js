import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// plugins
import AtUI from 'at-ui'

import 'at-ui-style/css/at.css'
import './assets/css/main.scss'

Vue.use(AtUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
