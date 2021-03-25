<template>
  <main class="w-screen h-screen flex justify-center content-center">
    <Pyramide />
    <Cadre>
      <slot></slot>
      <Nav />
    </Cadre>
  </main>
</template>


<script>
  import Pyramide from './Pyramide.vue';
  import Cadre from './Cadre.vue';
  import Nav from "./Nav.vue";

  export default {
    name: 'Layout',

    components: {
      Pyramide,
      Cadre,
      Nav,
    },

  }
</script>