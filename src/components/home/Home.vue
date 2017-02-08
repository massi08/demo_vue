<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <h1>Home</h1>
      <test-model></test-model>
    </div>
  </div>
</template>

<script>
    import MyHeader from "../myHeader/MyHeader.vue"
    import TestModel from "../testModel/testModel.vue"

    export default {
        name: 'home',
        components: {MyHeader, TestModel}
    }
</script>

<style lang="scss">
  h1 {
    text-align: center;
  }
</style>