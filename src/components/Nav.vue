<template>
  <nav style="height: 16%; z-index: 10" class="w-full flex self-end bg-white">
    <BoutonNav
      chemin="Projets"
      text="PROJETS"
      largeur="25%"
      espacement="0.05em"
    />
    <BoutonNav 
      chemin="Contact"
      text="CONTACT" 
      largeur="25%" 
      espacement="0em" />
    <BoutonNav 
      chemin="Infos"
      text="+ INFOS" 
      largeur="25%" 
      espacement="0.1em" />
    <BoutonNav 
      text="☼" 
      largeur="12.5%" 
      espacement="0em" 
      lien="false" />
    <BoutonNav 
      text="EN" 
      largeur="12.5%" 
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
