<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <router-link class="menu-item" :to="url" :title="title">
    <img :alt="title" :src="icon">
    <span>{{ title }}</span>
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
  .menu-item {
    display: block;
    width: 100%;
    margin: 10px auto;
    padding: 10px 0;
    text-align: center;
    color: white;
    text-decoration: none;

    &:hover {
      @include theme-light;
      transition: background-color .1s linear;
    }

    img {
      width: 60%;
      margin: 0 auto;
      display: block;
      filter: invert(100%);
    }

    span {
      display: block;
    }
  }
</style>
