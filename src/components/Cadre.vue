<template>
  <div
    style="width: 95%; height: 90%"
    class="flex flex-col bg-gray-200 border-black border-4 my-5 mx-32"
  >
    <Contenu />
    <Nav />
  </div>
</template>

<script>
import Contenu from "./Contenu.vue";
import Nav from "./Nav.vue";

export default {
  name: "Cadre",
  components: {
    Contenu,
    Nav,
  },
  data() {
    return {};
  },
};
</script>
