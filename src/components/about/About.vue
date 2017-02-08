<template>
  <div>
    <my-header></my-header>
    <h1>About</h1>
  </div>
</template>

<script>
    import MyHeader from "../myHeader/MyHeader.vue"

    export default {
        name: 'about',
        components: {MyHeader}
    }
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>