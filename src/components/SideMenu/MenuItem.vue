<template>
  <a :href="item.url" class="w3-bar-item w3-button w3-padding-large w3-theme">
    <i class="fa fa-home w3-xxlarge"></i>
    <img :src="item.icon">
    <p>{{item.title}}</p>
  </a>
</template>

<script>
  export default {
    name: 'MenuItem',
    props: {
        item: Object
    },
    components: { MenuItem },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    padding: 6px}
</style>
