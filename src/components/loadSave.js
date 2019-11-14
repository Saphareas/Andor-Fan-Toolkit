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
          this.$store.commit("updateStory", file.story);
          this.$store.commit("updateEvents", file.events);
          this.$store.commit("updateFog", file.fog);
        }
      });
    },
    save: function() {
      const dialog = require("electron").remote.dialog;
      const fs = require("fs");
      let options = {filters: [{name: "JSON", extensions: ["json"]}]};
      let json = JSON.stringify(this.$store.state);
      dialog.showSaveDialog(null, options, (path) => {
        if (typeof path != "undefined")
          fs.writeFileSync(path, json);
      });
    }
  }
}