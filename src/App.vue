<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>


<script setup>
  import Layout from './components/Layout.vue';
</script>


<style lang="scss">


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