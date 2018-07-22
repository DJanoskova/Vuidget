import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Edit from './views/Edit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:id?',
      name: 'edit',
      component: Edit
    },
    {
      path: '/*',
      redirect: { name: 'list' }
    }
  ],
  mode: 'abstract',
  linkActiveClass: 'active'
})
