<template>
  <a :href="url" :title="title">
    <img :alt="title" :src="icon">
  </a>
</template>

<script>
  export default {
    name: 'MenuItem',
    props: {
        title: String,
        icon: String,
        url: String
    },
    components: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../theme.scss";
  a {
    display: block;
    width: 100%;
    margin: 12px auto;
    padding: 4px 0;

    &:hover {
      @include theme-l1;
    }

    img {
      width: 70%;
      margin: 0 auto;
      display: block;
    }
  }
</style>
