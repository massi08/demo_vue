<template>
  <div id="app">
    <transition name="my-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style src="./style/style.css">
</style>
