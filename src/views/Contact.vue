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

    <ul class="h-full w-full flex flex-wrap justify-around p-20 ListeSociale bg-white border-black border-r-4">
      <li class="w-2/6">
        <img class="w-24 box-content p-4 cursor-pointer" src="/Images/Icons/png/004-email.png" alt=""
          @click="actif = 'Email'" :class="{actif:actif === 'Email'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/001-telephone.png" alt=""
          @click="actif = 'telephone'" :class="{actif:actif === 'telephone'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/012-placeholder.png" alt=""
          @click="actif = 'localisation'" :class="{actif:actif === 'localisation'}">
      </li>
      <hr>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/052-linkedin.png" alt=""
          @click="actif = 'linkedIn'" :class="{actif:actif === 'linkedIn'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/032-github.png" alt=""
          @click="actif = 'gitHub'" :class="{actif:actif === 'gitHub'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/007-behance.png" alt=""
          @click="actif = 'behance'" :class="{actif:actif === 'behance'}">
      </li>
    </ul>

  </section>
</template>

<script>
import { onMounted } from 'vue'
  export default {
    name: "Contact",


  data(){
        return{
          actif: "Email"
        }
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
      "ListeSociale ."
      "ListeSociale .";
  }
  .ListeSociale {
     grid-area: ListeSociale; 
  }
  .actif {
    border: solid black 4px;
  }
</style>
