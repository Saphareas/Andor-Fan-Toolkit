<template>
  <nav>
    <img alt="App Logo" src="../assets/andor.png">
    <div class="float-top">
      <MenuItem title="Story Editor" :icon="storyIcon" url="#"></MenuItem>
      <MenuItem title="Event Editor" :icon="eventIcon" url="#"></MenuItem>
      <MenuItem title="Fog Editor" :icon="fogIcon" url="#"></MenuItem>
    </div>
    <div class="float-bottom">
      <MenuItem title="Settings" :icon="settingsIcon" url="#"></MenuItem>
      <MenuItem title="Support" :icon="supportIcon" url="#"></MenuItem>
    </div>
  </nav>
</template>

<script>
  import MenuItem from "./SideMenu/MenuItem"
  import storyIcon from "../assets/story.png"
  import eventIcon from "../assets/events.png"
  import fogIcon from "../assets/fog.png"
  import supportIcon from "../assets/heart.png"
  import settingsIcon from "../assets/cog.png"

  export default {
    name: "SideMenu",
    data: function() {
      return {
        storyIcon: storyIcon,
        eventIcon: eventIcon,
        fogIcon: fogIcon,
        settingsIcon: settingsIcon,
        supportIcon: supportIcon
      }
    },
    components: { MenuItem }
  }
</script>

<style lang="scss" scoped>
  @import "theme";
  $menuWidth: 60px;
  nav {
    width: $menuWidth;
    height: 100%;
    position: relative;
    @include theme-d4;

    >img {width: $menuWidth}

    .float-bottom {
      position: absolute;
      bottom: 0;
    }
  }
</style>
