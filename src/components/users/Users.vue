<template>
  <div>
    <my-header></my-header>
    <p>Liste des utilisateurs</p>
    <ul>
      <li v-for="pers in persons">
        <router-link :to="{name:'Person', params: {id: pers.state.id}}">
          {{pers.state.firstName}}
        </router-link>
      </li>
    </ul>
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
  </div>
</template>

<script>

    import MyHeader from "../myHeader/MyHeader.vue"
    import Persons from "../../model/person.js"
    export default {
        name: 'profile',
        data: function () {
            return {
                persons: Persons,
                person: {},
            }
        },
        components: {MyHeader},
        methods: {
            add: function (person) {
                console.log(this.persons)
                Persons.addPerson(Persons.length, person.firstName, person.lastName, person.profession)
            }
        }
    }
</script>

<style lang="scss">
</style>
