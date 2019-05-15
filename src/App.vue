<template>
  <div id="app">
    <SideMenu style="grid-area:sideMenu"></SideMenu>
    <TabMenu style="grid-area:tabMenu"></TabMenu>
    <router-view style="grid-area:editor;padding:0 20px" /></div>
</template>

<script>
  import SideMenu from './components/SideMenu.vue'
  import TabMenu from './components/TabMenu.vue'

  export default {
    name: 'app',
    data: function() {
      return {}
    },
    components: {SideMenu, TabMenu}
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
      "sideMenu tabMenu"
      "sideMenu editor";
    grid-template-columns: 60px 1fr;
    grid-template-rows: 30px 1fr;
  }
</style>
