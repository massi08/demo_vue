<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <h1>About</h1>
      <md-whiteframe elevation="2" class="test-model-wrapper">
        <div>
          <md-layout md-align="center">
            <p>A little paragraph about oursleves</p>
          </md-layout>
          <md-layout md-align="center">
            Links we used
          </md-layout>
        </div>
      </md-whiteframe>
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