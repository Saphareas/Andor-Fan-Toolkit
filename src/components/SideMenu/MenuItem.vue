<template>
  <router-link :to="url" :title="title">
    <img :alt="title" :src="icon">
  </router-link>
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
  @import "@/components/theme.scss";
  a {
    display: block;
    width: 100%;
    margin: 10px auto;
    padding: 10px 0;

    &:hover {
      @include theme-l1;
    }

    img {
      width: 60%;
      margin: 0 auto;
      display: block;
    }
  }
</style>
