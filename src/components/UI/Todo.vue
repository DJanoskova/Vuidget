<template>
  <at-card style="margin-bottom: 0.5rem">
    <h4 slot="title">{{ data.title }}</h4>
    <template slot="extra">
      <at-button icon="icon-edit-1" @click="handleEdit">
        Edit
      </at-button>
      <at-button icon="icon-trash"
        type="error"
        hollow
        @click="handleRemove">
        Delete
      </at-button>
    </template>
    <div v-if="data.text">
      {{ data.text }}
    </div>
  </at-card>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['data'],
  methods: {
    ...mapMutations([
      'removeTodo'
    ]),
    handleEdit () {
      this.$router.push({ name: 'edit', params: { id: this.data.id } })
    },
    handleRemove () {
      this.removeTodo(this.data.id)
      this.$Notify({
        title: 'The note was removed',
        type: 'info'
      })
    }
  }
}
</script>
