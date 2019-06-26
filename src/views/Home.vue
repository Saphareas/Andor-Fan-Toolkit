<template>
  <div class="home">
    <TabMenu :context="lorem" />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import TabMenu from "@/components/TabMenu.vue"

  export default {
    name: 'Home',
    components: {HelloWorld, TabMenu},
    data: function() {
      return {
        lorem: {
          cards: [{index:"A"},{index:"B"},{index:"C"},{index:"D"},{index:"E"}]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  .home {@include theme-darker;}
</style>

