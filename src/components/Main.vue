<template>
  <main
    class="flex flex-col bg-white w-screen h-screen justify-center items-center"
  >
    <Renderer
      ref="renderer"
      alpha= true
      antialias= true
      mouseMove= true
      style="position: absolute"
      resize= true
      width="1000"
    >
      <Camera :position="{ z: 10 }" />
      <Scene>
        <PointLight :position="{ x: 25, y: -50, z: 50 }" />
        <Tetrahedron
          ref="Tetrahedron"
          :scale="{ x: 3.8, y: 3.8, z: 3.8 }"
          :rotation="{ y: Math.PI / 17, z: Math.PI / 7 }"
          :position="{ x: -7, y: 3, z: 0 }"
        >
          <LambertMaterial color="#85B36B" />
        </Tetrahedron>
      </Scene>
    </Renderer>
    <Cadre></Cadre>
  </main>
</template>

<script>
import Cadre from "./Cadre.vue";

export default {
  name: "Main",

  components: {
    Cadre,
  },

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
