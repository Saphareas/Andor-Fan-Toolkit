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
