<template>
  <md-whiteframe>
    <md-toolbar>
      <h2 class="md-title">VueDemo</h2>
      <div class="links">
        <router-link to="/home" class="md-button"> Home</router-link>
        <router-link to="/about" class="md-button"> About</router-link>
      </div>
    </md-toolbar>
  </md-whiteframe>
</template>

<script>
    export default {
        name: 'my-header'
    }
</script>

<style lang="scss" src="./MyHeader.scss" scoped>
</style>