<template>
  <section
    id="projets"
    style="height: 84%;
          background-image:  linear-gradient(#737373 2.1px, transparent 2.1px), linear-gradient(to right, #737373 2.1px, #ffffff 2.1px);
          background-size: 60px 60px;" 
    class="w-full h-full flex bg-white">
  
    <router-link
      :to="'/'"
      :style="{ width: largeur, letterSpacing: espacement }"
      class="btn text-6xl text-center flex items-center justify-center"
      style="
        width: 100px;
        height: 100px;
        position: absolute;
        align-self: flex-start;
        justify-self: start;
        z-index: 20;
        margin-top: -2rem;
        margin-left: -1.8rem;"
    >
    </router-link>
      <article style="width: 70%" class="flex flex-col">
        <DescProjet />
      </article>
        <ListeProjets />

  </section>
</template>


<script setup>
  import DescProjets from '../components/DescProjet.vue';
  import ListeProjets from '../components/ListeProjets.vue';
</script>