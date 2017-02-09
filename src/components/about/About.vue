<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <h1>About</h1>
      <md-whiteframe elevation="2" class="test-model-wrapper">
        <div>
          <md-layout md-align="center">
            <p>As part of the web mobile course, We are a group of three students who designed this website. We were suppose to understand and take charge of a new javascript framework called VueJS.</p>
          </md-layout>
          <md-layout md-align="center">
            <p>To fully understand VueJS, we were suppose to look carefully at the VueJS' guiding book located at their website.</p>
          </md-layout>
          <md-layout md-align="center">
            <p>We started to create this framework using VUEJS's webpack which is really easy to manipulate. And so were able to add some dependecies to our project.
              For instance, for the design area, we added Vue Material Design.</p>
          </md-layout>
          <md-layout md-align="center">
            <p>List of website used:</p>
            <ul>
              <li><a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a></li>
              <li><a href="https://vuematerial.github.io"> https://vuematerial.github.io</a></li>
              <li><a href="https://github.com/vuejs/vue-cli">https://github.com/vuejs/vue-cli</a></li>
          </ul>

          </md-layout>

        </div>
      </md-whiteframe>
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
