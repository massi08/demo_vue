<template>
  <div>
    <my-header></my-header>
    <p>Liste des utilisateurs</p>
    <ul>
      <li v-for="person in persons">
        <router-link :to="{name:'Person', params: {id: person.state.id}}">
          {{person.state.firstName}}
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
  //import Person from "../../model/Person.js"
  import MyHeader from "../myHeader/MyHeader.vue"
  import MyCart from "../myCart/MyCart.vue"
    export default {
      name: 'profile',
      data : function () {
        return{
          persons: [
            { state:{"id": 0, "firstName": "Massinissa", "lastName": "bouneffa", "profession": "chomeur lol" }

            },
            {
              state:{"id": 1, "firstName": "Fanouel", "lastName": "Abebe", "profession": "chomeur lol" }
            },
            {
              state:{"id": 2, "firstName": "Mahmoud", "lastName": "Ayssami", "profession": "chomeur lol" }
            },
          ],
          person: {},
        }
      },
      components: {MyHeader, MyCart},
      methods:{
          add: function (person) {
            this.persons.push(new Person(this.persons.length, person.firstName, person.lastName, person.profession))
          }
      }
    }
</script>

<style lang="scss">
</style>
