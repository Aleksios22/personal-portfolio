<template>
  <section id="accueil" class="w-full overflow-hidden h-full flex flex-col bg-white grille lg:h-84 lg:flex-row-reverse">

    <header class="header lg:hidden">
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
      <ul class="menu">
        <li><a href="#work">Projets</a></li>
        <li><a href="#about">Contact</a></li>
        <li><a href="#careers">+ Infos</a></li>
      </ul>
    </header>
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