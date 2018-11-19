<template>
  <div id="DivBox">
    <img id="Main" alt="Vue logo" src="./assets/logo.png">
      <MenuBar/>
      <HelloWorld/>
      <TEST/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TEST from './components/TEST.vue'
import MenuBar from './components/MenuBar.vue'

export default {
  components: {
    HelloWorld,
    TEST,
    MenuBar
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
  background-color: rgba(0, 0, 0, 0.9);
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
