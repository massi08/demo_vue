<template>
  <div id="app">
    <transition name="my-router" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
      name: 'app',

    }
</script>

<style>
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }

  .main-content {
    padding: 16px;
    flex: 1;
    overflow: auto;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: all .4s cubic-bezier(.25, .8, .25, 1);
    transition-delay: .2s;
  }

  .my-router-enter, .my-router-leave {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

  }

  .my-router-enter .main-content, .my-router-leave .main-content {
    opacity: 0;
    overflow: hidden;
  }

  .my-router-leave {
    z-index: 1;
    transition: all .3s cubic-bezier(.55, 0, .55, .2);
    transition-duration: .25s;
  }

  .my-router-enter {
    z-index: 2;
    transition: all .4s cubic-bezier(.25, .8, .25, 1);
  }

  .my-router-enter .main-content {
    transform: translate3D(0, 20%, 0) !important;
  }
</style>
