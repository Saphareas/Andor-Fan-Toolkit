<template>
  <div class="home">
    <HomeTile class="tile" title="New Project" img="https://via.placeholder.com/150" @klick="nav_new"/>  
    <HomeTile class="tile" title="Load Project" img="https://via.placeholder.com/150" @klick="nav_load"/>   
    <HomeTile class="tile" title="Settings" img="https://via.placeholder.com/150" @klick="nav_settings"/>    
    <hr>
    <Changelog :changes="changes" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeTile from "@/components/HomeTile.vue"
  import Changelog from "@/components/Changelog.vue"
  import LoadSave from "@/components/loadSave.js"

  export default {
    name: "Home",
    components: {HomeTile, Changelog},
    mixins: [LoadSave],
    data: function() {
      return {changes: this.$root.$children[0].changelog} //TODO: fix non-reactive pattern
    },
    methods: {
      nav_new: function() {
        this.$store.commit("reset");
        this.$router.push({name: "storyEditor"});
      },
      nav_load: function() {
        this.load();
        this.$router.push({name: "storyEditor"});
      },
      nav_settings: function() {this.$router.push({name: "settings"})}
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

