<template>
   <article>
      <p v-for="tours in toursBoucle" :key="tours">
       bonsoir
      </p>

    </article>
</template>

<script>
export default {
    data() {
        return {
            toursBoucle : 3,
            commentaires : null
        }
    },
    beforeCreate() {
       
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then(resultat => console.log(resultat));

    }
}
</script>

<style>

    article {
        border: 1px solid black;
    }

</style>