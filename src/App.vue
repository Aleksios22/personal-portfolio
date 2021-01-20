<template>
  <main>
    <h1>En construction ...</h1>
    <h2>
      Portfolio temporaire sur mon
      <a href="https://www.behance.net/alexisrochon1/projects">Behance</a>
    </h2>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
// --------------MOBILE FIRST---------------
@font-face {
  font-family: nimbusReg;
  src: url("./assets/Fonts/nimbus-mono/nimbusmono-regular.otf");
}
@font-face {
  font-family: nimbusBold;
  src: url("./assets/Fonts/nimbus-mono/nimbusmono-bold.otf");
}
body {
  background: #fef7cb;
  overflow: hidden;
  #app {
    width: 100vw;
    height: 100vh;
    font-family: "nimbusReg";
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    main {
      text-align: center;
      h1 {
        font-family: "nimbusBold";
        font-size: 1.6rem;
      }
      h2 {
        font-size: 0.9rem;
        a {
          color: #85b36b;
          font-size: 1.2rem;
          text-decoration: none;
        }
      }
    }
  }
}
// --------------TABLETTE---------------
@media screen and (min-width: 640px) {
  body {
    #app {
      main {
        h1 {
          font-size: 2.2rem;
        }
        h2 {
          font-size: 1.4rem;
          a {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1008px) {
  body {
    #app {
      main {
        h1 {
          font-size: 2.6rem;
        }
        h2 {
          font-size: 1.6rem;
          a {
            font-size: 2rem;
          }
        }
      }
    }
  }
}
</style>
