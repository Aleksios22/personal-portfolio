<template>
  <section 
  id="accueil" 
  style="height: 84%;
          background-color: #ffffff;
          opacity: 1;
          background-image:  linear-gradient(#737373 2.1px, transparent 2.1px), linear-gradient(to right, #737373 2.1px, #ffffff 2.1px);
          background-size: 60px 60px;"
  class="w-full flex flex-row-reverse bg-white">
    <PanPresentation />
  </section>
</template>


<script>
  import PanPresentation from "../components/PanPresentation.vue";

  export default {
  name: "Accueil",

    components: {
      PanPresentation,
    }
  };

</script>