<template>
  <div class="header">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Vue_Demo</h2>
      <router-link to="/about">
        <md-button class="md-raised">About</md-button>
      </router-link>
    </md-toolbar>
  </div>
</template>

<script>
    export default {
        name: 'header'
    }
</script>

<style scoped>
  .md-title {
    flex: 1;
  }
</style>