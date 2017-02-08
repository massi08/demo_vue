<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <h1>About</h1>
    </div>
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