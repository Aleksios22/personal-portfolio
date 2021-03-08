<template>
  <section
    id="projets"
    class="flex flex-col bg-gray w-screen h-screen justify-center items-center"
  >
    <router-link
      :to="'/'"
      :style="{ width: largeur, letterSpacing: espacement }"
      class="btn text-6xl text-center flex items-center justify-center"
      style="
        width: 200px;
        height: 200px;
        position: absolute;
        align-self: flex-start;
        justify-self: start;
        z-index: 20;
        margin-bottom: 40rem;
        margin-left: 0.1rem;
      "
    >
    </router-link>
    <Renderer
      ref="renderer"
      alpha="true"
      antialias="true"
      mouseMove="true"
      style="position: absolute"
      resize="true"
      width="1000"
    >
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ x: 25, y: -50, z: 50 }" />
        <Tetrahedron
          ref="Tetrahedron"
          :scale="{ x: 1, y: 1, z: 1 }"
          :rotation="{ y: Math.PI / 17, z: Math.PI / 7 }"
          :position="{ x: -9, y: 4, z: 0 }"
          v-on:click="cl"
        >
          <LambertMaterial color="#85B36B" />
        </Tetrahedron>
      </Scene>
    </Renderer>
    <CadreProjets></CadreProjets>
  </section>
</template>

<script>
import CadreProjets from "./CadreProjets.vue";

export default {
  name: "Projets",

  components: {
    CadreProjets,
  },

  methods: {},

  mounted() {
    const renderer = this.$refs.renderer;
    const Tetrahedron = this.$refs.Tetrahedron.mesh;
    renderer.onBeforeRender(() => {
      Tetrahedron.rotation.x += 0.01;
      Tetrahedron.rotation.y += 0.005;
    });
  },
};
</script>
