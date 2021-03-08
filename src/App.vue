<template>
  <!-- <Main /> -->
  <router-view></router-view>
</template>

<script>
import Main from "./components/Main.vue";
import Projets from "./components/Projets.vue";

export default {
  name: "App",

  components: {
    Main,
    Projets,
  },
};
</script>

<style lang="scss">
// --------------MOBILE FIRST---------------
@font-face {
  font-family: barlowBold;
  src: url("./assets/Fonts/Barlow/Barlow-Bold.ttf");
}
@font-face {
  font-family: barlowMediumItalic;
  src: url("./assets/Fonts/Barlow/Barlow-MediumItalic.ttf");
}
@font-face {
  font-family: barlowBoldItalic;
  src: url("./assets/Fonts/Barlow/Barlow-BoldItalic.ttf");
}
@font-face {
  font-family: IBMPlexMonoSemiBold;
  src: url("./assets/Fonts/IBM-Plex-Mono/IBMPlexMono-SemiBold.ttf");
}
</style>
