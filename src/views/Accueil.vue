<template>
  <section 
  id="accueil" 
  class="w-full h-full flex flex-col-reverse bg-white grille lg:h-84 lg:flex-row-reverse">
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