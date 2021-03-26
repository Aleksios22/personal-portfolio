<template>
  <section
    id="projets"
    style="height: 84%;"
    class="w-full h-full bg-white grille container">
  
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

        <!-- <Carousel :items-to-show="1.5" :wrap-around="true" class="caroussel z-30">
          <Slide v-for="slide in 10" :key="slide">
            <div class="carousel__item"><img src="../assets/Images/Projets/tim2020_01.jpg" alt=""></div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel> -->
        <DescProjet class="description" />
        <ListeProjets class="liste" />

  </section>
</template>


<script>
  import DescProjet from '../components/DescProjet.vue';
  import ListeProjets from '../components/ListeProjets.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';



  export default {
    name: 'Projets',

    components: {
      DescProjet,
      ListeProjets,
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },

  }
</script>


<style lang="scss">
.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "caroussel caroussel liste"
  "description description liste";
  grid-template-columns: 120px 2fr 1fr;
  grid-template-rows: 1fr 250px;
}
.container > div {
  border: 1px dashed #888;
}

.caroussel {
  grid-area: caroussel;
}
.liste {
  grid-area: liste;
}
.description {
  grid-area: description;
}

</style>