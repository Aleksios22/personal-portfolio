<template>
  <section
    id="projets"
    style="height: 84%;"
    class="w-full h-full bg-white grille container">
  
        <BtnPyramideAcc />

        <Carousel :items-to-show="1.5" :wrap-around="true" class="caroussel z-30">
          <Slide v-for="(image, index) in images" :key="index.id">
            <div class="carousel__item"><img src="{{image.src}}" alt=""></div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>

        <DescProjet class="description" />
        <ListeProjets class="liste" />

  </section>
</template>


<script>
  import DescProjet from '../components/DescProjet.vue';
  import ListeProjets from '../components/ListeProjets.vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  import BtnPyramideAcc from '../components/BtnPyramideAcc.vue';
  import imgProjets from '../assets/data/imgProjets.json';



  export default {
    name: 'Projets',

    components: {
      DescProjet,
      BtnPyramideAcc,
      ListeProjets,
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },

    data() {
      return {
        images: imgProjets,
      }
    },

    mounted() {
      console.log(this.images[0].src);
      
    }


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

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: black;
  width: 50px;
  height: 50px;
}

</style>