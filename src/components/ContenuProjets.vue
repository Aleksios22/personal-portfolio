<template>
  <section style="height: 84%" class="w-full flex bg-white">
    <div style="width: 70%" class="flex flex-col">
      <svg width="100%" height="65%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="smallGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="grey"
              stroke-width="2"
            />
          </pattern>
          <pattern
            id="grid"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse"
          >
            <rect width="400" height="400" fill="url(#smallGrid)" />
            <path
              d="M 400 0 L 0 0 0 400"
              fill="none"
              stroke="grey"
              stroke-width="2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <DescProjet />
    </div>
    <ListeProjets />
  </section>
</template>

<script>
import ListeProjets from "./ListeProjets.vue";
import DescProjet from "./DescProjet.vue";

export default {
  name: "ContenuProjets",
  components: {
    ListeProjets,
    DescProjet,
  },
  data() {
    return {};
  },
};
</script>
