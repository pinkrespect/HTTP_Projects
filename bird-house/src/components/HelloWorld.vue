<!-- Add here for index-->
<template>

  <H1> Hello, World! </H1>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
H1 {
  font-style: italic;
}
</style>
