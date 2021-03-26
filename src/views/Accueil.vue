<template>
  <section 
  id="accueil" 
  style="height: 84%;"
  class="w-full flex flex-row-reverse bg-white grille">
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