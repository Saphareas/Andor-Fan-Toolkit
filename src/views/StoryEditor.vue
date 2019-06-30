<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div>
    <StoryEditor style="padding:0 20px" />
  </div>
</template>

<script>
  import StoryEditor from "@/components/StoryEditor.vue";

  export default {
    name: 'StoryEditorView',
    components: {StoryEditor},
    computed: {
      storyCardsContext: function() {
        return this.$root.$data.story;
      }
    }
  }
</script>
