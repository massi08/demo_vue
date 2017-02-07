<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    import Header from 'components/Header'
    export default {
        name: 'app'
    }
</script>

<style>
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
</style>
