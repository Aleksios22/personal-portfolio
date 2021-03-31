<template>
  <section id="infos" style="height: 84%;" class="w-full h-full bg-white grille grid-container-infos">
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

    <ListeInfos @choixCourant="choixCourant" />

    <div class="symbolesInfos">
      <div v-if="indexInfo == 0">

      </div>
      <div class="w-full h-full flex justify-center items-center text-9xl" v-else>
        <p>&#9786; &#9834; &#9860;</p>
      </div>
    </div>

    <article class="h-full flex justify-center items-center tracking-wider texteInfos text-xl p-6 bg-white border-black border-t-4" style="font-family: IBMPlexMonoSemiBold">
        <div class="w-11/12 leading-relaxed">
            <p>{{leTexte}}</p>
        </div>
    </article>

  </section>
</template>

<script>
  import ListeInfos from '../components/ListeInfos.vue';
  import textesInfo from '../assets/data/textesInfos.json';


  export default {
      name: 'Infos',

        components: {
          ListeInfos
        },

        data() {
          return {
            leTexte: textesInfo[0].contenu,
            indexInfo: 0,

          }
        },

        methods: {
          choixCourant(choixCourant) {
            this.leTexte = textesInfo[choixCourant].contenu;
            this.indexInfo = choixCourant
          }
        }
      }

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

  .ListeInfos {
    grid-area: ListeInfos;
  }

  .symbolesInfos {
    grid-area: symbolesInfos;
  }

  .texteInfos {
    // display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      ". . ."
      ". . .";
    grid-area: texteInfos;
  }
</style>