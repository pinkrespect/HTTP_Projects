<template>
  <div id="DivBox">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <TEST/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TEST from './components/TEST.vue'

export default {
  components: {
    'HelloWorld': HelloWorld,
    'TEST': TEST
  }
}
</script>

<style>
#DivBox {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
