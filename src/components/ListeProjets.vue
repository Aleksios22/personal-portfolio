<template>
  <ul
    class="h-full w-full bg-white border-black border-l-4 overflow-y-auto block z-10"
  >
    <button
      v-for="(item, index) in projets"
      :key="item"
      style="height: 22%; font-family: barlowMediumItalic"
      class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer"
      @click="log(index)"

    >
      {{ item.nom }}
    </button>
  </ul>
</template>

<script>
  import imgProjets from '../assets/data/imgProjets.json';

export default {
  name: "ListeProjets",

  data() {
    return {
      projets: imgProjets
    };
  },

  methods: {
    log(index) {
      this.$emit('choixCourant', index)
    }
  }
};
</script>