<template>
  <div class="index">
    <router-link to="/home"><img alt="Index Page" src="../assets/Index.jpeg"></router-link>
    <h1> Bird-House </h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'index'
}
</script>

<style scoped>
img{
  max-width: 100%;
  width: 800px;
  height: auto;
  vertical-align: center;
}
</style>
