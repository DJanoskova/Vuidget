<template>
  <form @submit.prevent="save">
    <at-input v-model="model.title"
      placeholder="Title"
      ref="input" />
    <br>
    <at-textarea v-model="model.text" placeholder="TODO text" />
    <br>
    <at-button type="primary"
      native-type="submit"
      :disabled="!isValid">
      Save
    </at-button>
  </form>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { Todo } from '../models'
import { find } from 'lodash'

export default {
  data () {
    return {
      model: new Todo()
    }
  },
  methods: {
    ...mapMutations([
      'editTodo'
    ]),
    save () {
      this.editTodo(this.model)
      this.$router.push({ name: 'list' })
      this.$Notify({
        title: 'The note was saved',
        type: 'success'
      })
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ]),
    isValid () {
      return !!(this.model.title && this.model.text)
    }
  },
  created () {
    let id = this.$route.params.id
    if (id) {
      let todo = find(this.todos, { id: id })
      this.model = { ...todo }
    }
  },
  mounted () {
    this.$refs.input.$el.firstElementChild.focus()
  }
}
</script>
