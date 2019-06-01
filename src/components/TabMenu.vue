<template>
  <nav>.</nav>
</template>

<script>
  import TabItem from "./TabMenu/TabItem";

  export default {
    name: "TabMenu",
    components: { TabItem }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  nav {
    @include theme-dark;
    position: sticky;
    top: 0;
    box-shadow: 0 1px 6px black;
  }
</style>
