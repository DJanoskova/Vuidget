import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// plugins
import AtUI from 'at-ui'

import 'at-ui-style/css/at.css'
import './assets/css/main.scss'

// widget setup
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

App.store = store
App.router = router
App.props = ['title']
Vue.customElement('vue-widget', App)

router.replace('/')
