<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div id="app">
    <SideMenu style="grid-area:sideMenu"></SideMenu>
    <router-view style="grid-area:editor" />
  </div>
</template>

<script>
  import SideMenu from "./components/SideMenu.vue"

  export default {
    name: "app",
    components: {SideMenu},
    data: function() {
      return {
        version: "0.1.0",
        changelog: [
          "stuff",
          "more stuff",
          "fancy stuff",
          "even fancier stuff",
          "banana"
        ]
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    height: 100vh;
    display: grid;
    grid-template-areas:
      "sideMenu editor";
    grid-template-columns: 60px 1fr;
  }

  $fa-font-path: "../node_modules/@fortawesome/fontawesome-free/webfonts" !default;
  @import "../node_modules/@fortawesome/fontawesome-free/scss/fontawesome";
  @import "../node_modules/@fortawesome/fontawesome-free/scss/regular";
  @import "../node_modules/@fortawesome/fontawesome-free/scss/solid";
  @import "../node_modules/@fortawesome/fontawesome-free/scss/brands";
  .fa,.fas,.far,.fal,.fab {
    font-family: "Font Awesome 5 Free";
  }
</style>
