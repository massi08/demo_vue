<template>
    <div class="not-found">
      <h1 class="md-display-4">
        <md-icon class="md-size-4x">mood_bad</md-icon>
        404 Not Found
        <md-icon class="md-size-4x">mood_bad</md-icon>
      </h1>
      <router-link to="/" tag="div" class="link-wrap">
        <md-button class="md-raised md-primary">
          <md-icon>home</md-icon>
          Retournez vers la page d'acceuil
        </md-button>
      </router-link>
  </div>
</template>

<script>
    export default {
        name: 'not-found'
    }
</script>

<style lang="scss" scoped>
  .not-found {
    border: 1px solid transparent !important; /*Margin collapse*/
    top: 50%;
    transform: translate(0, -50%);
    position: absolute;
    width: 100%;
  }

  .link-wrap {
    text-align: center;
  }
</style>