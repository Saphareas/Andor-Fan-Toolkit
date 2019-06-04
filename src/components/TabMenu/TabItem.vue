<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <a>{{ lorem }}</a>
</template>

<script>
export default {
  name: "TabItem",
  data: function() {
    return {
      lorem: this.$root.$data.lorem
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  a {
    @include theme-light;
    max-width: 80px;
    text-align: center;
    height: 100%;

    &:hover {@include theme-action}
    .selected {@include theme-darker}
  }
</style>
