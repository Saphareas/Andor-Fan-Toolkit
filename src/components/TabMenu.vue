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
    @include theme-d3;
  }
</style>
