<template>
  <md-whiteframe elevation="2" class="test-model-wrapper">
    <div>
      <h2>
        Your name is: <span class="first-name">{{firstName}} </span> <span class="last-name">{{lastName}}</span>
      </h2>

      <md-input-container md-theme="purple">
        <label>First Name</label>
        <md-input placeholder="Enter your first name" v-model="firstName"></md-input>
      </md-input-container>

      <md-input-container>
        <label>Last Name</label>
        <md-input placeholder="Enter your last name" v-model="lastName"></md-input>
      </md-input-container>
    </div>
  </md-whiteframe>
</template>

<script>
    export default {
        name: 'test-model',
        data() {
            return {
                firstName: "",
                lastName: ""
            }
        }
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
</style>