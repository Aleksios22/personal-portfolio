<template>
  <nav style="z-index: 20" class="w-full h-sm flex self-end bg-white">
    <BoutonNav 
      class="hidden lg:flex"
      chemin="Projets"
      text="PROJETS"
      largeur="25%"
      espacement="0.05em"
    />
    <BoutonNav 
      class="hidden lg:flex"
      chemin="Contact"
      text="CONTACT" 
      largeur="25%" 
      espacement="0em" />
    <BoutonNav 
      class="hidden lg:flex"
      chemin="Infos"
      text="+ INFOS" 
      largeur="25%" 
      espacement="0.1em" />
    <BoutonNav 
      text="☼" 
      largeur="w-1/2" 
      espacement="0em" 
      lien="false" />
    <BoutonNav 
      text="EN" 
      largeur="w-1/2" 
      espacement="0em" 
      lien="false" />
  </nav>
</template>

<script>
  import BoutonNav from "./BoutonNav.vue";

  export default {
    name: 'Nav',

    components: {
      BoutonNav,
    },
  }
</script>

<style scoped>
  .active {
    top: 0px;
    left: 0px;
    box-shadow: none;
    background: #ececec;
    border-left: solid black 4px;
    z-index: -1;
  }
</style>
