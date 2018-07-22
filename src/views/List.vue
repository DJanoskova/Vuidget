<template>
  <div>
    <Todo v-for="todo in todos"
      :key="todo.id"
      :data="todo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Todo from '../components/UI/Todo'

export default {
  computed: {
    ...mapGetters([
      'todos'
    ])
  },
  components: {
    Todo
  }
}
</script>
