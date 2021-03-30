<template>
  <article style="font-family: IBMPlexMonoSemiBold"
    class="w-full h-full border-black border-t-4 tracking-widest text-lg p-6 z-20 bg-white">
      <a target="_blank" :href="descProjet[indexProjet].lien" style="color: #85B36B">
        <b>{{descProjet[indexProjet].lien[0]}}</b>
      </a>
      <br>
    <p class="mt-3.5">{{descProjet[indexProjet].description}}</p>
    <p class="mt-3.5 text-base">Technologies utilisée : <i>{{descProjet[indexProjet].techs}}</i> </p>
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