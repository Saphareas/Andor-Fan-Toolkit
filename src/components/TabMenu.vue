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
  @import "theme";
  nav {
    @include theme-d4;
  }
</style>
