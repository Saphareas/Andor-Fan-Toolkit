<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div id="app">
    <SideMenu style="grid-area:sideMenu"></SideMenu>
    <router-view style="grid-area:editor" />
    <LoadSaveBtn></LoadSaveBtn>

  </div>
</template>

<script>
  import SideMenu from "./components/SideMenu.vue"
  import LoadSaveBtn from "./components/LoadSaveBtn.vue"

  export default {
    name: "app",
    components: {SideMenu, LoadSaveBtn},
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
</style>
