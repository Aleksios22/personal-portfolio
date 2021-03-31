<template>
    <ul class="h-full w-full flex flex-wrap justify-around p-20 bg-white border-black border-r-4">
      <li class="w-2/6">
        <img class="w-24 box-content p-4 cursor-pointer" src="/Images/Icons/png/004-email.png" alt=""
          @click="actif = 'Email'; log('Email')" :class="{actif:actif === 'Email'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/001-telephone.png" alt=""
          @click="actif = 'telephone'; log('telephone')" :class="{actif:actif === 'telephone'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/012-placeholder.png" alt=""
          @click="actif = 'localisation'; log('localisation')" :class="{actif:actif === 'localisation'}">
      </li>
      <hr>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/052-linkedin.png" alt=""
          @click="actif = 'linkedIn'; log('linkedIn')" :class="{actif:actif === 'linkedIn'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/032-github.png" alt=""
          @click="actif = 'gitHub'; log('gitHub')" :class="{actif:actif === 'gitHub'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/007-behance.png" alt=""
          @click="actif = 'behance';  log('behance')" :class="{actif:actif === 'behance'}">
      </li>
    </ul>
</template>


<script>
export default {
    name: 'ListeContact',

    data(){
        return{
        actif: "Email"
        }
    },

    methods: {
        log(index) {
            this.$emit('choixCourant', index);
            this.selectionne = index
        }
  }
}
</script>

<style>
    .actif {
    border: solid black 4px;
  }
</style>