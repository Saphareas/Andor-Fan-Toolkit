<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div id="editor-root">
    <div id="title">Campaign Title: <input type="text" v-model="storyTitle"></div>
    <hr>
    <section v-for="(card, index) in storyCards"
        :key="'storyCard'+index">
      <StoryEditor :index="index" />
      <hr>
    </section>
    <a class="addBtn" href="javascript:void(0)" @click="addCard">
      <img :src="plusInCircle" alt="Add">
    </a>
  </div>
</template>

<script>
  import StoryEditor from "@/components/StoryEditor.vue"
  import PlusInCircle from "@/assets/plus-circle-outline.svg"

  export default {
    name: "StoryEditorView",
    components: {StoryEditor},
    data: function() {
      return {
        plusInCircle: PlusInCircle
      }
    },
    computed: {
      storyTitle: {
        get: function() {
          return this.$store.state.story.title
        },
        set: function(newValue) {
          this.$store.commit("updateStoryTitle", newValue)
        }
      },
      storyCards () {
        return this.$store.state.story.cards
      }
    },
    methods: {
      addCard: function() {
        this.$store.commit('addStoryCard');
      }
    }
  }
</script>

<style lang="scss" scoped>
  #editor-root > * {padding: 0 20px}
  #title {margin: 10px}
  .addBtn {
    display: block;
    margin: 0 auto;
    width: 60px;
    >img {
      width: 100%;
      filter: invert(.66);
    }
  }
</style>
