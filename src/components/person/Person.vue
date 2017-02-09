<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <md-whiteframe elevation="2" class="test-model-wrapper">
        <div>
          <md-layout class="wrap">
            <md-layout><h2 class="title">Firstname:</h2></md-layout>
            <md-layout><h2>{{person.firstName}}</h2></md-layout>
          </md-layout>
        </div>
        <div>
          <md-layout class="wrap">
            <md-layout><h2 class="title">Lastname:</h2></md-layout>
            <md-layout><h2>{{person.lastName}}</h2></md-layout>
          </md-layout>
        </div>
        <div>
          <md-layout class="wrap">
            <md-layout><h2 class="title">Profession:</h2></md-layout>
            <md-layout><h2>{{person.profession}}</h2></md-layout>
          </md-layout>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
    import MyHeader from "../myHeader/MyHeader.vue"
    export default {
        name: 'persons',
        components: {MyHeader},
        data: function () {
            return {
                person: persons_store.getPersonById(this.$route.params.id)
            }
        },
        components: {MyHeader}
    }
</script>

<style lang="scss" scoped>
  .title {
    color: #2196f3;
  }

  .wrap {
    h2 {
      flex-grow: 1;
    }
  }
</style>
