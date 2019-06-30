<template>
  <div class="story-editor">
    <div id="title">Campaign Title: <input type="text"></div>
    <div id="index">
      Card Index: <input type="text">
    </div>
    <div id="text">
      Text: <br>
      <button title="Bold" class="rich-control" @click="formatText(printBold)"><b>B</b></button>
      <button title="Italic" class="rich-control" @click="formatText(printItalic)"><i>I</i></button>
      <button title="Bullet List" class="rich-control" @click="formatText(printList)">&bullet;</button>
      <textarea cols="60" rows="30" v-model="rawText" placeholder="add multiple lines"></textarea>
    </div>
    <div id="preview">
      Preview:<br>
      <output style="white-space: pre-line;" v-html="safeText"></output>
    </div>
    <div id="image-override">
      Image Override: <br>
      <input type="text"> <button>Open...</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        rawText: "",
        entityMap: {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
          '/': '&#x2F;',
          '`': '&#x60;',
          '=': '&#x3D;'
        }
      }
    },
    computed: {
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
    display: grid;
    grid-template-areas:
      "title   .       index"
      "text    .       preview"
      "imageOv imageOv .";
    grid-template-columns: 4fr 0.5fr 4fr;
    grid-template-rows: max-content 1fr max-content;

    >* {
      display: block;
      margin: 10px;
    }

    #title {
      grid-area: title;
    }

    #index {
      grid-area: index;
      input {width: 4ch;}
    }

    #text {
      grid-area: text;
      textarea {
        resize: none;
        width: 100%;
        min-height: 10rem;
        padding: 5px;
        font-size: 1rem;
        font-family: sans-serif;
      }
    }

    #preview {
      grid-area: preview;
      output {
        overflow-wrap: break-word;
        font-size: 1rem;
        font-family: sans-serif;
      }
    }
    
    #image-override {
      grid-area: imageOv;
      input {
        width: 50%;
      }
    }
  }

  .rich-control {
    width: 2rem;
    height: 2rem;
  }
</style>
