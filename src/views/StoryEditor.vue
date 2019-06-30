<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div>
    <TabMenu id="tabMenu" :context="storyCardsContext" />
    <StoryEditor style="padding:0 20px" />
  </div>
</template>

<script>
  import TabMenu from "@/components/TabMenu.vue";
  import StoryEditor from "@/components/StoryEditor.vue";

  export default {
    name: 'StoryEditorView',
    components: {TabMenu, StoryEditor},
    data: function() {
      return {
        storyCardsContext: this.$root.$data.story
      }
    }
  }
</script>
