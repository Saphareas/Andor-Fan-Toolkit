<template>
  <a href="javascript:void(0)" class="container" @click="$emit('klick', $event)">
    <i class="fas fa-7x" :class="glyph"></i>
    <span>{{ title }}</span>
  </a>
</template>

<script>
export default {
  name: "HomeTile",
  props: ["title", "glyph"]
}
</script>

<style lang="scss" scoped>
  .container {
    display: block;
    width: 240px;
    height: 180px;
    text-align: center;
    border-radius: 12px;
    border: 1px solid lightgray;
    background: #888;
    box-shadow: 0 0 20px 0 black;
    color: white;
    text-decoration: none;

    &:hover {
      @import "@/components/theme.scss";
      @include theme-light;
      transition: background-color .1s linear;
    }

    >i {
      height: 60%;
      margin: 20px auto;
    }

    > span {
      display: block;
    }
  }
</style>

