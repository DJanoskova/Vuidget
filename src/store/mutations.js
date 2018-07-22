import { findIndex } from 'lodash'
import moment from 'moment'

export default {
  editTodo (state, data) {
    const index = findIndex(state.todos, { id: data.id })
    if (index < 0) state.todos.push({ ...data, id: moment().format('x') })
    else state.todos.splice(index, 1, data)
  },
  removeTodo (state, id) {
    const index = findIndex(state.todos, { id: id })
    if (index > -1) state.todos.splice(index, 1)
  }
}
