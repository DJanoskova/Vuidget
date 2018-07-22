import { orderBy } from 'lodash'

export default {
  todos (state) {
    return orderBy(state.todos, ['id'], ['desc'])
  }
}
