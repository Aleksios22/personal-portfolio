<template>
  <article
    style="height: 100%; width: 100%; font-family: IBMPlexMonoSemiBold"
    class="flex border-black border-t-4 tracking-widest text-lg p-6 z-20 bg-white"
  >
    <p
      >{{descProjet[indexProjet].description}}</p
    >
  </article>
</template>

<script>
  import imgProjets from '../assets/data/imgProjets.json';


  export default {
    name: "DescProjet",

    data() {
      return{
        descProjet: imgProjets
      }
    },

    props: {
      indexProjet: Number,
    },
  };
</script>
