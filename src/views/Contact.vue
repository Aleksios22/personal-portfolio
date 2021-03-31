<template>
  <section
    id="contact"
    style="height: 84%;"
    class="w-full h-full bg-white grille grid-container-contact"
  >
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

  <ListeContact class="ListeSociale" />

  <div class="ContenuSocial">
    
  </div>

  </section>
</template>

<script>
  import ListeContact from '../components/ListeContact.vue';

  export default {
    name: "Contact",

    components: {
      ListeContact,
    }
  }
</script>


<style>
  .grid-container-contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "ListeSociale ContenuSocial"
      "ListeSociale ContenuSocial";
  }
  .ListeSociale {
     grid-area: ListeSociale; 
  }

  .ContenuSocial { 
    grid-area: ContenuSocial; 
  }
  

</style>