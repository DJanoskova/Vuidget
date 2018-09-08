import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// plugins
import AtUI from 'at-ui'

import 'at-ui-style/css/at.css'
import './assets/css/main.scss'

// widget setup
// (optional) 'Custom elements polyfill'
import 'document-register-element/build/document-register-element'
// vue-custom-element by karol-f
import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.use(AtUI)
Vue.config.productionTip = false

// new Vue is not needed anymore, as you're initializing the app through vue-custom-element
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')

// use vue-custom-element
App.store = store
App.router = router
Vue.customElement('vue-widget', App)
