<template>
  <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-theme-d4">
    <img :src="logo">
    <menu-item v-for="item in items" :key="item.id" :item="item"></menu-item>
  </nav>
</template>

<script>
  import MenuItem from './SideMenu/MenuItem'

  export default {
    name: 'SideMenu',
    props: {
        logo: {
          type: String,
          default: "@/assets/logo.png"
        },
        items: Array
    },
    components: { MenuItem },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  nav {
    >img {width: 100%}
    >menu-item{width: 100%;}
  }
</style>
