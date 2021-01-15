<template>
   <article>
      <p v-for="tours in toursBoucle" v-bind:key="tours">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
        distinctio doloribus iusto provident voluptas consequuntur assumenda
        repellendus optio tenetur vquae sit porro praesentium molestiae? Labore,
        ad cumque! Corrupti, sapiente ullam.
      </p>
    </article>
</template>

<script>
export default {
    data() {
        return {
            toursBoucle : 3
        }
    },
    beforeCreate() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(reponse => reponse.json())
        .then(resultat => this.posts = resultat)
    }
}
</script>

<style>
    article {
    border: 1px solid black;
    }
</style>