<template>
  <div class="upload">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>

</template>

<script>
</script>

<style scoped>

body {
  text-align: center;
}

</style>
