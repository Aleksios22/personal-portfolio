<template>
  <section id="contact" style="height: 84%;" class="w-full h-full bg-white grille grid-container-contact">
    <router-link :to="'/'" :style="{ width: largeur, letterSpacing: espacement }"
      class="btn text-6xl text-center flex items-center justify-center" style="
	        width: 150px;
	        height: 120px;
	        position: absolute;
	        place-self: flex-start start;
	        z-index: 100;
	        margin-top: -2rem;
	        margin-left: -1.8rem;">
    </router-link>

    <ListeContact class="ListeSociale" @choixCourant="choixCourant" />

    <div class="flex flex-col justify-center items-center ContenuSocial text-3xl"
          style="font-family: IBMPlexMonoSemiBold">
      <div v-if="selection == 'Email'" class="w-4/5 flex flex-col justify-center">
        <form class="w-full flex flex-col justify-items-center">
          <label for="name">Nom:</label><br>
          <input class="text-gray-500 p-1 mb-3 mt-1 border-black border-2" type="text" id="fname" name="fname" value="Votre Nom"><br>
          <label  for="email">Email:</label><br>
          <input class="text-gray-500 p-1 mt-1 mb-3 border-black border-2" type="text" id="lname" name="lname" value="...@mail.com"><br>
          <label  for="message">Message:</label><br>
          <textarea class="h-36 w-full border-black border-2 mt-1"  name="message" id="" cols="30" rows="10"></textarea>
          <input class="p-2 cursor-pointer mt-1 border-black border-2 bg-white" type="submit" value="Envoyer">
        </form>
      </div>
      <div v-else-if="selection == 'telephone'" class="border-black border-2 p-3 text-6xl bg-white">
        450-848-2389
      </div>
      <div class="w-10/12 h-4/6" v-else-if="selection == 'localisation'">
        <div style="overflow:hidden;resize:none;width:100%;height:100%;">
          <div id="canvasfor-googlemap" style="height:100%; width:100%;max-width:100%;">
            <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Villeray—Saint-Michel—Parc-Extension,+Montreal,+QC&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
            </iframe>
            </div>
            <a class="embedded-maphtml" href="https://dedicatedserver.expert" id="injectmap-data">
            </a>
        </div>
      </div>
    </div>




    

  </section>
</template>

<script>
  import ListeContact from '../components/ListeContact.vue';

  export default {
    name: "Contact",

    components: {
      ListeContact,
    },

    data() {
      return {
        selection: 'Email'
      }
    },

    methods: {
      choixCourant(choixCourant) {
          this.selection = choixCourant;
        },
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

  #canvasfor-googlemap img.text-marker {
    max-width:none!important;
    background:none!important;
    }
  img {
    max-width:none
    }
  

</style>