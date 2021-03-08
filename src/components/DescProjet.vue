<template>
  <article
    style="height: 35%; font-family: IBMPlexMonoSemiBold"
    class="flex w-full border-black border-t-4 tracking-widest text-lg p-6"
  >
    <a @click="onClickButton"
      >Aucun projet n'a été intégré pour le moment. La section CONTACT et +INFOS
      ne fonctionnent pas encore. Désolé pour la pauvreté du contenu.</a
    >
  </article>
</template>

<script>
export default {
  name: "DescProjet",

  methods: {
    onClickButton() {
      location.href = "https://github.com/Aleksios22/tim2020";
    },
  },
};
</script>
