<template>
    <ol class="w-full h-full overflow-y-hidden ListeInfos bg-white border-black border-r-4" style="height: 100%">
        <li style="height: 34%; font-family: barlowMediumItalic"
            class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer"
                  :class="{selectionne:selectionne === 0}"
                    @click="log(0)">
            Savoir-faire
        </li>
        <li style="height: 34%; font-family: barlowMediumItalic"
            class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer"
                    :class="{selectionne:selectionne === 1}"
                    @click="log(1)">
            Sur Moi
        </li>
        <a href="https://flowcv.io/resume/feedback/7zIS1nyjNMSB" target="_blank"
        style="height: 34%; font-family: barlowMediumItalic"
            class="w-full flex justify-start border-b-4 border-black text-6xl pl-7 text-center items-center cursor-pointer">
            Mon CV
        </a>
    </ol>
</template>

<script>

export default {
  name: "ListeInfos",

  data() {
    return {
      selectionne: 0
    };
  },

  methods: {
    log(index) {
      this.$emit('choixCourant', index);
      this.selectionne = index
    }
  }
};
</script>


<style>
  .selectionne {
    background-color: #ececec;
  }
</style>