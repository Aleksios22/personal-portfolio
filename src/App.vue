<template>
  <h1>bonjour, allo</h1>
  <main>
    <MonArticle/>
    <MonArticle/>
    <MonAside/>
    <MonAside/>
    <MonAside/>
    <MonAside/>
  </main>
</template>

<script>
import MonArticle from "./components/MonArticle.vue";
import MonAside from "./components/MonAside.vue";

export default {

  components : {
    MonArticle,
    MonAside
  }

};
</script>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
}
</style>