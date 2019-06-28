<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div class="tab">
    <a class="innerTab" href="javascript:void(0)" @click="$emit('select', index)">{{ title }}</a>
    <a class="X" href="javascript:void(0)" @click="$emit('remove', index)">×</a>
  </div>
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
  .tab {
    @include theme-light;
    max-width: 100px;
    text-align: center;
    height: 100%;
    margin: 0 2px;
    flex-grow: 1;
    flex-shrink: 1;

    > a.innerTab {
      display: inline-block;
      width: 80%;
      height: 100%;

      &:hover {@include theme-action}
    }
  }

  a.X {
    display: inline-block;
    width: 20%;
    height: 100%;

    &:hover {@include theme-action}
  }
</style>
