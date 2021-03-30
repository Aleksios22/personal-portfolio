<template>
  <section
    id="infos"
    style="height: 84%;"
    class="w-full h-full bg-white grille grid-container-infos"
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

    <ol class="w-full h-full overflow-y-hidden ListeInfos bg-white border-black border-r-4" style="height: 100%">>
      <li style="height: 32%; font-family: barlowMediumItalic"
      class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer">
        Savoir-faire
      </li>
      <li style="height: 32%; font-family: barlowMediumItalic"
      class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer">
        Sur Moi
      </li>
      <li style="height: 32%; font-family: barlowMediumItalic"
      class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer">
        Mon CV
      </li>
    </ol>

    <div class="symbolesInfos">

    </div>

    <article class="h-full texteInfos bg-white border-black border-t-4">

    </article>



  </section>
</template>

<script setup>

</script>


<style lang="scss" scoped>
  .grid-container-infos {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr 1fr;
    grid-template-rows: 0.6fr 1.4fr;
    gap: 0px 0px;
    grid-template-areas:
      "ListeInfos symbolesInfos symbolesInfos"
      "ListeInfos texteInfos texteInfos";
  }
  .ListeInfos { grid-area: ListeInfos; }
  .symbolesInfos { grid-area: symbolesInfos; }
  .texteInfos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". . ."
      ". . .";
    grid-area: texteInfos;
  }
</style>