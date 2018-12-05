<template>
  <h1> Hello, World! </h1>
</template>

<style>
body {
  margin: 0;
  background-image: url("../assets/IMG_VER.jpeg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  text-align: center;
}
@media screen and (min-aspect-ratio:1/1) {
  body {
    background-image: url("../assets/IMG_HO.jpeg");
    width: 100vw;
  }
}
H1 {
  font-style: italic;
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
