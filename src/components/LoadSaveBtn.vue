<template>
  <div class="container">
    <a href="#" @click="save" class="loadsavebtn">&#128190;</a>
    <a href="#" @click="load" class="loadsavebtn">&#128194;</a>
  </div>
</template>

<script>
  export default {
    methods: {
      load: function() {
        const dialog = require("electron").remote.dialog;
        const fs = require("fs");
        let options = {
          properties: ["openFile", "promptToCreate"],
          filters: [
            {name: "JSON", extensions: ["json"]},
            {name: "All Files", extensions:["*"]}
          ]};
        dialog.showOpenDialog(null, options, (paths) => {
          if (typeof paths != "undefined") {
            let file = fs.readFileSync(paths[0]);
            file = JSON.parse(file);
            this.$root.$data.story  = file.story;
            this.$root.$data.events = file.events;
            this.$root.$data.fog    = file.fog;
          }
        });
        return false;
      },
      save: function() {
        const dialog = require("electron").remote.dialog;
        const fs = require("fs");
        let options = {filters: [{name: "JSON", extensions: ["json"]}]};
        let json = JSON.stringify(this.$root.$data);
        dialog.showSaveDialog(null, options, (paths) => {
          if (typeof path != "undefined")
            fs.writeFileSync(path, json);
        });
        return false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/components/theme.scss";
  .container {
    position: fixed;
    bottom: 0px;
    right: 0px;
  }

  .loadsavebtn {
    @include theme-light;
    display: block;
    height: 60px;
    width: 60px;
    border-radius: 30px;
    text-align: center;
    line-height: 60px;
    font-size: 1.5rem;
    text-decoration: none;
    box-shadow: 0 0 12px black;
    margin: 12px;
    opacity: .2;
    transition: .1s ease-in-out opacity;

    &:hover {
      opacity: 1;
    }
  }
</style>
