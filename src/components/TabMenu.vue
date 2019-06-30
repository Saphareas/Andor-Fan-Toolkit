<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <nav ref="tabs">
    <TabItem v-for="(card, index) in context.cards"
      :key="index" :index="index" :title="card.index"
      @select="setActive($event)"
      @remove="removeCard($event, context)"/>
    <a class="add" href="javascript:void(0)" @click="addCard(context)">+</a>
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
      setActive: function(index) {
        let target = this.$refs.tabs.children[index];
        let parent = target.parentNode;
        for (let i=0; i<parent.children.length; i++)
          parent.children[i].classList.remove("active");
        target.classList.add("active");
      },
      removeCard: function(index, context) {
        context.cards.splice(index, 1);
      },
      addCard: function(context) {
        let newCard = {index: "New"};
        context.cards.push(newCard);
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
    display: flex !important;
    margin: 0 !important;

    .active {@include theme-action}

    >.add {
      @include theme-light;
      display: inline-block;
      height: 100%;
      width: 1.5rem;
      text-align: center;
    }
  }
</style>
