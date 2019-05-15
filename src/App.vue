<template>
  <div id="app">
    <SideMenu style="grid-area:sideMenu"></SideMenu>
    <TabMenu style="grid-area:tabMenu"></TabMenu>
  </div>
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
  background: #333
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "sideMenu tabMenu"
    "sideMenu editor";
  grid-template-columns: 60px 1fr;
  grid-template-rows: 30px 1fr;
}
</style>
