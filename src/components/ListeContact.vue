<template>
    <ul class="h-full w-full flex flex-wrap justify-around p-20 bg-white border-black border-r-4">
      <li class="w-2/6">
        <img class="w-24 box-content p-4 cursor-pointer" src="/Images/Icons/png/004-email.png" alt=""
          @click="log('Email')" :class="{actif:actif === 'Email'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/001-telephone.png" alt=""
          @click="log('telephone')" :class="{actif:actif === 'telephone'}">
      </li>
      <li class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/012-placeholder.png" alt=""
          @click="log('localisation')" :class="{actif:actif === 'localisation'}">
      </li>
      <hr>
      <a href="https://www.linkedin.com/in/alexis-rochon-67293b1ba/" target="_blank" class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/052-linkedin.png" alt="">
      </a>
      <a href="https://github.com/Aleksios22" target="_blank" class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/032-github.png" alt="">
      </a>
      <a href="https://www.behance.net/alexisrochon1" target="_blank" class="w-2/6">
        <img class="w-24 box-content  p-4 cursor-pointer" src="/Images/Icons/png/007-behance.png" alt="">
      </a>
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
            log(choix) {
                this.$emit('choixCourant', choix);
                this.actif = choix;            
            }
      }
    }
</script>

<style>
    .actif {
        border: solid black 4px;
    }
</style>