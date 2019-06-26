<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <a href="javascript:void(0)">{{ title }}</a>
</template>

<script>
export default {
  name: "TabItem",
  props: {
    title: String,
    index: Number
  }
}
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  a {
    @include theme-light;
    max-width: 100px;
    text-align: center;
    height: 100%;
    margin: 0 2px;
    flex-grow: 1;
    flex-shrink: 1;

    &:hover {@include theme-action}
    .selected {@include theme-darker}
  }
</style>
