<template>
  <section
    id="contact"
    style="height: 84%;"
    class="w-full h-full bg-white grille grid-container-contact"
  >
  <!-- tu pourrais mettre ton link dans la nav commune -->
    <router-link
      :to="'/'"
      :style="{ width: largeur, letterSpacing: espacement }"
      class="btn text-6xl text-center flex items-center justify-center"
      style="
	        width: 150px;
	        height: 120px;
	        position: absolute;
	        place-self: flex-start start;
	        z-index: 100;
	        margin-top: -2rem;
	        margin-left: -1.8rem;"
    >
    </router-link>

    <ul class="ListeSociale bg-white h-full border-black border-r-4">

    </ul>

  </section>
</template>

<script setup>
</script>


<style>
  .grid-container-contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "ListeSociale ."
      "ListeSociale .";
  }
  .ListeSociale { grid-area: ListeSociale; }
</style>
