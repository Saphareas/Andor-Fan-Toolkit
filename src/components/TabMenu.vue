<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <nav>
    <TabItem v-for="(card, index) in context.cards" :key="index" :index="index" :title="card.index" @click.native="setActive($event.path[0])"/>
  </nav>
</template>

<script>
  import TabItem from "./TabMenu/TabItem";

  export default {
    name: "TabMenu",
    components: { TabItem },
    props: {
      context: {
        type: Object,
        required: true
      }
    },
    methods: {
      setActive: function(target) {
        let parent = target.parentNode;
        for (let i=0; i<parent.children.length; i++)
          parent.children[i].classList.remove("active");
        target.classList.add("active");
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  nav {
    @include theme-dark;
    position: sticky;
    top: 0;
    width: 100%;
    height: 1.5rem;
    box-shadow: 0 1px 6px black;
    display: flex;

    .active {@include theme-action}
  }
</style>
