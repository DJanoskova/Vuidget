import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: moment().format('x'),
        title: `I'm your new todo!`,
        text: 'Just wish I remembered what I wanted to write..'
      }
    ]
  },
  getters,
  mutations
})
