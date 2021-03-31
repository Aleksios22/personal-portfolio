<template>
    <Renderer
      ref="renderer"
      alpha="true"
      style="  width: 100vw;
                height: 100vh;
                display: block;
                position: fixed;
                z-index: 100;
                top: 0;
                left: 0;
                pointer-events: none;"
      resize="true"
      width="10000"
      mouse-move 
      mouse-raycast
      orbit-ctrl
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
</template>


<script>
export default {

  name: "Pyramide",

  data() {
    return {
      grosseurPyramide: {},
    }
  },

  props: {
    grosseurPyramide: Object
  },

  mounted() {
    const renderer = this.$refs.renderer;
    const Tetrahedron = this.$refs.Tetrahedron.mesh;
    renderer.onBeforeRender(() => {
      Tetrahedron.rotation.x += 0.01;
      Tetrahedron.rotation.y += 0.005;
      this.$route.path != "/" ? Tetrahedron.scale.set( 1, 1, 1 ) : Tetrahedron.scale.set( 3.8, 3.8, 3.8 );
      this.$route.path != "/" ? Tetrahedron.position.set( -9, 4, 0 ) : Tetrahedron.position.set( -7, 3, 0 )
  });
  },
// } 
};
</script>