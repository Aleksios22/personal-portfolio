<template>
  <nav style="height: 16%; z-index: 10" class="w-full flex self-end bg-white">
    <BoutonNav text="PROJETS" largeur="25%" espacement="0.05em" />
    <BoutonNav text="CONTACTS" largeur="25%" espacement="0em" />
    <BoutonNav text="+ INFOS" largeur="25%" espacement="0.1em" />
    <BoutonNav text="☼" largeur="12.5%" espacement="0em" />
    <BoutonNav text="ANIM" largeur="12.5%" espacement="0em" />
  </nav>
</template>

<script>
import BoutonNav from "./BoutonNav.vue";

export default {
  name: "Nav",
  components: {
    BoutonNav,
  },
};
</script>
