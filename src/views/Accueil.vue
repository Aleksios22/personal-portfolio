<template>
  <section 
  id="accueil" 
  class="w-full h-lg flex flex-col-reverse lg:flex-row-reverse bg-white grille">
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