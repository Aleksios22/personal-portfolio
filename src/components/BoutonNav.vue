<template>
  <button
    :style="{ width: largeur, letterSpacing: espacement }"
    class="btn text-6xl"
    style="font-family: barlowBold; height: 95"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BoutonNav",
  props: {
    text: String,
    largeur: String,
    espacement: String,
  },
};
</script>

<style lang="scss" scoped>
.btn {
  top: -4px;
  left: 8px;
  transition: all 0.15s linear 0s;
  position: relative;
  display: inline-block;
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
