<template>
  <nav>
    <router-link to="/" id="logo">
      <img alt="App Logo" src="../assets/andor.png">
    </router-link>
    <div class="float-top">
      <MenuItem title="Story Editor" :icon="storyIcon" url="#"></MenuItem>
      <MenuItem title="Event Editor" :icon="eventIcon" url="#"></MenuItem>
      <MenuItem title="Fog Editor" :icon="fogIcon" url="#"></MenuItem>
    </div>
    <div class="float-bottom">
      <MenuItem title="Settings" :icon="settingsIcon" url="/settings"></MenuItem>
      <MenuItem title="Support" :icon="supportIcon" url="/about"></MenuItem>
    </div>
  </nav>
</template>

<script>
  import MenuItem from "./SideMenu/MenuItem"
  import storyIcon from "../assets/library-books.svg"
  import eventIcon from "../assets/card-text.svg"
  import fogIcon from "../assets/weather-fog.svg"
  import supportIcon from "../assets/heart.svg"
  import settingsIcon from "../assets/settings.svg"

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
  @import "@/components/theme.scss";
  $menuWidth: 60px;
  nav {
    @include theme-dark;
    width: $menuWidth;
    height: 100vh;
    position: fixed;
    box-shadow: 0 1px 6px black;

    #logo img {width: $menuWidth}

    .float-bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
</style>
