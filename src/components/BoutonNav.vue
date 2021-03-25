<template>
  <button
    v-if="lien === 'false'"
    :style="{ width: largeur, letterSpacing: espacement }"
    class="btn text-6xl text-center flex items-center justify-center"
    style="font-family: barlowBold; height: 95"
    @click="lumiereMode"
  >
    {{ text }}
  </button>
  <router-link
    v-else
    :to="'/' + chemin"
    :style="{ width: largeur, letterSpacing: espacement }"
    class="btn text-6xl text-center flex items-center justify-center"
    style="font-family: barlowBold; height: 95"
    @click="obtenirRoute"
    >{{ text }}</router-link
  >
</template>

<script>
export default {
  name: "BoutonNav",
  props: {
    text: String,
    largeur: String,
    espacement: String,
    chemin: String,
    lien: String,
  },

  methods: {
    lumiereMode() {
      console.log('Mode sombre');
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  top: -4px;
  left: 8px;
  transition: all 0.15s linear 0s;
  position: relative;
  box-shadow: -4px 4px 0px 4px rgb(19, 19, 19);
  border: solid black 4px;
  background: white;
  z-index: 10;

  &:hover {
    top: 0px;
    left: 0px;
    box-shadow: none;
    background: #ececec;
    border-left: solid black 4px;
    z-index: -1;

    &::after {
      top: 1px;
      left: -2px;
      width: 4px;
      height: 4px;
    }

    &::before {
      bottom: -2px;
      right: 1px;
      width: 4px;
      height: 4px;
    }
  }
}
</style>
