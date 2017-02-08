<template>
  <md-whiteframe elevation="2" class="test-model-wrapper">
    <div>
      <md-layout>
        <md-layout>
          <h2 v-if="onSubmitOnly">
            Your name is: <span class="full-name">{{fullName}} </span>
          </h2>
          <h2 v-else>
            Your name is: <span class="first-name">{{firstName}} </span> <span class="last-name">{{lastName}}</span>
          </h2>
        </md-layout>
        <md-switch v-model="onSubmitOnly">Submit First</md-switch>
      </md-layout>

      <md-input-container md-theme="purple">
        <label>First Name</label>
        <md-input placeholder="Enter your first name" v-model="firstName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Last Name</label>
        <md-input placeholder="Enter your last name" v-model="lastName"></md-input>
      </md-input-container>

      <div class="submit-button" v-if="onSubmitOnly">
        <md-button class="md-primary md-raised" @click="updateInfo()">
          Valider
        </md-button>
      </div>
    </div>
  </md-whiteframe>
</template>

<script>
    export default {
        name: 'test-model',
        data() {
            return {
                firstName: "",
                lastName: "",
                fullName: "",
                onSubmitOnly: false
            }
        },
        methods: {
            updateInfo: function () {
                this.fullName = this.firstName + ' ' + this.lastName
            }
        },
    }
</script>

<style lang="scss">
  .test-model-wrapper {
    padding: 10px;
    width: 70%;
    margin: 0 auto;
  }

  .first-name {
    color: #9c27b0;
  }

  .last-name {
    color: #2196f3;
  }

  .full-name {
    color: #e91e63;
  }

  .submit-button {
    text-align: right;
  }
</style>
