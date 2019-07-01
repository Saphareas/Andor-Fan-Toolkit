<!--
Copyright (C) 2019 Fabian Große
Released under the GNU GENERAL PUBLIC LICENSE 3
https://github.com/Saphareas/Andor-Fan-Toolkit/blob/master/LICENSE
-->

<template>
  <div class="story-editor">
    <div id="index">
      Index: <input type="text" v-model="cardIndex">
    </div>
    <div id="text">
      <button title="Bold" class="rich-control" @click="formatText(printBold)">
        <img alt="Bold" :src="boldIcon">
      </button>
      <button title="Italic" class="rich-control" @click="formatText(printItalic)">
        <img alt="Italic" :src="italicIcon">
      </button>
      <button title="Bullet List" class="rich-control" @click="formatText(printList)">
        <img alt="Bullet List" :src="bListIcon">
      </button>
      <textarea placeholder="add multiple lines" v-model="cardText"></textarea>
    </div>
  </div>
</template>

<script>
  import boldIcon from "../assets/format-bold.svg"
  import italicIcon from "../assets/format-italic.svg"
  import bListIcon from "../assets/format-list-bulleted.svg"

  export default {
    props: {index:Number},
    data: function() {
      return {
        entityMap: {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;',
          '`': '&#x60;',
          '=': '&#x3D;'
        },
        boldIcon: boldIcon,
        italicIcon: italicIcon,
        bListIcon: bListIcon
      }
    },
    computed: {
      cardIndex: {
        get() {
          return this.$store.state.story.cards[this.index].cardIndex
        },
        set(newValue) {
          let payload = {
            index: this.index,
            newValue: newValue
          };
          this.$store.commit("updateStoryCardIndex", payload);
        }
      },
      cardText: {
        get() {
          return this.$store.state.story.cards[this.index].cardText
        },
        set(newValue) {
          let payload = {
            index: this.index,
            newValue: newValue
          };
          this.$store.commit("updateStoryCardText", payload);
        }
      },
      safeText: function() {
        let vm = this;
        let marked = require("marked");
        marked.setOptions({
          breaks: true,
          sanitize: true,
          sanitizer: function(raw) {
            return String(raw).replace(/[&<>"'`=/]/g, s => {return vm.entityMap[s];});
          }
        });
        return marked(vm.rawText);
      }
    },
    methods: {
      formatText: function(callback) {
        let textarea = document.querySelector("#text > textarea");
        if (typeof textarea.selectionStart == "number" && typeof textarea.selectionEnd == "number") {
            let selStart = textarea.selectionStart;
            let selEnd   = textarea.selectionEnd;

            let selText = textarea.value.slice(selStart, selEnd);
            let before  = textarea.value.slice(0, selStart);
            let after   = textarea.value.slice(selEnd);

            let text = before + callback(selText) + after;
            textarea.value = text;
        }
      },
      printBold: function(selection) {
        if (selection === "") {
          return "**bold**"
        }
        else if (selection.length > 0) {
          return "**" + selection + "**"
        }
      },
      printItalic: function(selection) {
        if (selection === "") {
          return "_italic_"
        }
        else if (selection.length > 0) {
          return "_" + selection + "_"
        }
      },
      printList: function(selection) {
        if (selection === "") {
          return "- list item"
        }
        else if (selection.length > 0) {
          return "- " + selection + "\n\n"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  /*.home {@include theme-dark;}*/
  .story-editor {
    >* {
      display: block;
      margin: 10px;
    }

    #index {
      input {width: 4ch;}
    }

    #text {
      textarea {
        resize: none;
        width: 100%;
        min-height: 10rem;
        padding: 5px;
        font-size: 1rem;
        font-family: sans-serif;
      }
    }
  }

  .rich-control {
    width: 2rem;
    height: 2rem;
    padding: 2px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
