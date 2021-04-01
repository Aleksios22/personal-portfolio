<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>


<script setup>
  import Layout from './components/Layout.vue';
</script>


<style lang="scss">

@font-face {
  font-family: barlowBold;
  src: url("./assets/Fonts/Barlow/Barlow-Bold.ttf");
}

@font-face {
  font-family: barlowMediumItalic;
  src: url("./assets/Fonts/Barlow/Barlow-MediumItalic.ttf");
}

@font-face {
  font-family: barlowBoldItalic;
  src: url("./assets/Fonts/Barlow/Barlow-BoldItalic.ttf");
}

@font-face {
  font-family: IBMPlexMonoSemiBold;
  src: url("./assets/Fonts/IBM-Plex-Mono/IBMPlexMono-SemiBold.ttf");
}

.grille {
  background-color: #ffffff;
  opacity: 1;
  background-image:  linear-gradient(#5a5a5a 2.1px, transparent .2px), linear-gradient(to right, #5a5a5a .2px, #ffffff 2.1px);
  background-size: 40px 40px;
}

::-moz-selection { /* Code for Firefox */
  background: #aeda97;
}

::selection {
  background: #aeda97;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li {
  background-color: white;
  border-top: black solid 2px;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header {
  display: block;
  float: left;
  font-size: 2em;
  text-decoration: none;
  width: 100%;
  z-index: 200;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
  font-family: barlowBold;
  width: 100%;
  margin-top: 250px;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 3px;
  position: relative;
  transition: background .2s ease-out;
  width: 25px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 300px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}


</style>