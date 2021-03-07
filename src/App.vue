<template>
  <main
    class="flex flex-col bg-white w-screen h-screen justify-center items-center"
  >
    <Cadre></Cadre>
  </main>
</template>

<script>
import Cadre from "./components/Cadre.vue";

export default {
  name: "App",
  components: {
    Cadre,
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
  font-family: barlowBoldItalic;
  src: url("./assets/Fonts/Barlow/Barlow-BoldItalic.ttf");
}
@font-face {
  font-family: IBMPlexMonoSemiBold;
  src: url("./assets/Fonts/IBM-Plex-Mono/IBMPlexMono-SemiBold.ttf");
}
</style>
