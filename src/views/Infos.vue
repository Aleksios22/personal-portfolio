<template>
  <section
    id="infos"
    style="height: 84%;"
    class="w-full h-full bg-white grille container"
  >
   <!-- tu pourrais mettre ton link dans la nav commune -->
    <router-link
      :to="'/'"
      :style="{ width: largeur, letterSpacing: espacement }"
      class="btn text-6xl text-center flex items-center justify-center"
      style="
        width: 200px;
        height: 200px;
        position: absolute;
        align-self: flex-start;
        justify-self: start;
        z-index: 20;
        margin-bottom: 40rem;
        margin-left: 0.1rem;
      "
    >
    </router-link>

    <!-- intégrer le contenu de la page ici ou dans un component -->
    
  </section>
</template>

<script setup>

</script>