<template>
  <aside>
      <h3>je suis un aside</h3>
      <h5> {{ nombre }} </h5>
      <button v-on:click="this.ajouter"> plus </button>
      <button @click="this.diminuer"> moins </button>
      <!-- v-model, pour relier les champs et les données -->
      <input type="number" v-model="nombre">
    </aside>
</template>

<script>
export default {
    data() {
       return {
           nombre : 0
       } 
    },
    methods: {

        ajouter() {
            this.nombre++;
        },

        diminuer() {
            this.nombre--;
        }
    }
}
</script>