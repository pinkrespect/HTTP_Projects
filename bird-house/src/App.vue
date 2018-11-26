<template>
  <div id="DivBox">
    <img id="Main" alt="Vue logo" src="./assets/logo.png">
      <Index/>
      <HelloWorld/>
      <TEST/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TEST from './components/TEST.vue'
import Index from './components/Index.vue'

export default {
  components: {
    HelloWorld,
    TEST,
    Index
  }
}
</script>

<style>

body {
  margin: 0;
  background-image: url("./assets/IMG_VER.jpeg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: center;
}

@media screen and (min-aspect-ratio:1/1) {
  body {
    background-image: url("./assets/IMG_HO.jpeg");
    width: 100vw;
  }
}

#DivBox {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
