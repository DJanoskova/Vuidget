<template>
  <div id="app">
    <!-- access root props via $root -->
    <h1 style="text-align: center" v-if="$root.title">{{ $root.title }}</h1>

    <at-menu mode="horizontal" :active-name="activeTab" @on-select="switchTab">
      <at-menu-item name="list">
        <i class="icon icon-list"></i>
        List
      </at-menu-item>
      <at-menu-item name="edit">
        <i class="icon icon-plus-square"></i>
        Add new
      </at-menu-item>
    </at-menu>
    <br>
    <router-view />
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      activeTab: ''
    }
  },
  created () {
    this.activeTab = this.$route.name
  },
  methods: {
    switchTab (tab) {
      this.$router.push({ name: tab })
    }
  },
  watch: {
    '$route.name' () {
      this.activeTab = this.$route.name
    }
  }
}
</script>
