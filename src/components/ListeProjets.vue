<template>
  <ul
    class="h-full w-full bg-white border-black border-l-4 overflow-y-auto block z-10"
  >
    <li
      v-for="item in projets"
      :key="item.projet"
      style="height: 22%; font-family: barlowMediumItalic"
      class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer"
    >
      {{ item.projet }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListeProjets",

  data() {
    return {
      projets: [
        { projet: "Web 01" },
        { projet: "Web 02" },
        { projet: "Web 03" },
        { projet: "Jeu 01" },
        { projet: "Jeu 02" },
        { projet: "3D 01 " },
        { projet: "3D 01 " },
        { projet: "3D 01 " },
        { projet: "3D 01 " },
        { projet: "3D 01 " },
      ],
    };
  },
};
</script>
