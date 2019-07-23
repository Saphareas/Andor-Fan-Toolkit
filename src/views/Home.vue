<template>
  <div class="home">
    <HomeTile class="tile" title="New Project" img="https://via.placeholder.com/150"/>  
    <HomeTile class="tile" title="Load Project" img="https://via.placeholder.com/150"/>   
    <HomeTile class="tile" title="Settings" img="https://via.placeholder.com/150"/>    
    <hr>
    <Changelog :changes="changes" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeTile from "@/components/HomeTile.vue"
  import Changelog from "@/components/Changelog.vue"

  export default {
    name: "Home",
    components: {HomeTile, Changelog},
    data: function() {
      return {changes: this.$root.$children[0].changelog}
    },
    methods: {
      nav_new() {},
      nav_load() {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  .home {
    @include theme-darker;
    text-align: center;
  }
  .tile {
    display: inline-block;
    margin: 40px 20px;
  }
</style>

