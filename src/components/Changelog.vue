<template>
  <div>
    <h3>Changelog:</h3>
    <ul>
      <li v-for="(change, index) in changes" :key="index" >{{ change }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Changelog",
  props: ["changes"],
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: left;
  padding: 20px;
}
</style>
