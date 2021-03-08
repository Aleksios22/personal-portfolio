<template>
  <div
    style="width: 95%; height: 90%"
    class="flex flex-col bg-gray-200 border-black border-4 my-5 mx-32"
  >
    <ContenuProjets />
    <Nav pageCourante="Projets" />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import ContenuProjets from "./ContenuProjets.vue";

export default {
  name: "CadreProjets",
  components: {
    Nav,
    ContenuProjets,
  },
  data() {
    return {};
  },
};
</script>
