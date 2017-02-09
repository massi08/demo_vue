<template>
  <div>
    <my-header></my-header>
    <div class="main-content">
      <md-whiteframe elevation="2" class="test-model-wrapper">
        <h1>Liste des utilisateurs</h1>
        <ul>
          <li v-for="pers in persons">
            <router-link :to="{name:'Person', params: {id: pers.id}}">
              {{pers.firstName}}
            </router-link>
          </li>
        </ul>
      </md-whiteframe>

      <md-whiteframe elevation="2" class="test-model-wrapper">
        <h1>Ajout d'utilisateurs</h1>
        <md-input-container md-theme="purple">
          <label>First Name</label>
          <md-input placeholder="Enter your first name" v-model="person.firstName"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Last Name</label>
          <md-input placeholder="Enter your last name" v-model="person.lastName"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Profession</label>
          <md-input placeholder="Enter your profession" v-model="person.profession"></md-input>
        </md-input-container>

        <div class="submit-button">
          <md-button class="md-primary md-raised" @click="add(person)">
            Valider
          </md-button>
        </div>
      </md-whiteframe>
    </div>
  </div>
</template>

<script>
    import MyHeader from "../myHeader/MyHeader.vue"
    export default {
        name: 'profile',
        data: function () {
            return {
                persons: persons_store.state,
                person: {},
            }
        },
        components: {MyHeader},
        methods: {
            add: function (person) {
                persons_store.addPerson(persons_store.state.length, person.firstName, person.lastName, person.profession)
            }
        }
    }
</script>

<style lang="scss" scoped>
  .test-model-wrapper {
    margin: 20px auto;
  }
</style>
